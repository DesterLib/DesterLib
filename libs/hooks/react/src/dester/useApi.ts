import React from 'react';
import axios from 'axios';

/* eslint-disable-next-line */
export interface HooksReactProps {
  method: string;
  baseUrl: string;
  path: string;
  id?: string | number;
  query?: string | number;
  body?: string;
  headers?: any;
}

export function useApi({
  method,
  baseUrl,
  path,
  id,
  query,
  body,
  headers,
}: HooksReactProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  console.log(response);

  const urlCheck = () => {
    if (id && query) {
      return `https://${baseUrl}/${path}/${id}?${query}`;
    } else if (!id && query) {
      return `https://${baseUrl}/${path}?${query}`;
    } else if (id && !query) {
      return `https://${baseUrl}/${path}/${id}`;
    }
    return `https://${baseUrl}/${path}`;
  };

  React.useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios({
          method: method,
          url: urlCheck(),
          data: body,
          headers: headers,
        });

        const data = await resp?.data;
        setResponse(data);
        setIsLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, baseUrl, path, id, body, query]);

  return { isLoading, response, error };
}

export default useApi;
