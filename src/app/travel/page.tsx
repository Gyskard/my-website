import MapManager from "@/components/travel/MapManager";
import PageDescription from "@/components/PageDescription";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thomas Margueritat",
  description:
    "Travel : check at all the locations or cities I've visited on my travels.",
};

export default function Travel() {
  return (
    <>
      <PageDescription
        title="Travel"
        description="Check at all the locations or cities I've visited on my travels."
      />
      <MapManager />
    </>
  );
}
