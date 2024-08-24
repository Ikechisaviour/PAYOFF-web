import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../utils/useQueryAction";

export interface IData {
  localGovernment: Array<string>;
}
export const useGetLga = (state: string) => {
  return useQueryActionHook<IData>({
    method: "get",
    endpoint: ENDPOINTS.HELPERS.LGAS(state),
    queryKey: [NAMESPACE.HELPERS.LGAS(state)],
  });
};
