import type { ComponentChildren } from 'preact';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ComponentChildren;
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="pb-8 text-center">
      <h1>{title}</h1>
      {subtitle && <p className="txt-3xl font-heading text-neutral-400">{subtitle}</p>}
      {children}
    </header>
  );
}
