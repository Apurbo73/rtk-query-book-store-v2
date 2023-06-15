import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001"
  }),
  tagTypes: ["Books", "Book"],
  endpoints: builder => ({
    //get all books:

    getAllBook: builder.query({
      query: () => "/books",
      // keepUnusedDataFor: 600,
      providesTags: ["Books"]
    }),
    getSingleBook: builder.query({
      query: id => `/books/${id}`,
      providesTags: ["Book"]
    }),

    // searchBook: builder.query({
    //   query: title => `/books/${title}`
    // }),
    addBook: builder.mutation({
      query: data => ({
        url: `/books`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Books"]
    }),
    deleteBook: builder.mutation({
      query: id => ({
        url: `/books/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Books"]
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["Books", "Book"]
    })
  })
});

export const {
  useGetAllBookQuery,
  useGetSingleBookQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useEditBookMutation,
  useSearchBookQuery
} = apiSlice;
