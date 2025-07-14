// mount.tsx
import { createRoot } from 'react-dom/client';
import AlertProvider from './providers/AlertProvider';
import { App } from './App';

export const mountSnackAlert = () => {
  createRoot(document.getElementById('root')!).render(
    <AlertProvider>
      <App />
    </AlertProvider>
  );
};