import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { VITE_APP_BASE_URL_API } = import.meta.env;

export const staticApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_APP_BASE_URL_API,
    prepareHeaders: (headers, { getState }) => {
      const token = window.Telegram?.WebApp.initData;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({}),
});

export const api = staticApi.enhanceEndpoints({ addTagTypes: [] });
