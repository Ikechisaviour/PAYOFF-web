import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../utils/useQueryAction";

export interface IData {
    states: Array<string>;
}
export const useGetStates = () => {
  return useQueryActionHook<IData>({
    method: "get",
    endpoint: ENDPOINTS.HELPERS.STATES,
    queryKey: [NAMESPACE.HELPERS.STATES],
  });
};