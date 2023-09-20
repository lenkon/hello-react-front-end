import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <ul>
    <li>
      <NavLink to="/" role="button"><span>Home</span></NavLink>
      <NavLink to="/greet" role="button"><span>Greetings</span></NavLink>
    </li>
  </ul>
);

export default NavBar;
