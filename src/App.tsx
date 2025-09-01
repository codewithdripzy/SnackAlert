import './styles/index.css'
import Alert from './Alert.tsx'
import { useAlert } from './core/hooks/provider.ts';
import { AlertType } from './core/enums/provider.ts';

function App() {
    const { show, message, type, clearAlert } = useAlert();

    return (
        <Alert
            show={show}
            message={message}
            type={type}
            clearAlert={clearAlert}
        />
    )
}

export { App, AlertType };