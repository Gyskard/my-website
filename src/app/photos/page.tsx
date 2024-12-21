import Social from "@/components/Social";
import Image from 'next/image'

import { list } from '@vercel/blob';

export default async function Photos() {
  const socialList: Array<string> = ["Flickr", "Instagram"]

  const response = await list({ prefix: 'gallery/' })

  return (
    <div className="flex justify-center items-center flex-col mt-6">
      <div className="w-full max-w-xl px-4">
        <div className="text-left">
          <h1 className="text-2xl font-bold">Photos</h1>
          <p className="text-lg">You can see some of my photos in this gallery.</p>
        </div>
        <div className="mt-10">
          <Social list={socialList}/>
        </div>
        <div className="text-center mt-6">
          <p className="text-lg mb-3"><ins>My stuff</ins></p>
          <p>📸 Sony Alpha A6400 (APS-C)</p>
          <p>SIGMA 18-50mm F2.8 DC DN</p>
          <p>Sony E 70–350mm F4.5-6.3 G OSS</p>
        </div>
      </div>
      <div className="mt-10 mb-5 max-w-4xl ">
        <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
          {response.blobs.filter(blob => blob.size !== 0).map((blob, index) => (
                <Image src={blob.url}
                        width={300}
                        height={300}
                        key={index}
                        alt="photos"
                />  
          ))} 
        </div>
      </div>
    </div>
  );
}
