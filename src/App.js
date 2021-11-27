import React from 'react';
import Auth from './Pages/Auth/Auth';
import Nav from './components/Nav/Nav';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';

import { shipping } from './data';

const App = () => {
  const [authType, setAuthType] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState(shipping);
  return (
    <div>
      <Nav
        setAuthType={setAuthType}
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      {authType ? (
        <Auth
          authType={authType}
          setAuthType={setAuthType}
          setAuthenticated={setAuthenticated}
        />
      ) : (
        <Home
          data={data}
          setData={setData}
          authenticated={authenticated}
          setAuthType={setAuthType}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
