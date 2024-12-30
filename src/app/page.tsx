import Bio from "@/components/Bio";
import Social from "@/components/Social";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <div>
      <Bio />
      <Social />
      <div className="mt-11">
        <Resume isHome />
      </div>
    </div>
  );
}
