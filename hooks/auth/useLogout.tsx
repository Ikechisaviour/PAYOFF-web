import useCustomMutation from "../utils/useMutationAction";
import { ENDPOINTS } from "@/lib/constants";
interface IResponse {}

export function useLogout() {
  return useCustomMutation<IResponse>({
    endpoint: ENDPOINTS.AUTH.LOGOUT,
    method: "POST",
    onSettled: (response: any, err: unknown) => {},
    onError: (err: unknown) => {
      //  or errors here
    },
  });
}
