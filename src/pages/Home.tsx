import lewis from '../assets/lewis-grad.webp';
import { SocialCards } from '../components/Socials';

const blocks = [
  'col-start-1 row-start-1 col-span-3 row-span-1 bg-blue-500',
  'col-start-4 row-start-1 col-span-2 row-span-2 bg-blue-600',
  'col-start-6 row-start-1 col-span-3 row-span-1 bg-blue-500',
  'col-start-6 row-start-2 col-span-3 row-span-1 bg-blue-600',
  'col-start-4 row-start-3 col-span-3 row-span-2 bg-blue-500',
  'col-start-7 row-start-3 col-span-2 row-span-2 bg-blue-600',
  'col-start-4 row-start-5 col-span-2 row-span-1 bg-blue-500',
  'col-start-6 row-start-5 col-span-3 row-span-2 bg-blue-400',
  'col-start-1 row-start-6 col-span-2 row-span-1 bg-blue-600',
  'col-start-3 row-start-6 col-span-3 row-span-1 bg-blue-500',
];

export function Home({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <main>
      <section className="relative h-screen overflow-hidden bg-blue-500">
        <div className="absolute top-0 right-0 left-0 z-30 flex py-1 pl-std pr-std">
          <div className="flex-grow" />
          <button className="nav-btn bg-neutral-900 text-white hover:bg-neutral-800" onClick={onMenuClick}>
            <i className="fa-solid fa-bars" />
          </button>
        </div>

        <div className="grid h-screen w-full grid-cols-8 grid-rows-6">
          {blocks.map((b) => (
            <div key={b} className={b} aria-hidden="true" />
          ))}

          <div className="col-start-1 row-start-2 col-span-3 row-span-4 relative overflow-hidden">
            <img src={lewis} className="absolute inset-0 h-full w-full object-cover object-top" alt="Lewis" />
          </div>

          <div className="z-10 col-start-4 row-start-3 col-span-5 row-span-2 flex min-w-0 flex-col justify-center px-4 md:px-12">
            <h1 className="txt-8xl pb-std text-left font-bold text-white">Hey, I'm Lewis.</h1>
            <p className="txt-7xl font-heading text-white">A Penetration Tester at KPMG.</p>
          </div>
        </div>
      </section>

      <div className="p-std">
        <h2 className="txt-3xl pb-2 font-bold">About me.</h2>
        <p className="txt-2xl pb-8">
          I'm Lewis, a Pentester from the UK. I'm currently working at KPMG after completing my MSc in Cyber Security
          at the University of Plymouth.
        </p>
        <div className="grid-4 txt-2xl gap-4 pb-8">
          <a href="/cv" className="button no-underline">
            <p className="card-content text-center">CV</p>
          </a>
          <a href="/research" className="button no-underline">
            <p className="card-content text-center">Research</p>
          </a>
          <a href="/gallery" className="button no-underline">
            <p className="card-content text-center">Gallery</p>
          </a>
        </div>

        <h2 className="txt-3xl pb-2 font-bold">Follow me.</h2>
        <SocialCards className="grid-4 txt-2xl gap-4" />
      </div>
    </main>
  );
}
