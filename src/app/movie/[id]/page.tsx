import api from '@/tools/api';
import Movie from "@/types/movie";
import MovieComponent from "@/components/Movie";


async function MoviePage({ params }: { params: { id: string } }) {
    const { data } = await api.get({ url: `/movie/${params.id}` }) as { data: Movie };

    return <MovieComponent data={data} />;
}

export default MoviePage;
