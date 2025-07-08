import { useState } from 'react';
import Login from './login';
import Dashboard from './dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return <Dashboard />;
  } else {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }
}

export default App;
