import { Outlet, Link } from 'react-router-dom';
import '../styles/Fullweb.css';

export default function Fullweb() {
  return (
    <>
      <header className="headerWebsite">
        <h2>Math Magicians</h2>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/quote">Quote</Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
