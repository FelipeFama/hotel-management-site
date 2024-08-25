import { FeaturedRoom } from "@/components/Sections/FeaturedRoom/FeaturedRoom";
import { Gallery } from "@/components/Sections/Gallery/Gallery";
import { HeroSection } from "@/components/Sections/HeroSection/HeroSection";
import { NewsLetter } from "@/components/Sections/NewsLetter/NewsLetter";
import { PageSearch } from "@/components/Sections/PageSearch/PageSearch";
import { getFeaturedRoom } from "@/libs/apis";

export default async function Home() {
  const featuredRoom = await getFeaturedRoom();

  return (
    <>
      <HeroSection />
      {/* Page search*/}
      <PageSearch />
      {/* Featured Room*/}
      <FeaturedRoom featuredRoom={featuredRoom} />
      {/* Gallery*/}
      <Gallery />
      {/* News letter*/}
      <NewsLetter />
    </>
  );
}
