"use client";

import Card from "@/components/Home/Trending/Card";
import Error from "@/components/Shared/Alert/Error";
import Loading from "@/components/Shared/Loading";
import Movie from "@/types/movie";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

function Trending() {
    const { scrollContainerRef, loading, error, data: movies } = useInfiniteScroll<Movie>({
        url: '/trending/movie/week',
    });

    return (
        <div className="h-fit bg-white py-8">
            <div className="px-10">
                <h2 className="text-black text-2xl">Trending</h2>
            </div>
            <div className="px-5 w-full">
                <div className="flex overflow-x-scroll" ref={scrollContainerRef}>
                    {movies.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))}
                    {loading && <Loading/>}
                </div>
            </div>
            {error && <Error message="Failed to load trending movies"/>}
        </div>
    );
}

export default Trending;
