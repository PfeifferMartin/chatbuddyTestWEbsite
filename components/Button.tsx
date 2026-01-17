import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500 shadow-lg shadow-emerald-200",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white focus:ring-slate-700",
    outline: "border-2 border-slate-200 hover:border-emerald-600 hover:text-emerald-600 text-slate-600 focus:ring-emerald-500"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};