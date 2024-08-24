import "client-only";
import { ENDPOINTS } from "@/lib/constants";
import { secureRequest } from "@/lib/api.utils";
import { ResponseType, ResponseErrorType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { APP_KEYS } from "@/lib/constants";
import Cookies from "js-cookie";
import { useToast } from "@/components/ui/use-toast";

export const getQueryAction = (payload: any) => {
  const { endpoint, method, body, headers, isApi = true } = payload;

  const url = isApi ? ENDPOINTS.API_BASE_DEV_URL + endpoint : endpoint;

  return {
    queryFn: () => {
      return secureRequest({
        url,
        method,
        body,
        headers,
      });
    },
    ...payload,
  };
};

function useQueryActionHook<T>(data: any) {
  // const router = useRouter();
  const { toast } = useToast();
  const { queryFn, queryKey, endpoint, ...others } = getQueryAction({
    ...data,
  });

  const queryResult = useQuery<ResponseType<T>, ResponseErrorType>({
    queryFn,
    queryKey: queryKey || endpoint,

    onError: (err: any) => {
      if (err) {
        if (err.response && err.response.data.statusCode === 401) {
          Cookies.remove(APP_KEYS.TOKEN);
          toast({
            title: "Login Session Expired",
            description: err.response?.data?.message,
          });
          // router.push("/");
        }
        // Push the error
      } else {
        //  push the error
      }
    },
    onSettled: () => {
      return;
    },
    retry: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    ...others,
  });

  return {
    ...queryResult,
    value: queryResult.data?.data
  };
}

export default useQueryActionHook;
