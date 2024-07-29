import { Gallery } from "@/components/Sections/Gallery/Gallery";
import { HeroSection } from "@/components/Sections/HeroSection/HeroSection";
import { NewsLetter } from "@/components/Sections/NewsLetter/NewsLetter";
import { PageSearch } from "@/components/Sections/PageSearch/PageSearch";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/*Page search*/}
      <PageSearch />
      {/*Featured Room*/}
      {/*Gallery*/}
      <Gallery />
      {/*News letter*/}
      <NewsLetter />
    </>
  );
}
