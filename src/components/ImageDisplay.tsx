import Image from 'next/image'
import { useEffect, useState } from 'react';

interface Props {
    src: string
}

export default function Photos(props: Props) {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true)
    }, [props.src]);
  
    return (
      <div className="h-72">
        { (props.src === "" || isLoading ) && <div className={`skeleton h-72 w-72 animate-pulse`} /> }
        { props.src !== "" && 
          <Image
            src={props.src}
            alt="photos"
            width={288}
            height={288}
            priority
            onLoad={() => setIsLoading(false)}
            className={`${isLoading && "hidden"}`}
          />
        }
      </div>
    );
}