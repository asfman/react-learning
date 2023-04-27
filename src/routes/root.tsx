import { Outlet, Link } from 'react-router-dom';
import '../root.css';
import { routes } from '../constants'

export default function Root() {
  return (
    <div className="root">
      <div className="sidebar">
        <nav>
          <ol>
            {
              routes.map((route, index) => (
                <li key={index}>
                  <Link to={route.path}>{route.path}</Link>
                </li>
              ))
            }
          </ol>
        </nav>
      </div>
      <div className="detail">
        <Outlet />
      </div>
    </div>
  );
}
