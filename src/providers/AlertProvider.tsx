import { useState, type ReactNode, useRef } from "react";
import { AlertType } from "../core/enums/provider";
import { AlertContext } from "../core/contexts/provider";
import type { AlertProps, ShowAlertParams } from "../core/interface/provider";
import { App } from "../App";

const AlertProvider = ({ children }: { children: ReactNode }) => {
    const alertTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [alert, setAlert] = useState<AlertProps | null>(null);

    const clearAlert = () => {
        // Clear any pending timeouts
        if (alertTimeoutRef.current) {
            clearTimeout(alertTimeoutRef.current);
            alertTimeoutRef.current = null;
        }

        // Animate hide
        setAlert((prev) => (prev ? { ...prev, show: false } : null));

        // Set timeout ONLY for final cleanup after animation
        // Don't store this in alertTimeoutRef (because it's a cleanup timeout, not cancelable)
        setTimeout(() => {
            setAlert(null);
        }, 300);
    };


    const showAlert = ({
        message,
        type = AlertType.INFO,
    }: ShowAlertParams) => {
        if (alertTimeoutRef.current) {
            clearTimeout(alertTimeoutRef.current);
            alertTimeoutRef.current = null;
        }

        setAlert({
            show: true,
            message,
            type,
            clearAlert,
        });

        alertTimeoutRef.current = setTimeout(() => {
            // Animate hide
            setAlert((prev) => (prev ? { ...prev, show: false } : null));

            // Fully clear after animation
            alertTimeoutRef.current = setTimeout(() => {
                setAlert(null);
                alertTimeoutRef.current = null;
            }, 300);
        }, 3000);
    };

    return (
        <AlertContext.Provider
            value={{
                show: alert?.show ?? false,
                message: alert?.message ?? "",
                type: alert?.type ?? AlertType.INFO,
                showAlert,
                clearAlert,
            }}
        >
            {children}
            <App />
        </AlertContext.Provider>
    );
};

export default AlertProvider;
