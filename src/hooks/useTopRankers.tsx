import { useQuery, UseQueryOptions } from "react-query";

interface TopRanker {
  type: string;
}

const useTopRankers = (options?: UseQueryOptions<TopRanker[], Error>) => {
  // Define the query key
  const queryKey = "topRankers";

  const fetchTopRankers = async (): Promise<TopRanker[]> => {
    const response = await fetch("/api/top-rankers");
    if (!response.ok) {
      throw new Error("Failed to fetch top rankers");
    }
    const data: TopRanker[] = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery<TopRanker[], Error>(
    queryKey,
    fetchTopRankers,
    {
      ...options,
    }
  );

  return {
    topRankers: data || [],
    isLoading,
    error,
  };
};

export default useTopRankers;
