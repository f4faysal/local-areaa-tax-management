import { IFinancialYear, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const FinancialYear_URL = "/financial-years";

export const financialYearsAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all financialYears
    colonies: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: FinancialYear_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IFinancialYear[], meta: IMeta) => {
        return {
          colonies: response,
          meta,
        };
      },
      providesTags: [tagTypes.financialYear],
    }),
    // get single financialYear
    financialYear: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${FinancialYear_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.financialYear],
    }),
    // create a new financialYear
    addFinancialYear: build.mutation({
      query: (data) => ({
        url: `${FinancialYear_URL}/create-financial-year`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.financialYear],
    }),
    // update financialYear
    updateFinancialYear: build.mutation({
      query: (data) => ({
        url: `${FinancialYear_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.financialYear],
    }),
    // delete financialYear
    deleteFinancialYear: build.mutation({
      query: (id) => ({
        url: `${FinancialYear_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.financialYear],
    }),
  }),
});

export const {
  useColoniesQuery,
  useFinancialYearQuery,
  useAddFinancialYearMutation,
  useUpdateFinancialYearMutation,
  useDeleteFinancialYearMutation,
} = financialYearsAPI;
