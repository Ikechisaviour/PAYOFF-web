import useCustomMutation from "../utils/useMutationAction";
import { ENDPOINTS } from "@/lib/constants";
interface IResponse {}

export function useRegister() {
  return useCustomMutation<IResponse>({
    endpoint: ENDPOINTS.AUTH.REGISTER,
    method: "POST",
    onSettled: (response: any, err: unknown) => {},
    onError: (err: unknown) => {
      //  or errors here
    },
  });
}
