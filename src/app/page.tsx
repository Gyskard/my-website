import Resume from "@/components/Resume";
import Social from "@/components/Social";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thomas Margueritat",
  description: "I'm a front-developer, currently doing a roadtrip.",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-semibold">Hey, I&#39;m Thomas.</h1>
          <p className="text-lg mt-2">
            I&#39;m a{" "}
            <span className="bg-gradient-to-r from-primary to-error bg-clip-text text-transparent">
              front-end developer
            </span>
            , currently doing a roadtrip.
          </p>
          <p className="mt-3 text-lg">Welcome on my personal website 🙂</p>
        </div>
        <div className="max-sm:mt-5 avatar size-28 mask mask-hexagon-2">
          <Image
            src="/me.jpg"
            width={112}
            height={112}
            alt="Picture of the author"
            priority
          />
        </div>
      </div>
      <Social />
      <div className="mt-15">
        <Resume isHome />
      </div>
    </>
  );
}
