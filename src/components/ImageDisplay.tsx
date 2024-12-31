import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  src: string;
}

export default function Photos(props: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [props.src]);

  return (
    <>
      {(props.src === "" || isLoading) && (
        <div className={`skeleton h-64 w-64 animate-pulse`} />
      )}
      {props.src !== "" && (
        <Image
          src={props.src}
          alt="photos"
          width={256}
          height={256}
          priority
          onLoad={() => setIsLoading(false)}
          className={`${isLoading && "hidden"}`}
        />
      )}
    </>
  );
}
