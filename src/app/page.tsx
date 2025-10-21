import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import MissionSection from "@/components/sections/mission";
import ProgramsSection from "@/components/sections/programs";
import EventsSection from "@/components/sections/events";
import GallerySection from "@/components/sections/gallery";
import TeamSection from "@/components/sections/team";
import AchievementsSection from "@/components/sections/achievements";
import FeedbackSection from "@/components/sections/feedback";

export default function Home() {
return (
<div className="flex flex-col min-h-dvh bg-background text-foreground">
<Header />
<main className="flex-1">
<HeroSection />
<TeamSection />
<ProgramsSection />
<GallerySection />
<AchievementsSection />
<MissionSection />
{0 > 1 && (<EventsSection />)}
<FeedbackSection />
</main>
<Footer />
</div>
);
}
