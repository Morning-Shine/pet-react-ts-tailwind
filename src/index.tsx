import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import { store, persistor } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      {/* <BrowserRouter> */}
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <App />
        </PersistGate>
      </Provider>
      {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>
);
