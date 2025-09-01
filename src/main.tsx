/* eslint-disable react-refresh/only-export-components */
import { AlertType } from './App';
import AlertProvider from './providers/AlertProvider';

const withSnackAlert = (Component: React.ComponentType) => {
  return () => (
    <AlertProvider>
      <Component />
    </AlertProvider>
  );
};

export { AlertType, withSnackAlert };
