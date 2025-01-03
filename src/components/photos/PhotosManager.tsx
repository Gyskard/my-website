/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import ImageDisplay from "@/components/photos/Photo";

import { useEffect, useState } from "react";
import { getBlobs } from "../../app/photos/actions";

interface Blob {
  url: string;
  alt: string;
}

export default function Photos() {
  const numberOfPhotosByPage: number = 4;

  const [allURL, setAllURL] = useState(Array<Blob>);
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
        aria-disabled={currentPage === 0}
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
        aria-disabled={currentPage === numberOfPages - 1}
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
        .map((blob) => {
          return {
            url: blob.url,
            alt: blob.pathname.substring(8, blob.pathname.length - 4),
          };
        });
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
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {displayedURL.map((blob, index) => (
          <ImageDisplay key={index} blob={blob} />
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
