import type { ComponentChildren } from 'preact';

interface SectionProps {
  icon?: string;
  title: string;
  children: ComponentChildren;
}

export function Section({ icon, title, children }: SectionProps) {
  return (
    <div className="card">
      <h2 className="heading">
        {icon && <i className={`fa-solid ${icon} fa-fw text-blue-500`} />}
        {title}
      </h2>
      {children}
    </div>
  );
}
