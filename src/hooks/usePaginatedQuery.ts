import { useEffect, useState } from 'react';
import GetConfig from "@/types/get-config";
import api from "@/tools/api";
import ListResult from "@/types/list-result";

function usePaginatedQuery<T>({ url, params }: GetConfig) {
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [data, setData] = useState<T[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                let { data } = await api.get({
                    url,
                    params: { ...params, page }
                }) as {
                    data: ListResult<T>
                }
                setData((prevMovies) => [...prevMovies, ...data.results]);
                setHasMore(data.page < data.total_pages);
                setLoading(false)
            } catch (e) {
                setLoading(false)
                setError(true)
            }
        }

        fetchData();
    }, [page, params, url]);

    return { loading, error, data, setPage, hasMore };
}

export default usePaginatedQuery;
