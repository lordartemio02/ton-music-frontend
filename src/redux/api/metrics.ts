import { api } from "./api";

export const metricsApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    metricStartTrack: builder.mutation<void, any>({
      query: (body) => ({
        url: `_metrics/tracks/${body.id}/start`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${body.token}`,
        },
      }),
    }),
    metricEndTrack: builder.mutation<void, any>({
      query: (body) => ({
        url: `_metrics/tracks/${body.id}/end`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${body.token}`,
        },
      }),
    }),
  }),
});

export const { useMetricEndTrackMutation, useMetricStartTrackMutation } =
  metricsApiSlice;
