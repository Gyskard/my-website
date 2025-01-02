import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  blob: {
    url: string;
    alt: string;
  }
}

export default function Photos(props: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [props.blob.url]);

  return (
    <>
      {(!props.blob || isLoading) && (
        <div className={`skeleton h-64 w-64 animate-pulse`} />
      )}
      {props.blob && (
        <Image
          src={props.blob.url}
          alt={props.blob.alt}
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
