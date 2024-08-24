import useCustomMutation from "../utils/useMutationAction";
import { ENDPOINTS } from "@/lib/constants";
interface IResponse {}

export function useSubscribe() {
  return useCustomMutation<IResponse>({
    endpoint: ENDPOINTS.HELPERS.SUBSCRIBE,
    method: "POST",
    onSettled: (response: any, err: unknown) => {},
    onError: (err: unknown) => {
      //  or errors here
    },
  });
}
