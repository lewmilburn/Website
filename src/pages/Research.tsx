import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SocialCards } from '../components/Socials';
import { TopBar } from '../components/TopBar';

export function Research({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <>
      <TopBar onMenuClick={onMenuClick} />

      <main className="p-std">
        <PageHeader title="Research" />

        <div className="grid gap-4 pt-4">
            <Section icon="fa-book-bookmark" title="2026">
              <h3 className="txt-2xl font-bold pt-2">Can Large Language Models Support Cyber Security Education in UK Secondary Schools? An Experimental Study.</h3>
              <p className="pt-2">20th IFIP International Symposium on Human Aspects of Information Security & Assurance (HAISA 2026, Örebro, Sweden)</p>
              <p className="italic pb-2">Presented: July 2026, Published: February 2027</p>
            </Section>
        </div>

        <SocialCards names={['LinkedIn', 'ORCID', 'GitHub']} className="grid-3 mt-8 gap-4" />
      </main>
    </>
  );
}
