import type { AlertType } from "../enums/provider";

interface AlertProps {
    show: boolean;
    message: string;
    type: AlertType;
    clearAlert: () => void;
}

interface ShowAlertParams {
    message: string;
    type?: AlertType;
}

interface AlertContextType {
    show: boolean;
    message: string;
    type: AlertType;
    showAlert: ({
        message,
        type,
    }: ShowAlertParams) => void;
    clearAlert: () => void;
}

export type { AlertProps, AlertContextType, ShowAlertParams };