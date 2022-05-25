import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthWrapper } from './features/auth/AuthWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-bmxpdr-0.us.auth0.com'
      clientId='ECHHrkMoHGF0CZCM7IZHVng7FPxOJpvb'
      redirectUri={window.location.origin}
    >
      <AuthWrapper>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthWrapper>
    </Auth0Provider>
  </React.StrictMode>
);
