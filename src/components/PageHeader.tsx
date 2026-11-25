import type { ComponentChildren } from 'preact';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ComponentChildren;
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="pb-8 text-center">
      <h1 className="txt-7xl pb-2 font-bold">{title}</h1>
      {subtitle && <p className="txt-3xl text-neutral-400">{subtitle}</p>}
      {children}
    </header>
  );
}
