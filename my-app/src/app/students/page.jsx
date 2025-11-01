import SchemeList from './SchemeList';
import { schemesData } from './schemesData';

export const metadata = {
  title: 'Student Schemes Portal | Government Scholarships & Loans',
  description: 'Discover various student schemes, scholarships, and educational loans for Indian students',
};

export default function StudentsPage() {
  return <SchemeList schemes={schemesData} />;
}