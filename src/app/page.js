import Image from 'next/image';
import logo from '../../public/Logo-1-1200w.jpg';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center w-full h-[500px]"
        style={{ backgroundImage: `url('/home hero image.webp')` }}
      >
        {/* Fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <Image src={logo} alt="Genesis Water Co Rooster" width={500} />
          <p className="text-5xl font-semibold mt-4">Pure Water, Pure Innovation</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">Genesis Water Co</h1>
          <h2 className="text-2xl font-semibold ">About Us</h2>
        </header>

        <section>
          <p className="text-lg leading-relaxed">
            At Genesis Water Company we are elevating process innovation while conserving resources for a healthier and more sustainable future. We strive to improve our customer product quality through best in class technology and process improvements.
            We have 20 years of experience in resource conservation and process expertise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">We offer:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Innovative Technology</li>
            <li>Process Expertise</li>
            <li>Solution Design</li>
          </ul>
        </section>

        <section>
          <p className="mt-4 text-lg">
            We believe the universe is a theater for God’s Divine Glory — “Theatrum Gloriae”. Genesis Water Company will only promote and use forms of physical or natural treatment. We desire a world the way that God originally designed it.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 px-6 text-center text-lg text-gray-700 border-t">
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
