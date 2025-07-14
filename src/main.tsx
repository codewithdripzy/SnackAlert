/* eslint-disable react-refresh/only-export-components */
import './styles/index.css'
import { App, AlertType } from './App.tsx';
import { createRoot } from 'react-dom/client'
import AlertProvider from './providers/AlertProvider.tsx';

const mountSnackAlert = () => {
  createRoot(document.getElementById('root')!).render(
    <AlertProvider>
      <App />
    </AlertProvider>
  );
}

const withSnackAlert = (Component: React.ComponentType) => {
  return () => (
    <AlertProvider>
      <Component />
    </AlertProvider>
  );
}

export { AlertType, mountSnackAlert, withSnackAlert };