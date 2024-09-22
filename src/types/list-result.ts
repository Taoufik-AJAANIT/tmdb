type ListResult<T> = {
    results: T[]
    total_pages: number
    total_results: number
    page: number
};

export default ListResult;
