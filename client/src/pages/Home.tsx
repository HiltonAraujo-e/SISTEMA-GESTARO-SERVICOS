import { Hero } from '@/components/sections/Hero';
import { Intro } from '@/components/sections/Intro';
import { Services } from '@/components/sections/Services';
import { Ritual } from '@/components/sections/Ritual';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import SiteHeader from '@/components/SiteHeader';

export default function Home() {
  return (
    <div className="public-site" id="inicio">
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Ritual />
        <Gallery />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
