import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import VisualTheme from '../components/VisualTheme';

export const metadata = { title: 'Sust@inAI 27 | Sydney 2027', description: 'International Conference on Sustainable Artificial Intelligence and Green Computing' };
export default function Layout({ children }) {
  return <html lang="en"><body><VisualTheme/><Nav/><main>{children}</main><Footer/></body></html>;
}
