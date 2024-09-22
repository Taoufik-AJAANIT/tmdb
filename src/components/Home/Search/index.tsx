"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

function Search() {
    const [search, setSearch] = useState<string>('')
    const router = useRouter();

    return (
        <div className="min-h-80 bg-[url('/pictures/cover.jpg')] bg-center">
            <div
                className="size-full px-8  py-20">
                <div className="mb-10">
                    <h2 className="text-5xl font-bold">
                        Welcome.
                    </h2>
                    <p className="text-3xl">
                        Millions of movies, TV shows and people to discover. Explore now.
                    </p>
                </div>
                <div className="w-full flex justify-center items-center flex-row bg-white rounded-full">
                    <input
                        type="text"
                        placeholder="Search for a movie"
                        className="w-full p-3 text-gray-600 rounded-full outline-none"
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && search) {
                                router.push(`/search?query=${search}`)
                            }
                        }}
                    />
                    <button
                        onClick={() => {
                            if (search) {
                                router.push(`/search?query=${search}`)
                            }
                        }}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-5 py-3 rounded-full hover:text-neutral">
                        Search
                    </button>
                </div>
            </div>
        </div>)
}

export default Search;
