import useCustomMutation from "../utils/useMutationAction";
import { ENDPOINTS } from "@/lib/constants";
interface IResponse {}

export function useForgotPassword() {
  return useCustomMutation<IResponse>({
    endpoint: ENDPOINTS.AUTH.FORGOT_PASSWORD,
    method: "POST",
    onSettled: (response: any, err: unknown) => {},
    onError: (err: unknown) => {
      //  or errors here
    },
  });
}