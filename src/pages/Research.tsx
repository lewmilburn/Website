import { Icon } from '../components/Icon';
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
          <Section icon="fa-book-bookmark" title="Papers">
            <table>
              <thead>
                <tr>
                  <th>Paper</th>
                  <th>Journal or Repository</th>
                  <th>Year</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Can Large Language Models Support Cyber Security Education in UK Secondary Schools? An
                    Experimental Study
                  </td>
                  <td>
                    20th IFIP International Symposium on Human Aspects of Information Security & Assurance (HAISA
                    2026, Örebro, Sweden)
                  </td>
                  <td className="subtle">Presented: July 2026 Published: February 2027</td>
                  <td>
                    <a href="https://www.semanticscholar.org/paper/Can-Large-Language-Models-Support-Cyber-Security-in/ff655110d429c83857346c5e0844de13b0d00abf" target="_blank" rel="noopener noreferrer">
                      Link <Icon name="fa-arrow-up-right-from-square" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    Using Large Language Models to Improve Cybersecurity Education at Secondary and Further Education
                  </td>
                  <td>University of Plymouth</td>
                  <td className="subtle">September 2025</td>
                  <td />
                </tr>
              </tbody>
            </table>
          </Section>
        </div>

        <SocialCards names={['LinkedIn', 'ORCID', 'GitHub']} className="grid-3 mt-8 gap-4" />
      </main>
    </>
  );
}
