import Movie from "@/types/movie";
import api from "@/tools/api";
import ListResult from "@/types/list-result";
import SearchComponent from "@/components/Search";

async function Search({ searchParams: { query, page = 1 } }:
                          { searchParams: { query: string, page: number } }) {
    const { data } = await api.get({
        url: '/search/movie',
        params: {
            query,
            page
        }
    }) as {
        data: ListResult<Movie>
    }

    return (<SearchComponent data={data} query={query} page={page}/>)
}

export default Search;
