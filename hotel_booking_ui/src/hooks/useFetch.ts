import { useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

interface FetchResult<T> {
   data: T | null;
   loading: boolean;
   error: AxiosError | null;
   fetchData: () => void;
}

const useFetch = <T>(url: string): FetchResult<T> => {
   const [data, setData] = useState<T | null>(null)
   const [loading, setLoading] = useState<boolean>(false)
   const [error, setError] = useState<AxiosError | null>(null)

   const fetchData = async () => {
      setLoading(true)
      try{
         const res: AxiosResponse<T> = await axios.get("http://localhost:8000" + url)
         setData(res.data)
      } catch(error: any) {
         setError(error)
      } finally {
         setLoading(false);
      }
   }

   return { data, loading, error, fetchData }
}

export default useFetch