import MapManager from "@/components/travel/MapManager";
import PageDescription from "@/components/PageDescription";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thomas Margueritat",
  description: "Travel : my love for travel and cartography on a single page.",
};

export default function Travel() {
  return (
    <>
      <PageDescription
        title="Travel"
        description="My love for travel and cartography on a single page."
      />
      <MapManager />
    </>
  );
}
