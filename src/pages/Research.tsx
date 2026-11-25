import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SocialCards } from '../components/Socials';
import { TopBar } from '../components/TopBar';
import {Table} from "../components/Table";

export function Research({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <>
      <TopBar onMenuClick={onMenuClick} />

      <main className="p-std">
        <PageHeader title="Research" />

        <div className="grid gap-4 pt-4">
            <Section icon="fa-book-bookmark" title="Papers">
              <Table rows={[
                ['Can Large Language Models Support Cyber Security Education in UK Secondary Schools? An Experimental Study - 20th IFIP International Symposium on Human Aspects of Information Security & Assurance (HAISA 2026, Örebro, Sweden)','Presented: July 2026, Published: February 2027'],
                ['Using Large Language Models to Improve Cybersecurity Education at Secondary and Further Education - University of Plymouth','January 2026']
              ]}/>
            </Section>
            <Section icon="fa-gear" title="Tools">
              <Table rows={[
                ['AppScanner - Android application offensive security research tool','March 2026']
              ]}/>
            </Section>
        </div>

        <SocialCards names={['LinkedIn', 'ORCID', 'GitHub']} className="grid-3 mt-8 gap-4" />
      </main>
    </>
  );
}
