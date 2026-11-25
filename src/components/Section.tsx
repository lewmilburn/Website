import { Icon } from './Icon';
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
        {icon && <Icon name={icon} className="mr-2 w-[1.25em] text-blue-500" />}
        {title}
      </h2>
      {children}
    </div>
  );
}
