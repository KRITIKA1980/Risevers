import SchemeList from '../elder-citizens/SchemeList'; // Reuse same component
import { elderSchemesData } from './schemesData';

export const metadata = {
  title: 'Elder Citizens Schemes | Pensions, Health & Support',
  description: 'Explore various welfare schemes, pensions, healthcare benefits, and support services for senior citizens in India.',
};

export default function ElderCitizensPage() {
  return <SchemeList schemes={elderSchemesData} />;
}
