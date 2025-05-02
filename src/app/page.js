import Image from 'next/image';
import logo from '../../public/Logo-1_whitetext_Transparent_BG-1200w.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center w-full h-[500px]"

        style={{ backgroundImage: `url('/home hero image.webp')` }}
      >
        {/* Fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" /> */}


        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          {/* <Image src={logo} alt="Genesis Water Co Rooster" className="w-full max-w-[800px] sm:max-w-[400px]" /> */}
          <div className="relative w-full max-w-[800px] mx-auto aspect-[5/2]">
            <Image
              src={logo}
              alt="Genesis Water Co Rooster"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 90vw, 800px"
              priority
            />
          </div>
          <p className="text-4xl sm:text-5xl font-semibold mt-4 tracking-wider uppercase text-amber-200 drop-shadow-md">
            Pure Water, Pure Innovation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2 font-display text-stone-800">Genesis Water Co</h1>
          <h2 className="text-2xl font-semibold ">About Us</h2>
        </header>
        <section>
          <p className="text-lg font-body text-stone-700 leading-relaxed">
            At Genesis Water Company we are elevating process innovation while conserving resources for a healthier and more sustainable future. We strive to improve our customer product quality through best in class technology and process improvements.
            We have 20 years of experience in resource conservation and process expertise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">We offer:</h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faDroplet} className="text-blue-800 mt-1" />
              <p className='text-amber-600 text-lg font-medium'>Innovative Technology</p>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faDroplet} className="text-blue-800 mt-1" />
              <p className='text-amber-600 text-lg font-medium'>Process Expertise</p>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faDroplet} className="text-blue-800 mt-1" />
              <p className='text-amber-600 text-lg font-medium'>Solution Design</p>
            </li>
          </ul>
        </section>

        <section>
          <p className="mt-4 text-lg font-body text-stone-700">
            We believe the universe is a theater for God’s Divine Glory — “Theatrum Gloriae”. Genesis Water Company will only promote and use forms of physical or natural treatment. We desire a world the way that God originally designed it.
          </p>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="bg-stone-100 py-6 px-6 text-center text-lg text-stone-700 border-t border-stone-300"> */}
      <footer className="bg-stone-200 py-8 px-6 text-center text-stone-800 border-t border-stone-400 shadow-inner">
        <h2 className="text-2xl font-semibold mb-2">Contact Info:</h2>
        <p>Clayton Coe</p>
        <p>
          <a href="tel:9035052170" className="text-blue-600 hover:underline">903.505.2170</a>
        </p>
        <p>
          <a href="mailto:ccoe@genesiswaterco.com" className="text-blue-600 hover:underline">ccoe@genesiswaterco.com</a>
        </p>
        <p>Melissa, TX</p>
      </footer>
    </div>
  );
}
