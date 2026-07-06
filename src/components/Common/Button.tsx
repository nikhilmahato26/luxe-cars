import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full hover:scale-105 active:scale-95";
    
    const variants = {
      primary: "bg-gradient-to-r from-gold-600 to-gold-500 text-dark-900 shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50",
      outline: "border-2 border-gold-500 text-gold-500 hover:bg-gold-500/10",
      glass: "glass text-white hover:bg-white/20",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
