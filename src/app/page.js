import EmptySection from "./Components/EmptySection/EmptySection";
import Examples from "./Components/Examples/Examples";
import Features from "./Components/Features/Features";
import HeroSection from "./Components/HeroSection/HeroSection";
import Programs from "./Components/Programs/Programs";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Features/>
      <EmptySection/>
      <Examples/>
      <Programs/>
    </>
  );
}
