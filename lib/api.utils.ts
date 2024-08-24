import { CustomMethod, SecureRequestProps } from "@/types";
import axios from 'axios';

export const secureRequest = async ({
  url,
  method = "get",
  body = undefined,
  headers: requestHeader,
}: SecureRequestProps) => {
  const givenMethod = method.toLocaleLowerCase() as CustomMethod;
  const headers = { ...requestHeader };
  if (givenMethod === "get" || givenMethod === "delete") {
    //dont include body in GET request request will fail
    return axios[givenMethod](url, {
      params: {
        ...body,
      },
      headers,
    });
  }

  return axios[givenMethod](url, body, { headers });
};
