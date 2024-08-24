import useCustomMutation from "../utils/useMutationAction";
import { ENDPOINTS } from "@/lib/constants";
interface IResponse {}

export function useLogin() {
  return useCustomMutation<IResponse>({
    endpoint: ENDPOINTS.AUTH.LOGIN,
    method: "POST",
    onSettled: (response: any, err: unknown) => {},
    onError: (err: unknown) => {
      //  or errors here
    },
  });
}
