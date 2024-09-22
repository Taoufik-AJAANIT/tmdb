import ListResult from "@/types/list-result";
import Movie from "@/types/movie";
import Link from "next/link";
import Card from "@/components/Search/Card";

function Search({ data, query, page }: { data: ListResult<Movie>, query: string, page: number }) {
    return (<div>
        <div className="breadcrumbs text-sm px-3">
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li>Search: {query} ({data.total_results} results - {data.total_pages} pages )</li>
            </ul>
        </div>
        <div className="p-10 h-full bg-white flex flex-col justify-center items-center">
            <div className="columns-1 md:columns-2">
                {
                    data.results.map((movie: Movie) => {
                        return <div key={movie.id} className="mb-3">
                            <Card movie={movie}/>
                        </div>;
                    })
                }
            </div>
            <div className="join mt-10">
                <Link
                    href={`?query=${query}&page=${page > 1 ? page - 1 : page}`}>
                    <button className="bg-white text-black hover:text-white join-item btn">
                        «
                    </button>
                </Link>
                <button className="bg-white text-black hover:text-white join-item btn">Page {page}</button>
                <Link href={`/search?query=${query}&page=${page < data.total_pages ? Number(page) + 1 : page}`}>
                    <button className="bg-white text-black hover:text-white join-item btn">
                        »
                    </button>
                </Link>
            </div>
        </div>
    </div>)
}

export default Search;
