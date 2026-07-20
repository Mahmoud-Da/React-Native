import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.0.14:9000/api",
});

const get = apiClient.get;

apiClient.get = async (
  url,
  params,
  axiosConfig
) => {
  const response = await get(
    url,
    params,
    axiosConfig
  );

  if (response.ok) {
    await cache.store(
      url,
      response.data
    );

    return response;
  }

  const data = await cache.get(url);

  if (data)
    return {
      ok: true,
      data,
    };

  return response;
};

export default apiClient;