import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { ToastContainer } from 'react-toastify';
import AppContext from './utils/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppContext>
      <App />
    </AppContext>
    <ToastContainer position="top-center" autoClose={2000} />
  </Provider>
);
