import { supabase } from '../services/supabaseClient'
import { Product } from '../@types/Product'

interface ProductDb {
	id: number
	title: string
	price: number
	category: string
	image: string
	rating: number
}

interface FilteredProductProps {
	id?: number | number[]
	category?: string | string[]
	rating?: string | string[]
}

export const listFilteredProducts = async ({ id, category, rating }: FilteredProductProps) => {
  let ids: number[] | undefined = undefined
  let categories: string[] | undefined = undefined
  let ratings: string[] | undefined = undefined

  if (id) ids = typeof(id) === 'number' ? [id] : id
  if (category) categories = typeof(category) === 'string' ? [category] : category
  if (rating) ratings = typeof(rating) === 'string' ? [rating] : rating

  let queryDb = supabase.from<ProductDb>('products').select()

	if (ids && ids.length !== 0) queryDb = queryDb.in('id', ids)
	if (categories && categories.length !== 0) queryDb = queryDb.in('category', categories)
	if (ratings && ratings.length !== 0) queryDb = queryDb.in('rating', ratings)

	const res = await queryDb

  const data = res.data ? res.data as ProductDb[] : []

	const products: Product[] = data.map((product) => ({
		id: product.id,
		title: product.title,
		price: product.price,
		category: product.category,
		rating: product.rating,
		image_url: 'https://lxdqbkaeqtzylpiwatma.supabase.co/storage/v1/object/public/products/' + product.image
	}))

	return products
}
