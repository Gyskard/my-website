'use client'

import Social from "@/components/Social";
import Image from 'next/image'

import { ListBlobResultBlob } from '@vercel/blob';
import { Suspense, useEffect, useState } from "react";
import { getBlobs } from "./actions";

export default function Photos() {
  const socialList: Array<string> = ["Flickr", "Instagram"]
  const numberOfPhotosByPage: number = 4

  const [blobs, setBlobs] = useState(Array<ListBlobResultBlob>)
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [buttonRow, setButtonRow] = useState(Array<unknown>)
  const [currentPage, setCurrentPage] = useState(1)
  const [numberOfLoadedPhotos, setNumberOfPhotosLoaded] = useState(0)

  function setPage(page: number): void {
    setCurrentPage(page)
  }

  function addOneLoadedPhoto(): void {
    setNumberOfPhotosLoaded((prev) => prev + 1);
  }

  function removeNumberofLoadedPhoto(): void {
    setNumberOfPhotosLoaded(0)
  }
  
  useEffect(() => {
  	getBlobs().then(response => {
      setBlobs(response.blobs)
      // need to substract 1 from the blobs length because blob folder itself is included in response 
      setNumberOfPages(Math.ceil((response.blobs.length - 1) / numberOfPhotosByPage))
    })
  }, []);

  useEffect(() => {
    setButtonRow([])
    removeNumberofLoadedPhoto()
    for (let i = 1; i <= numberOfPages; i++) {
      setButtonRow(prevButtonRow => [...prevButtonRow, <button type="button" key={i} aria-current={i === currentPage ? 'page' : false} className="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary" onClick={() => setPage(i)}>{i}</button>])
    }
  }, [numberOfPages, currentPage]);


const CustomImage = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && <div className={`skeleton h-72 w-72 animate-pulse`} />}
      <Image
        {...props}
        alt="photos"
        width={288}
        height={288}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

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
      <div className="mt-10 mb-5 max-w-4xl">
        <div className={`flex flex-row flex-wrap gap-5 items-center justify-center`}>
          {blobs
            .filter(blob => blob.size !== 0)
            .slice(numberOfPhotosByPage * (currentPage - 1), numberOfPhotosByPage * currentPage)
            .map((blob, index) => (
              <div key={index}>
                <CustomImage src={blob.url} />
              </div>
          ))} 
        </div>
          <nav className="flex items-center justify-center gap-2 mt-8 mb-1">
            <button type="button" className={`btn btn-soft ${currentPage === 1 && "btn-disabled"}`} onClick={() => setPage(currentPage - 1)}>Previous</button>
            {buttonRow}
            <button type="button" className={`btn btn-soft ${currentPage === numberOfPages && "btn-disabled"}`} onClick={() => setPage(currentPage + 1)}>Next</button>
          </nav> 
      </div>
    </div>
  );
}
