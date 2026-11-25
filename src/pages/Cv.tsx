import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SocialCards } from '../components/Socials';
import { TopBar } from '../components/TopBar';

export function Cv({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <>
      <TopBar onMenuClick={onMenuClick} />

      <main className="p-std">
        <PageHeader title="Lewis Milburn" subtitle="Penetration Tester at KPMG" />
        <div className="card">
          <p>
            I recently graduated from the University of Plymouth, completing my MSc Cyber Security and BSc (Hons)
            Computer Science, and I'm now working at KPMG as a Penetration Tester, enjoying working in a sector that
            interests me greatly.
          </p>
        </div>

        <div className="grid-2 gap-4 pt-4">
          <div className="flex flex-col gap-4">
            <Section icon="fa-certificate" title="Certifications">
              <h3 className="txt-xl font-bold pt-2">The Cyber Scheme</h3>
              <table>
                <thead>
                  <tr>
                    <th>Cyber Scheme Team Member (CSTM)</th>
                    <th>{'January 2026 - present\n(Expires January 2029)'}</th>
                  </tr>
                </thead>
              </table>
            </Section>

            <Section icon="fa-briefcase" title="Work">
              <h3 className="txt-xl font-bold pt-2">KPMG</h3>
              <table>
                <thead>
                  <tr>
                    <th>Penetration Testing - Analyst</th>
                    <th>January 2026 – present</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Penetration Testing - Junior Analyst</td>
                    <td className="subtle">July 2025 – January 2026</td>
                  </tr>
                </tbody>
              </table>
              <p className="pb-8">
                I recently joined KPMG as a Penetration Tester. Whilst at KPMG I've passed the CSTM exam, gained the
                Practitioner Cyber Security Professional (PraCSP) professional title, and became a CHECK Team Member.
              </p>

              <h3 className="txt-xl font-bold pt-2">University of Plymouth Student's Union</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Shop Supervisor</td>
                    <td className="subtle">2023 – 2025</td>
                  </tr>
                  <tr>
                    <td>Shop Assistant</td>
                    <td className="subtle">2022 – 2023</td>
                  </tr>
                </tbody>
              </table>
              <p className="pb-2">
                I did a wide array of tasks at the University of Plymouth Student's Union including stacking shelves,
                organised the stock room, assisting customers, and worked on checkouts to provide a speedy and friendly
                service.
              </p>
              <p className="pb-8">
                In 2023, I was promoted to Supervisor where I would take on additional responsibilities including
                keyholding, managing day-to-day tasks, and completing daily checks.
              </p>

              <h3 className="txt-xl font-bold pt-2">Primark</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Store Assistant</td>
                    <td className="subtle">2023 – 2025</td>
                  </tr>
                </tbody>
              </table>
              <p className="pb-8">
                I did a wide array of tasks at Primark including restocking displays, assisting customers in the
                fitting rooms, and working on checkouts.
              </p>

              <h3 className="txt-xl font-bold pt-2">ASDA</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Store Assistant</td>
                    <td className="subtle">2019 – 2023</td>
                  </tr>
                </tbody>
              </table>
              <p>
                I worked at ASDA as a seasonal colleague for almost four years. I primarily worked in customer-facing
                roles such as self-scan where I would help customers with queries, diagnose issues with the checkout
                machines, and support colleagues in the main checkout area when it gets busy.
              </p>
            </Section>
          </div>

          <div className="flex flex-col gap-4">
            <Section icon="fa-id-badge" title="Memberships">
              <h3 className="txt-xl font-bold pt-2">UK Cyber Security Council</h3>
              <table>
                <thead>
                  <tr>
                    <th>Practitioner Cyber Security Professional (PraCSP)</th>
                    <th>2026 - present</th>
                  </tr>
                </thead>
              </table>

              <h3 className="txt-xl font-bold pt-2">British Computer Society</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Professional Member (MBCS)</td>
                    <td className="subtle">2024 - 2025</td>
                  </tr>
                  <tr>
                    <td>Student Member</td>
                    <td className="subtle">2021 - 2024</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="txt-xl font-bold pt-2">Chartered Institute of Information Security</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Student Member</td>
                    <td className="subtle">2024 - 2025</td>
                  </tr>
                </tbody>
              </table>
            </Section>

            <Section icon="fa-book-open" title="Publications">
              <table>
                <tbody>
                  <tr>
                    <td>Can Large Language Models Support Cyber Security Education in UK Secondary Schools? An Experimental Study</td>
                    <td className="subtle">{'Presented: July 2026\nPublished: February 2027'}</td>
                    <td>
                      <a href="/research" target="_blank" rel="noopener noreferrer">
                        Link <i className="fa-solid fa-arrow-up-right-from-square" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            <Section icon="fa-graduation-cap" title="Education">
              <h3 className="txt-xl font-bold pt-2">MSc Cyber Security</h3>
              <p className="italic pb-2">University of Plymouth, 2024 – 2025</p>
              <table>
                <tbody>
                  <tr>
                    <td>Security Operations & Incident Management</td>
                    <td className="subtle">78.6% (Distinction)</td>
                  </tr>
                  <tr>
                    <td>Ethical Hacking</td>
                    <td className="subtle">68.6% (Merit)</td>
                  </tr>
                  <tr>
                    <td>Digital Forensics & Malware Analysis</td>
                    <td className="subtle">78.5% (Distinction)</td>
                  </tr>
                  <tr>
                    <td>Security Architectures & Cryptography</td>
                    <td className="subtle">60.2% (Merit)</td>
                  </tr>
                  <tr>
                    <td>Information Security Management & Governance</td>
                    <td className="subtle">55.6% (Pass)</td>
                  </tr>
                  <tr>
                    <td>Cyber-Physical Systems Security</td>
                    <td className="subtle">78.8% (Distinction)</td>
                  </tr>
                  <tr>
                    <td>Research Project (Published in HAISA 2026)</td>
                    <td className="subtle">74.05% (Distinction)</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Final Grade</th>
                    <th>71.38% (Distinction)</th>
                  </tr>
                </tfoot>
              </table>

              <h3 className="txt-xl font-bold pt-2">BSc (Hons) Computer Science</h3>
              <p className="italic pb-2">University of Plymouth, 2021 – 2024</p>
              <table>
                <tbody>
                  <tr>
                    <td>First Year</td>
                    <td className="subtle">66.18% (2:1)</td>
                  </tr>
                  <tr>
                    <td>Second Year</td>
                    <td className="subtle">62.54% (2:1)</td>
                  </tr>
                  <tr>
                    <td>Third Year</td>
                    <td className="subtle">78.1% (1st)</td>
                  </tr>
                  <tr>
                    <td>Final Year Project</td>
                    <td className="subtle">84.61% (1st)</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Final Grade</th>
                    <th>73.37% (1st)</th>
                  </tr>
                </tfoot>
              </table>
              <p className="small italic">With award for "Best BSc (Hons) Computer Science Poster in Showcase"</p>
            </Section>
          </div>
        </div>

        <SocialCards names={['LinkedIn', 'ORCID', 'GitHub']} className="grid-3 mt-8 gap-4" />
      </main>
    </>
  );
}
