//about h
"use client";
import { useState, useEffect, useRef } from 'react';

export default function MentorPage() {
  const [activeTab, setActiveTab] = useState('chat');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'mentor', time: '10:00 AM' },
    { id: 2, text: 'I need help with my business plan', sender: 'user', time: '10:01 AM' },
  ]);
  const [callHistory, setCallHistory] = useState([
    { id: 1, type: 'video', mentor: 'Dr. Sarah Smith', duration: '25:30', date: '2024-01-15', status: 'completed' },
    { id: 2, type: 'audio', mentor: 'Prof. John Davis', duration: '15:45', date: '2024-01-14', status: 'completed' },
    { id: 3, type: 'video', mentor: 'Ms. Emma Wilson', duration: '--:--', date: '2024-01-16', status: 'missed' },
  ]);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);
  const messagesEndRef = useRef(null);

  const mentors = [
    { id: 1, name: 'Dr. Sarah Smith', specialty: 'Business Strategy', status: 'online', rating: 4.9 },
    { id: 2, name: 'Prof. John Davis', specialty: 'Career Guidance', status: 'online', rating: 4.8 },
    { id: 3, name: 'Ms. Emma Wilson', specialty: 'Skill Development', status: 'offline', rating: 4.7 },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate mentor reply
      setTimeout(() => {
        const replyMessage = {
          id: messages.length + 2,
          text: 'Thanks for your message. I understand your concern. Let me guide you through this.',
          sender: 'mentor',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, replyMessage]);
      }, 2000);
    }
  };

  const handleStartCall = (type) => {
    setIsCallActive(true);
    setIsVideoActive(type === 'video');
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setIsVideoActive(false);
    
    // Add to call history
    const newCall = {
      id: callHistory.length + 1,
      type: isVideoActive ? 'video' : 'audio',
      mentor: 'Dr. Sarah Smith',
      duration: '12:30',
      date: new Date().toISOString().split('T')[0],
      status: 'completed'
    };
    setCallHistory([newCall, ...callHistory]);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <h1 className="text-3xl font-bold text-[#1c2e57] mb-2">Mentor Connect</h1>
          <p className="text-gray-600">Get professional guidance from experienced mentors</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Mentors List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-[#1c2e57] mb-4">Available Mentors</h2>
              <div className="space-y-4">
                {mentors.map(mentor => (
                  <div key={mentor.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-gray-100">
                    <div className="relative">
                      <div className="w-12 h-12 bg-[#1c2e57] rounded-full flex items-center justify-center text-white font-bold">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${mentor.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#1c2e57]">{mentor.name}</h3>
                      <p className="text-sm text-gray-600">{mentor.specialty}</p>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm text-gray-600">{mentor.rating}</span>
                      </div>
                    </div>
                    <button className="bg-[#1c2e57] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#16325c]">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Chat/Call Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`flex-1 py-4 font-medium ${activeTab === 'chat' ? 'text-[#1c2e57] border-b-2 border-[#1c2e57]' : 'text-gray-500'}`}
                >
                  💬 Chat
                </button>
                <button
                  onClick={() => setActiveTab('call')}
                  className={`flex-1 py-4 font-medium ${activeTab === 'call' ? 'text-[#1c2e57] border-b-2 border-[#1c2e57]' : 'text-gray-500'}`}
                >
                  📞 Call
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`flex-1 py-4 font-medium ${activeTab === 'history' ? 'text-[#1c2e57] border-b-2 border-[#1c2e57]' : 'text-gray-500'}`}
                >
                  📚 History
                </button>
              </div>

              {/* Chat Tab */}
              {activeTab === 'chat' && (
                <div className="h-96 flex flex-col">
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#1c2e57] rounded-full flex items-center justify-center text-white font-bold">
                        SS
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1c2e57]">Dr. Sarah Smith</h3>
                        <p className="text-sm text-green-600">● Online</p>
                      </div>
                    </div>
                  </div>

                  {/* Messages Area */}
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    {messages.map(msg => (
                      <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                        <div className={`max-w-xs lg:max-w-md rounded-2xl p-3 ${msg.sender === 'user' ? 'bg-[#1c2e57] text-white' : 'bg-white border border-gray-200'}`}>
                          <p>{msg.text}</p>
                          <span className={`text-xs ${msg.sender === 'user' ? 'text-gray-300' : 'text-gray-500'} block text-right mt-1`}>
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#1c2e57]"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="bg-[#1c2e57] text-white px-6 py-2 rounded-lg hover:bg-[#16325c] transition-colors"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Call Tab */}
              {activeTab === 'call' && (
                <div className="h-96 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#1c2e57] to-[#16325c] text-white">
                  {!isCallActive ? (
                    <>
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                          <span className="text-2xl">👨‍🏫</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Connect with Mentor</h3>
                      <p className="text-white/80 mb-8 text-center">Choose your preferred way to connect with your mentor</p>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => handleStartCall('audio')}
                          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
                        >
                          <span>📞</span>
                          <span>Audio Call</span>
                        </button>
                        <button
                          onClick={() => handleStartCall('video')}
                          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
                        >
                          <span>🎥</span>
                          <span>Video Call</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6">
                        <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
                          <span className="text-4xl">👨‍🏫</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Dr. Sarah Smith</h3>
                      <p className="text-white/80 mb-2">{isVideoActive ? 'Video Call' : 'Audio Call'} - 12:30</p>
                      <p className="text-white/60 mb-8">Call in progress...</p>
                      <div className="flex space-x-4">
                        <button className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition-colors">
                          📞
                        </button>
                        <button
                          onClick={handleEndCall}
                          className="bg-red-500 text-white px-6 py-4 rounded-lg hover:bg-red-600 transition-colors"
                        >
                          End Call
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* History Tab */}
              {activeTab === 'history' && (
                <div className="h-96 overflow-y-auto">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#1c2e57] mb-4">Call & Chat History</h3>
                    <div className="space-y-3">
                      {callHistory.map(call => (
                        <div key={call.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${call.type === 'video' ? 'bg-blue-100' : 'bg-green-100'}`}>
                              {call.type === 'video' ? '🎥' : '📞'}
                            </div>
                            <div>
                              <h4 className="font-medium text-[#1c2e57]">{call.mentor}</h4>
                              <p className="text-sm text-gray-600">{call.date} • {call.duration}</p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${call.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {call.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
