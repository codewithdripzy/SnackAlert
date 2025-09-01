import { AlertType } from "./core/enums/provider";
import type { AlertProps } from "./core/interface/provider";
import { CircleAlert, CircleCheckBig, Info, TriangleAlert, X } from "lucide-react";

function Alert({ show, message, type, clearAlert }: AlertProps) {
    return (
        <div className={`alert-container ${show ? "show" : "hide"}`}>
            <div className={`alert alert-${type}`}>
                <span className="alert-icon">
                    {type === AlertType.SUCCESS ? <CircleCheckBig className="size-[20px]" /> : null}
                    {type === AlertType.ERROR ? <TriangleAlert className="size-[20px]" /> : null}
                    {type === AlertType.INFO ? <Info className="size-[20px]" /> : null}
                    {type === AlertType.WARNING ? <CircleAlert className="size-[20px]" /> : null}
                </span>
                <span className="alert-message">{message}</span>
                <div className="ml-2" onClick={clearAlert}>
                    <X className="size-[16px] cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default Alert;