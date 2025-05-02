import Image from 'next/image';
import logo from '../../public/Genesis_blue-and-transparent-background_banner-logo-1200w.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center w-full h-[300px] sm:h-[400px] md:h-[400px]"
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
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
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow px-6 max-w-4xl mx-auto space-y-8">
        <header className="hidden text-center">
          <h1 className="hidden">Genesis Water Co</h1>
        </header>
        <section>
          <h2 className="text-2xl font-semibold text-center">About Us</h2>
          <p className="text-lg font-body text-stone-700 text-center">
            At Genesis Water Company we provide process innovation while conserving resources for a more healthy and sustainable future.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">We Offer:</h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faDroplet} className="accentBlue mt-1" />
              <p className='text-lg font-medium'>Innovative Technology</p>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faDroplet} className="accentBlue mt-1" />
              <p className='text-lg font-medium'>Process Expertise</p>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faDroplet} className="accentBlue mt-1" />
              <p className='text-lg font-medium'>Solution Design</p>
            </li>
          </ul>
        </section>
        <section>
          <p className="text-2xl font-semibold font-display text-stone-700 text-center">
            Over 20 Years of Water Industry Experience
          </p>
        </section>
      </main>
      {/* Footer */}
      <footer className="py-8 px-6 text-center text-stone-800">
        <h2 className="text-2xl font-semibold mb-2 text-stone-700">Contact Info:</h2>
        <p>Clayton Coe</p>
        <p>
          <a href="tel:9035052170" className="text-stone-700 hover:underline">903.505.2170</a>
        </p>
        <p>
          <a href="mailto:ccoe@genesiswaterco.com" className="text-stone-700 hover:underline">ccoe@genesiswaterco.com</a>
        </p>
      </footer>
    </div>
  );
}
