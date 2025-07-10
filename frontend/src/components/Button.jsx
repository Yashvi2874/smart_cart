import React from 'react';

const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-6 text-lg',
};
const variants = {
  primary: 'bg-walmart-blue text-white hover:bg-walmart-green',
  outline: 'border border-walmart-blue text-walmart-blue bg-white hover:bg-walmart-blue hover:text-white',
  ghost: 'bg-transparent text-walmart-blue hover:bg-walmart-blue/10',
};

export const Button = ({
  children,
  className = '',
  size = 'md',
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={[
        base,
        sizes[size] || sizes.md,
        variants[variant] || variants.primary,
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}; 