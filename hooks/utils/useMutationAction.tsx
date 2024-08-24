import "client-only";

import { ENDPOINTS } from "@/lib/constants";
import { secureRequest } from "@/lib/api.utils";
import { ResponseType, ResponseErrorType } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { APP_KEYS } from "@/lib/constants";
import Cookies from "js-cookie";;
import { useToast } from "@/components/ui/use-toast";

const getMutationAction = (mutationData: any) => {
  const { endpoint, method, headers, isApi = true } = mutationData;

  const url = isApi ? ENDPOINTS.API_BASE_DEV_URL + endpoint : endpoint;

  return {
    mutationFn: (body: Record<string, unknown>) =>
      secureRequest({
        url,
        method,
        body,
        headers,
      }),
    ...mutationData,
  };
};

function useCustomMutation<
  P = Record<string, unknown>,
  T = Record<string, unknown>
>(mutationData: any) {
  // const router = useRouter();
  const { toast } = useToast();
  const {
    mutationFn,
    endpoint,
    showSuccessToast = true,
    showFailureToast = true,
    ...others
  } = getMutationAction({
    ...mutationData,
  });

  const mutatationResult = useMutation<ResponseType<P>, ResponseErrorType, T>(
    mutationFn,
    {
      mutationKey: endpoint,

      onError: (err: ResponseErrorType) => {
        if (err?.response && err?.response.data.statusCode === 401) {
          Cookies.remove(APP_KEYS.ACCESS_TOKEN);
          toast({
            title: "Login Session Expired",
            description: err.response?.data?.message,
          });
          // router.push("/");
        }
        if (showFailureToast) {
          toast({
            title: `Request Failed`,
            description: `${err.response?.data?.message}`,
          });
        }
        mutatationResult.reset();
      },
      onSettled: (res: ResponseType<P>, err: ResponseErrorType) => {
        if (err) mutatationResult.reset()
        return;
      },
      retry: false,
      refetchOnWindowFocus: false,
      ...others,
    }
  );

  return { ...mutatationResult, value: mutatationResult?.data?.data };
}

export default useCustomMutation;
