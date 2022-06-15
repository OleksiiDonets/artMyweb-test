import { createApi, fetchBaseQuery, transformResponse } from '@reduxjs/toolkit/query/react';
const clientToken = process.env.ACCESS_TOKEN;

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery:fetchBaseQuery({
    baseUrl: 'https://gorest.co.in/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${clientToken}`);
      headers.set('Content-Type', 'application/json');
      return headers
    }
  }),
  tagTypes: ['Users'],
  endpoints: (builder) =>({
    getUsers: builder.query({
      query: (pageNumb = 1) => `/public/v2/users?page=${pageNumb}`,
      transformResponse(apiResponse, meta){
        return {
          apiResponse,
          totalPages:meta.response.headers.get('X-Pagination-Pages'),
          curentPage: meta.response.headers.get('X-Pagination-Page'),
          totalCountItem: meta.response.headers.get('X-Pagination-Total')
        }
      },
      providesTags: (result, error, page) =>{
        console.log(result)
        return result ? [
          ...result.apiResponse.map(({id}) => ({type: 'Users', id})),
          {tpype: 'Users', id: 'PARTIAL_LIST'}
        ]: [
          {
            type: 'Users',
            id: 'PARTIAL_LIST'
          }
        ]
      }
    }),

    selectEditUser: builder.query({
      query: (id) => `/public/v2/users/${id}`
    }),
    postSaveEditUser: builder.query({
      query: () => 
    })
  })
});
export const { useGetUsersQuery, useSelectEditUserQuery  } = usersApi;