import { useEffect, useRef } from "react";
import usePaginatedQuery from "@/hooks/usePaginatedQuery";
import GetConfig from "@/types/get-config";

function useInfiniteScroll<T>(config: GetConfig) {
    const { data, setPage, loading, hasMore, error } = usePaginatedQuery<T>(config);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = (event: Event) => {
            const target = event.target as HTMLDivElement;
            const scrollLeft = target.scrollLeft;
            if (scrollLeft + target.clientWidth == target.scrollWidth) {
                setPage((prevPage) => prevPage + 1)
            }
        };
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScroll);
            }
        };
    }, [hasMore, setPage]);

    return { scrollContainerRef, data, loading, hasMore, error }
}
export default useInfiniteScroll;
