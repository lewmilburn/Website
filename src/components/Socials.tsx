export const socials = [
  { name: 'LinkedIn', icon: 'fa-linkedin', href: 'https://www.linkedin.com/in/lewismilburn/' },
  { name: 'ORCID', icon: 'fa-orcid', href: 'https://orcid.org/0009-0007-8002-9979' },
  { name: 'GitHub', icon: 'fa-github', href: 'https://github.com/lewmilburn' },
  { name: 'Instagram', icon: 'fa-instagram', href: 'https://instagram.com/lewismilburn' },
];

export function SocialCards({ names, className }: { names?: string[]; className: string }) {
  return (
    <div className={className}>
      {socials
        .filter((s) => !names || names.includes(s.name))
        .map((s) => (
          <a key={s.name} href={s.href} className="button no-underline" target="_blank" rel="noreferrer">
            <p className="card-content text-center">
              <i className={`fa-brands ${s.icon}`} /> {s.name}
            </p>
          </a>
        ))}
    </div>
  );
}
