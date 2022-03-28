import { NextApiRequest, NextApiResponse } from 'next'

import { supabase } from '../../services/supabaseClient'

interface ProductDb {
	id: number
	title: string
	price: number
	category: number
	image: string
	rating: number
}

interface FilteredProductProps {
	ids?: string[]
	categories?: string[]
	ratings?: string[]
}

export const listFilteredProducts = async ({ ids, categories, ratings }: FilteredProductProps) => {
  let query = supabase.from<ProductDb>('products').select()

	if (ids) query = query.in('id', ids)
	if (categories) query = query.in('category', categories)
	if (ratings) query = query.in('rating', ratings)

	const { data } = await query

	const products = data?.map((product) => ({
		id: product.id,
		title: product.title,
		price: product.price,
		category: product.category,
		rating: product.rating,
		image_url: 'https://lxdqbkaeqtzylpiwatma.supabase.co/storage/v1/object/public/products/' + product.image
	}))

	return products
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		let categories: string[] | undefined = undefined
		let ratings: string[] | undefined = undefined
		let ids: string[] | undefined = undefined

		if (req.query.category) categories = typeof(req.query.category) === 'string' ? [req.query.category] : req.query.category
		if (req.query.rating) ratings = typeof(req.query.rating) === 'string' ? [req.query.rating] : req.query.rating
		if (req.query.id) ids = typeof(req.query.id) === 'string' ? [req.query.id] : req.query.id

		console.log(req.query)

		const products = await listFilteredProducts({ ids, categories, ratings })
		return res.status(200).json(products)
	} 

	return res.status(200).json({})
}

export default handler
