import Image from 'next/image'

export default async function Bio() {
  return (
    <div className="flex flex-row justify-center gap-20 mt-6 items-center">
      <div>
        <h1 className="text-2xl text-lg font-semibold">
          Hey, I&#39;m Thomas.
        </h1>
        <p className="text-lg text-base mt-2">
          I&#39;m a <a className="bg-gradient-to-r from-primary to-error bg-clip-text text-transparent">
            front-end developer
          </a>
          , currently travelling.
        </p>
        <p className="text-lg text-base">
          Welcome on my personal website 🙂
        </p>
      </div>
      <div className="avatar size-28 mask mask-hexagon-2">
        <Image src="/me.jpg"
          width={112}
          height={112}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
