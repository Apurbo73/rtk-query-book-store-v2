import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "  http://localhost:3001"
  }),
  endpoints: builder => ({
    //get all books:
    getAllBook: builder.query({
      query: () => "/books"
    })
  })
});

export const { useGetAllBookQuery } = apiSlice;
