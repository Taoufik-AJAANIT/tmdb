import Image from "next/image";
import Link from "next/link";
import Movie from "@/types/movie";

function Card({ movie }: { movie: Movie }) {
    return (
        <Link href={`/movie/${movie.id}`}>
            <div className="flex flex-col ml-5 cursor-pointer pt-5">
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL_440_660}${movie.poster_path}`}
                    alt={movie.original_title}
                    width={144}
                    height={225}
                    className="rounded-lg w-auto h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div className="py-6 px-2.5 w-36">
                    <h3 className="text-black font-bold">{movie.original_title}</h3>
                    <p className="text-neutral font-light">{movie.release_date}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card;
