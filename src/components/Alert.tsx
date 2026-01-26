import type { ReactNode } from "react";

interface AlertProps {
  /** Content displayed inside the alert (string or JSX) */
  children: ReactNode;
  /** Bootstrap colour variant (defaults to “primary”) */
  type?: "primary" | "secondary" | "danger" | "success" | "warning";
  /** Optional handler called when the close button is pressed */
  onClose?: () => void;
}

/** Re‑usable, type‑safe Bootstrap alert component */
export const Alert = ({ children, type = "primary", onClose }: AlertProps) => (
  <div className={`alert alert-${type} d-flex align-items-center`} role="alert">
    <div className="flex-grow-1">{children}</div>

    {/* Render a close button only when an onClose handler is provided */}
    {onClose && (
      <button
        type="button"
        className="btn-close ms-2"
        aria-label="Close"
        onClick={onClose}
      />
    )}
  </div>
);

export default Alert;
