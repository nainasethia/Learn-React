import type { MouseEvent } from "react";

interface ButtonProps {
  /** Text or JSX that appears inside the button */
  children: string;
  /** Optional click handler – receives the native button event */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** Bootstrap colour variant (defaults to “primary”) */
  color?: "primary" | "secondary" | "danger" | "success";
}

/** Re‑usable, type‑safe Bootstrap button component */
export const Button = ({
  children,
  onClick,
  color = "primary",
}: ButtonProps) => (
  <button
    type="button"
    className={`btn btn-${color}`} // applies the correct Bootstrap class
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
