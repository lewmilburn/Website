import type { ComponentChildren } from 'preact';

interface ButtonProps {
  onClick: () => void;
  children: ComponentChildren;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button type="button" className="button card-content txt-2xl" onClick={onClick}>
      {children}
    </button>
  );
}
