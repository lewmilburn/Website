import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SocialCards } from '../components/Socials';
import { Table } from '../components/Table';
import { TopBar } from '../components/TopBar';

export function Cv({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <>
      <TopBar onMenuClick={onMenuClick} />

      <main className="p-std">
        <PageHeader title="Lewis Milburn" subtitle="Penetration Tester at KPMG" />
        <div className="card txt-2xl">
          I recently graduated from the University of Plymouth, completing my MSc Cyber Security and BSc (Hons)
          Computer Science, and I'm now working at KPMG as a Penetration Tester, enjoying working in a sector that
          interests me greatly.
        </div>

        <div className="grid-2 gap-4 pt-4">
          <div className="flex flex-col gap-4">
            <Section icon="fa-id-badge" title="Memberships">
              <h3 className="txt-2xl font-bold pt-2">UK Cyber Security Council</h3>
              <p className="italic">Practitioner Cyber Security Professional (PraCSP), 2026 - present</p>
            </Section>

            <Section icon="fa-briefcase" title="Work">
              <h3 className="txt-2xl font-bold pt-2">KPMG</h3>
              <Table
                rows={[
                  ['Penetration Testing - Analyst', 'January 2026 – present'],
                  ['Penetration Testing - Junior Analyst', 'July 2025 – January 2026'],
                ]}
              />
              <p className="pb-8">
                I recently joined KPMG as a Penetration Tester. Whilst at KPMG I've passed the CSTM exam, gained the
                Practitioner Cyber Security Professional (PraCSP) professional title, and became a CHECK Team Member.
              </p>

              <h3 className="txt-2xl font-bold pt-2">University of Plymouth Student's Union</h3>
              <Table
                rows={[
                  ['Shop Supervisor', '2023 – 2025'],
                  ['Shop Assistant', '2022 – 2023'],
                ]}
              />
              <p className="pb-2">
                I did a wide array of tasks at the University of Plymouth Student's Union including stacking shelves,
                organised the stock room, assisting customers, and worked on checkouts to provide a speedy and friendly
                service.
              </p>
              <p className="pb-8">
                In 2023, I was promoted to Supervisor where I would take on additional responsibilities including
                keyholding, managing day-to-day tasks, and completing daily checks.
              </p>

              <h3 className="txt-2xl font-bold pt-2">Primark</h3>
              <Table rows={[['Store Assistant', '2023 – 2025']]} />
              <p className="pb-8">
                I did a wide array of tasks at Primark including restocking displays, assisting customers in the
                fitting rooms, and working on checkouts.
              </p>

              <h3 className="txt-2xl font-bold pt-2">ASDA</h3>
              <Table rows={[['Store Assistant', '2019 – 2023']]} />
              <p>
                I worked at ASDA as a seasonal colleague for almost four years. I primarily worked in customer-facing
                roles such as self-scan where I would help customers with queries, diagnose issues with the checkout
                machines, and support colleagues in the main checkout area when it gets busy.
              </p>
            </Section>
          </div>

          <div className="flex flex-col gap-4">
            <Section icon="fa-certificate" title="Certifications">
              <h3 className="txt-2xl font-bold pt-2">Cyber Scheme Team Member (CSTM)</h3>
              <p className="italic pb-2">The Cyber Scheme</p>
              <p className="italic pb-8">January 2026 – January 2029</p>
            </Section>

            <Section icon="fa-book-open" title="Publications">
              <h3 className="txt-2xl font-bold pt-2">
                Can Large Language Models Support Cyber Security Education in UK Secondary Schools? An Experimental
                Study
              </h3>
              <p className="italic">Human Aspects of Information Security and Assurance 2026</p>
              <p className="italic pb-2">20th IFIP International Symposium on Human Aspects of Information Security & Assurance (HAISA 2026, Örebro, Sweden)</p>
              <p className="italic pb-8">Presented: July 2026, Published: February 2027</p>
            </Section>

            <Section icon="fa-graduation-cap" title="Education">
              <h3 className="txt-2xl font-bold pt-2">MSc Cyber Security</h3>
              <p className="italic pb-2">University of Plymouth, 2024 – 2025</p>
              <Table
                rows={[
                  ['Security Operations & Incident Management:', '78.6% (Distinction)'],
                  ['Ethical Hacking:', '68.6% (Merit)'],
                  ['Digital Forensics & Malware Analysis:', '78.5% (Distinction)'],
                  ['Security Architectures & Cryptography:', '60.2% (Merit)'],
                  ['Information Security Management & Governance:', '55.6% (Pass)'],
                  ['Cyber-Physical Systems Security:', '78.8% (Distinction)'],
                  ['Research Project:', '74.05% (Distinction)'],
                ]}
                total={['Final Grade:', '71.38% (Distinction)']}
              />

              <h3 className="txt-2xl font-bold pt-2">BSc (Hons) Computer Science</h3>
              <p className="italic pb-2">University of Plymouth, 2021 – 2024</p>
              <Table
                rows={[
                  ['First Year:', '66.18% (2:1)'],
                  ['Second Year:', '62.54% (2:1)'],
                  ['Third Year:', '78.1% (1st)'],
                  ['Final Year Project:', '84.61% (1st)'],
                ]}
                total={['Final Grade:', '73.37% (1st)']}
                note={'With award for "Best BSc (Hons) Computer Science Poster in Showcase"'}
              />
            </Section>
          </div>
        </div>

        <SocialCards names={['LinkedIn', 'ORCID', 'GitHub']} className="grid-3 mt-8 gap-4" />
      </main>
    </>
  );
}
