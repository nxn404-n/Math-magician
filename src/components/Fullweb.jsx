import { Outlet } from 'react-router-dom';
import '../styles/Fullweb.css';

export default function Fullweb() {
  return (
    <>
      <header className="headerWebsite">
        <h2>Math Magicians</h2>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="calculator">Calculator</a></li>
            <li><a href="quote">Quote</a></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
