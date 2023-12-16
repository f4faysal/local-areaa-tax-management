import { IColony, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const COLONY_URL = "/colonies";

export const colonyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all colonys
    colonies: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: COLONY_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IColony[], meta: IMeta) => {
        return {
          colonies: response,
          meta,
        };
      },
      providesTags: [tagTypes.colony],
    }),
    // get single colony
    colony: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${COLONY_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.colony],
    }),
    // create a new colony
    addColony: build.mutation({
      query: (data) => ({
        url: `${COLONY_URL}/create-colony`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.colony],
    }),
    // update colony
    updateColony: build.mutation({
      query: (data) => ({
        url: `${COLONY_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.colony],
    }),
    // delete colony
    deleteColony: build.mutation({
      query: (id) => ({
        url: `${COLONY_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.colony],
    }),
  }),
});

export const {
  useColoniesQuery,
  useColonyQuery,
  useAddColonyMutation,
  useUpdateColonyMutation,
  useDeleteColonyMutation,
} = colonyApi;
