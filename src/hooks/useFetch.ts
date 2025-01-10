import { useState, useEffect, Dispatch, SetStateAction } from "react";

function useFetch<T>(
  url: string
): [T | null, boolean, Error | null, Dispatch<SetStateAction<T | null>>] {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Создаем контроллер отмены
    const controller = new AbortController();
    const { signal } = controller;

    setIsLoading(true);
    setData(null);
    setError(null);

    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((respData) => {
        setData(respData);
      })
      .catch((e) => {
        if (e.name !== "AbortError") {
          // Обработка ошибок только если запрос не был отменен
          setError(e);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    // Отменяем запрос при размонтировании или изменении URL
    return () => {
      controller.abort();
    };
  }, [url]);

  return [data, isLoading, error, setData];
}

export default useFetch;
