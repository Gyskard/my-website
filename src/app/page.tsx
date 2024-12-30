import Carrousel from "@/components/Carrousel";
import Resume from "@/components/Resume";
import Social from "@/components/Social";
import Image from 'next/image'
// import Resume from "@/components/Resume";
// import Carrousel from "@/components/Carrousel";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="max-w-xl w-full">
        <div className="flex flex-row justify-between mt-6 mb-10 items-center">
          <div>
            <h1 className="text-2xl font-semibold">
              Hey, I&#39;m Thomas.
            </h1>
            <p className="text-base mt-2">
              I&#39;m a <a className="bg-gradient-to-r from-primary to-error bg-clip-text text-transparent">
                front-end developer
              </a>, currently doing a roadtrip. <br />I will soon be looking for a new work experience.
            </p>
            <p className="text-base mt-3">
              Welcome on my personal website 🙂
            </p>
          </div>
          <div className="avatar size-28 mask mask-hexagon-2">
            <Image src="/me.jpg"
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
      </div>
    </div>
  );
}
