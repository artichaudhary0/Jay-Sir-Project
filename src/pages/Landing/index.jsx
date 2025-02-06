import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AchievementsSection from "./AchievementsSection";
import ArtGallerySection from "./ArtGallerySection";
import ExpertiseAndArtSection from "./ExpertiseAndArtSection";
import LandingPageMainSection from "./LandingPageMainSection";
import ReviewsSection from "./ReviewsSection";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>John Art Gallery - Explore the Creative World of John Doe</title>
        <meta
          name="description"
          content="Discover the captivating art of John Doe in the John Art Gallery. Explore a diverse collection of acrylic, oil, and pencil color artworks, and de"
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div className="bg-no-repeat px-2 py-8 md:h-auto sm:p-0">
          <Header />
        </div>
        {/* landing page main section */}
        <LandingPageMainSection />
        {/* expertise and art section */}
        <ExpertiseAndArtSection />
        {/* achievements section */}
        <AchievementsSection />
        {/* art gallery section */}
        <ArtGallerySection />
        {/* reviews section */}
        <ReviewsSection />
        <Footer />
      </div>
    </>
  );
}
