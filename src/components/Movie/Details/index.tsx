import Image from "next/image";
import Genre from "@/types/genre";
import Movie from "@/types/movie";

function Details({ movie }: { movie: Movie }) {
    return (
        <div className={'h-fit relative bg-scroll'}
        >
            <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL_1920_800}${movie.backdrop_path}`}
                alt={movie.original_title}
                className="brightness-50"
            />
            <div className="relative z-10 flex h-fit py-5 px-10">
                <div className="flex flex-col items-center md:flex-row">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL_440_660}${movie.poster_path}`}
                        alt={movie.original_title}
                        width={220}
                        height={330}
                        className="rounded-lg"
                    />
                    <div className="flex-col p-10">
                        <div className="flex flex-row">
                            <p className="text-4xl font-bold">{movie.original_title}</p>
                            <p className="ml-2 text-4xl font-light"> ({movie.release_date.split('-')[0]})</p>
                        </div>
                        <p className="text-base">{`${movie.release_date} \u2022 ${movie.genres.map(({ name }: Genre) => name).join(',')}`}</p>

                        <div className="mt-4">
                            <p className="text-2xl">Overview</p>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
