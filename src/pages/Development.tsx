import { Icon } from '../components/Icon';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SocialCards } from '../components/Socials';
import { TopBar } from '../components/TopBar';

export function Development({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <>
      <TopBar onMenuClick={onMenuClick} />

      <main className="p-std">
        <PageHeader title="Development" />

        <div className="grid gap-4 pt-4">
          <Section icon="fa-gear" title="Pentesting Tools">
            <table>
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Release date</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ZoneKit (ZoneTester) - Manage your zones like a pro.</td>
                  <td className="subtle">November 2026</td>
                  <td>
                    <a href="https://github.com/lewmilburn/zonekit" target="_blank" rel="noopener noreferrer">
                      Link <Icon name="fa-arrow-up-right-from-square" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>AppScanner - Android application offensive security research tool</td>
                  <td className="subtle">March 2026</td>
                  <td>
                    <a href="https://github.com/lewmilburn/appscanner" target="_blank" rel="noopener noreferrer">
                      Link <Icon name="fa-arrow-up-right-from-square" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Section icon="fa-gear" title="Development Tools">
            <table>
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Release date</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ZoneKit (ZoneKeeper and ZoneTester) - Manage your zones like a pro.</td>
                  <td className="subtle">November 2026</td>
                  <td>
                    <a href="https://github.com/lewmilburn/zonekit" target="_blank" rel="noopener noreferrer">
                      Link <Icon name="fa-arrow-up-right-from-square" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Saturn - A lightweight, customisable, and extensible code editor.</td>
                  <td className="subtle">October 2026</td>
                  <td>
                    <a href="https://github.com/Saturn-Editor/Saturn" target="_blank" rel="noopener noreferrer">
                      Link <Icon name="fa-arrow-up-right-from-square" />
                    </a>
                  </td>
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
