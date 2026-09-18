import {
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Discord Dashboard</h2>

      <p>
        Welcome to the Community Management Dashboard.
      </p>

      <Link to="/week-5/servers">
        View Servers
      </Link>
    </div>
  );
}

function Servers() {
  return (
    <div>
      <h2>Discord Servers</h2>

      <ul>
        <li>
          <Link to="/week-5/servers/101">
            Study Hub
          </Link>
        </li>

        <li>
          <Link to="/week-5/servers/102">
            Gaming Community
          </Link>
        </li>
      </ul>
    </div>
  );
}

function ServerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Server Details</h2>

      <p>Discord Server ID: {id}</p>

      <button onClick={() => navigate('/week-5/servers')}>
        Back to Servers
      </button>
    </div>
  );
}

function Week5() {
  return (
    <div>
      <h1>Week 5 - React Router & Navigation</h1>

      <nav>
        <Link to="/week-5">
          Dashboard
        </Link>
        {' | '}
        <Link to="/week-5/servers">
          Servers
        </Link>
      </nav>

      <hr />

      <Routes>
        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="servers"
          element={<Servers />}
        />

        <Route
          path="servers/:id"
          element={<ServerDetails />}
        />
      </Routes>
    </div>
  );
}

export default Week5;