import { IColony, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const HOME_URL = "/homes";

export const homeRegisterApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all home
    homes: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: HOME_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IColony[], meta: IMeta) => {
        return {
          home: response,
          meta,
        };
      },
      providesTags: [tagTypes.colony],
    }),
    // get single colony
    home: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${HOME_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.colony],
    }),
    // create a new colony
    homeRegister: build.mutation({
      query: (data) => ({
        url: `${HOME_URL}/create-colony`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.colony],
    }),
    // update colony
    updateHome: build.mutation({
      query: (data) => ({
        url: `${HOME_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.colony],
    }),
    // delete colony
    deleteHome: build.mutation({
      query: (id) => ({
        url: `${HOME_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.colony],
    }),
  }),
});

export const { useHomesQuery } = homeRegisterApi;
