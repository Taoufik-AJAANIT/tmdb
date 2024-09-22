import Movie from "@/types/movie";
import Image from "next/image";
import Link from "next/link";

function Card({ movie }: { movie: Movie }) {
    const src = movie.poster_path ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL_440_660}${movie.poster_path}` : "/pictures/movie-placeholder.jpg";
    return <Link href={`/movie/${movie.id}`}>
        <div className="cursor-pointer card bg-white w-80 md:w-96 h-fill md:h-60 shadow-xl flex flex-row  hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
                width={200}
                height={200}
                src={src}
                alt={movie.original_title}
                className={"rounded-lg w-40 h-60"}
            />
            <div className="p-3 w-30 h-full w-full">
                <h2 className="w-30 card-title text-black text-ellipsis">{movie.original_title}</h2>
                <p className="text-black">{movie.release_date}</p>
            </div>
        </div>

    </Link>
}

export default Card;
