/* eslint-disable react-hooks/exhaustive-deps */

import Social from "@/components/Social";
import PageDescription from "@/components/PageDescription";
import PhotoComponent from "@/components/photos/PhotosManager";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thomas Margueritat",
  description: "Photos : see a random selection of my photos in this gallery.",
};

export default function Photos() {
  const socialList: Array<string> = ["Flickr", "Instagram"];

  return (
    <>
      <PageDescription
        title="Photos"
        description="See a random selection of my photos in this gallery."
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
      <PhotoComponent />
    </>
  );
}
