import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage?: number
  rating?: number
  stock?: number
  brand?: string
  category?: string
  thumbnail?: string
  images?: string[]
  isNew?: boolean
  sku?: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsResponse, void>({
      query: () => 'products',
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
    getProductsByCategory: builder.query<ProductsResponse, string>({
      query: (category) => `products/category/${category}`,
    }),
  }),
})

export const { 
  useGetAllProductsQuery, 
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery 
} = productsApi