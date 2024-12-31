'use client'

import PageDescription from "@/components/PageDescription";
import dynamic from "next/dynamic";

export default function Travel() {
    function MapSkeleton() {
        return (
            <>
                <div className="mb-5 skeleton h-10 w-auto animate-pulse mt-7" />
                <div className="skeleton h-96 w-auto animate-pulse" />
                <div className="mt-3 skeleton h-6 w-40 animate-pulse mx-auto" />
            </>
        )
    } 

    const Map = dynamic(() => import("@/components/Map"), { ssr: false, loading: () => MapSkeleton() });

    return (
        <>
            <PageDescription title="Travel" description="My love for travel and cartography on a single page." />
            <Map />
        </>
    );
}
