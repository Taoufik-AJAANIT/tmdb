import Link from "next/link";
import Details from "@/components/Movie/Details";
import Cast from "@/components/Movie/Cast";
import Movie from "@/types/movie";

function MovieComponent({ data }: { data: Movie }) {
  return <div>
    <div className="breadcrumbs text-sm px-3">
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li>{data.original_title}</li>
      </ul>
    </div>
    <Details movie={data}/>
    <Cast movieId={data.id}/>
  </div>;
}

export default MovieComponent;
