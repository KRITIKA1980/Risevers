import SchemeList from './SchemeList';
import { farmerSchemesData } from './schemesData';

export const metadata = {
  title: 'Farmer Schemes Portal | Government Subsidies & Support',
  description: 'Explore various government schemes, subsidies, and support programs designed to help Indian farmers',
};

export default function FarmersPage() {
  return <SchemeList schemes={farmerSchemesData} />;
}
