import type { NextPage } from 'next'
import Head from 'next/head'

import HeaderMenu from '../components/HeaderMenu'
import StoreOptions from '../components/StoreOptions'
import Product from '../components/Product'

const fakeProducts = [
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    description: "Description product audfgsud sdufgs sdiugfs sdugfs uigsidf siudgfsd isgdfsd",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    description: "Description product audfgsud sdufgs sdiugfs sdugfs uigsidf siudgfsd isgdfsd",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    description: "Description product audfgsud sdufgs sdiugfs sdugfs uigsidf siudgfsd isgdfsd",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    description: "Description product audfgsud sdufgs sdiugfs sdugfs uigsidf siudgfsd isgdfsd",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    description: "Description product audfgsud sdufgs sdiugfs sdugfs uigsidf siudgfsd isgdfsd",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    description: "Description product audfgsud sdufgs sdiugfs sdugfs uigsidf siudgfsd isgdfsd",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    description: "Description product audfgsud sdufgs sdiugfs sdugfs uigsidf siudgfsd isgdfsd",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    description: "Description product audfgsud sdufgs sdiugfs sdugfs uigsidf siudgfsd isgdfsd",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    description: "Description product audfgsud sdufgs sdiugfs sdugfs uigsidf siudgfsd isgdfsd",
    price: "R$ 23,15"
  },
  {
    image: "/images/product.jpg",
    title: "TItle complete product info here",
    description: "Description product audfgsud sdufgs sdiugfs sdugfs uigsidf siudgfsd isgdfsd",
    price: "R$ 23,15"
  }
]

const Home: NextPage = () => {
  return (
    <div className="bg-gray-200 text-gray-900">
      <Head>
        <title>Ebuy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderMenu />
      <StoreOptions />

      <div className="ebuy-container flex flex-col">
        <h2 className="py-2 text-gray-700 text-lg font-semibold md:py-4 md:text-2xl">Macbook</h2>

        <div className="pb-4 flex flex-col gap-1 md:pb-8 md:gap-2">
          {fakeProducts.map(product => (
            <Product
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home