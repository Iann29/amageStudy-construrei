import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'font-medium rounded-lg focus:outline-none transition-all duration-200 shadow-sm';
  
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 active:bg-secondary-800 text-white',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
    accent: 'bg-accent-500 hover:bg-accent-600 active:bg-accent-700 text-white',
    success: 'bg-success-500 hover:bg-success-600 active:bg-success-700 text-white',
    danger: 'bg-danger-500 hover:bg-danger-600 active:bg-danger-700 text-white',
  };
  
  const sizeClasses = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
