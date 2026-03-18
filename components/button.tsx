import React from "react";

type ButtonVariant = "teal" | "white";
type ButtonSize = "sm" | "md" | "lg";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export default function Button({
  variant = "teal",
  size = "md",
  className = "",
  ...props
}: Props) {
  const variantClass = variant === "teal" ? "btn-teal" : "btn-white";
  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";

  return (
    <button
      className={`btn ${variantClass} ${sizeClass} ${className}`.trim()}
      {...props}
    />
  );
}