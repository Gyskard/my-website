/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import Social from "@/components/Social";
import ImageDisplay from "@/components/ImageDisplay";

import { useEffect, useState } from "react";
import { getBlobs } from "./actions";
import PageDescription from "@/components/PageDescription";

export default function Photos() {
  const socialList: Array<string> = ["Flickr", "Instagram"];
  const numberOfPhotosByPage: number = 4;

  const [allURL, setAllURL] = useState(Array<string>);
  const [displayedURL, setDisplayedURL] = useState(
    Array(numberOfPhotosByPage).fill(""),
  );
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [buttonRow, setButtonRow] = useState(Array<unknown>);

  function changePage(page: number) {
    setCurrentPage(page);
    setDisplayedURL(
      allURL.slice(
        numberOfPhotosByPage * page,
        numberOfPhotosByPage * (page + 1),
      ),
    );
  }

  function changePagination(page: number) {
    setButtonRow(
      Array(numberOfPages)
        .fill(0)
        .map((_, i) => (
          <button
            className="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary"
            type="button"
            key={i}
            aria-current={i === page ? "page" : false}
            onClick={() => changePage(i)}
          >
            {i + 1}
          </button>
        )),
    );
  }

  function PreviousButton() {
    return (
      <button
        type="button"
        className={`btn btn-soft ${currentPage === 0 && "btn-disabled"}`}
        onClick={() => changePage(currentPage - 1)}
      >
        Previous
      </button>
    );
  }

  function NextButton() {
    return (
      <button
        type="button"
        className={`btn btn-soft ${currentPage === numberOfPages - 1 && "btn-disabled"}`}
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
    );
  }

  useEffect(() => {
    getBlobs().then((response) => {
      const URLs = response.blobs
        .slice(1)
        .sort(() => Math.random() - Math.random())
        .slice(0, 12)
        .map((blob) => blob.url)
      setNumberOfPages(Math.ceil(URLs.length / numberOfPhotosByPage));
      setDisplayedURL(URLs.slice(0, numberOfPhotosByPage));
      setAllURL(URLs);
    });
  }, []);

  useEffect(() => {
    changePagination(currentPage);
  }, [currentPage, numberOfPages]);

  return (
    <>
      <PageDescription
        title="Photos"
        description="You can see a random selection of my photos in this gallery."
      />
      <Social list={socialList} />
      <div className="text-center mt-6 mb-10">
        <p className="text-lg mb-3">
          <ins>My stuff</ins>
        </p>
        <p>📸 Sony Alpha A6400 (APS-C)</p>
        <p>SIGMA 18-50mm F2.8 DC DN</p>
        <p>Sony E 70–350mm F4.5-6.3 G OSS</p>
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {displayedURL.map((url, index) => (
          <ImageDisplay key={index} src={url} />
        ))}
      </div>
      <nav className="flex items-center justify-center gap-2 mt-8">
        {numberOfPages === 0 && (
          <div className={`skeleton h-10 w-80 animate-pulse`} />
        )}
        {numberOfPages > 0 && (
          <>
            <PreviousButton />
            {buttonRow}
            <NextButton />
          </>
        )}
      </nav>
    </>
  );
}
