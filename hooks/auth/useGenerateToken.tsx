import useCustomMutation from "../utils/useMutationAction";
import { ENDPOINTS } from "@/lib/constants";
interface IResponse {
  message: string;
  otp: string;
  email?: string;
  phoneNumber?: string;
}

export function useGenerateToken() {
  return useCustomMutation<IResponse>({
    endpoint: ENDPOINTS.AUTH.GENERATE_TOKEN,
    method: "POST",
    onSettled: (response: any, err: unknown) => {},
    onError: (err: unknown) => {
      //  or errors here
    },
  });
}
