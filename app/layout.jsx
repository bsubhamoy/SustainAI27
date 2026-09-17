import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = { title: 'Sust@inAI 27 | Sydney 2027', description: 'International Conference on Sustainable Artificial Intelligence and Green Computing' };
export default function Layout({ children }) { return <><Nav/><main>{children}</main><Footer/></>; }
