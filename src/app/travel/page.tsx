'use client'

import dynamic from "next/dynamic";

export default function Travel() {
    function MapSkeleton() {
        return (
            <div>
                <div className="mb-5 skeleton h-10 w-auto animate-pulse" />
                <div className="skeleton h-96 w-auto animate-pulse" />
                <div className="mt-3 skeleton h-6 w-20 animate-pulse mx-auto" />
            </div>
        )
    } 

    const Map = dynamic(() => import("@/components/Map"), { ssr: false, loading: () => MapSkeleton() });

    return (
        <div className="flex justify-center items-center flex-col mt-6">
            <div className="w-full px-4 max-w-xl">
                <div className="text-left">
                    <h1 className="text-2xl font-bold">Travel</h1>
                    <p className="text-lg">My love for travel and cartography on a single page.</p>
                </div>
                <div className="mt-10">
                    <Map />
                </div>
            </div>
        </div>
    );
}
