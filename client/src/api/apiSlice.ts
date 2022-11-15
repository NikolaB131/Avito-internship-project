import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post, Comment } from '../../../shared/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getNews: builder.query<Post[], void>({
      query: () => '/api/news'
    }),
    getPost: builder.query<Post, string>({
      query: (id) => `/api/item/${id}`
    }),
    getComment: builder.query<Comment, string>({
      query: (id) => `/api/item/${id}`,
      providesTags: ['Comments']
    }),
    updateComments: builder.mutation<null, void>({
      queryFn: () => ({ data: null }),
      invalidatesTags: ['Comments']
    })
  })
});

export const {
  useGetNewsQuery,
  useGetPostQuery,
  useGetCommentQuery,
  useUpdateCommentsMutation
} = apiSlice;
