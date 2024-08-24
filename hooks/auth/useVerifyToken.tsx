import useCustomMutation from "../utils/useMutationAction";
import { ENDPOINTS } from "@/lib/constants";
interface IResponse {
  message: string;
  otp: string;
}

export function useVerifyToken() {
  return useCustomMutation<IResponse>({
    endpoint: ENDPOINTS.AUTH.VERIFY_TOKEN,
    method: "POST",
    onSettled: (response: any, err: unknown) => {},
    onError: (err: unknown) => {
      //  or errors here
    },
  });
}
