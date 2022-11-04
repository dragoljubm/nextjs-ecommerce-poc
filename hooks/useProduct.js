function useProduct(id) {
  const { data, error } = useSWR(
    `${process.env.DB_HOST}/products/${id}`,
    fetcher
  );

  return {
    product: data,
    isLoading: !error && !data,
    isError: error,
  };
}
