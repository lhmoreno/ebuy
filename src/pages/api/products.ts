import { NextApiRequest, NextApiResponse } from 'next'

export const fakeProducts = [
  {
    id: '1',
    image: 'http://localhost:3000/images/product.jpg',
    name: 'Monitor PCTOP 17 LED',
    price:  488.78
  },
  {
    id: '2',
    image: 'http://localhost:3000/images/product.jpg',
    name: 'Celular',
    price: 32.87
  },
  {
    id: '3',
    image: 'http://localhost:3000/images/product.jpg',
    name: 'Headset Gamer Havit',
    price: 268.12
  },
  {
    id: '4',
    image: 'http://localhost:3000/images/product.jpg',
    name: 'Cadeira Gamer Husky Gaming Snow',
    price: 624.90
  },
  {
    id: '5',
    image: 'http://localhost:3000/images/product.jpg',
    name: 'Smart TV LG 55 4K UHD',
    price: 3099.00
  },
  {
    id: '6',
    image: 'http://localhost:3000/images/product.jpg',
    name: 'Console Microsoft Xbox Series S',
    price: 2699.90
  },
  {
    id: '7',
    image: 'http://localhost:3000/images/product.jpg',
    name: 'Celular',
    price: 32.87
  },
  {
    id: '8',
    image: 'http://localhost:3000/images/product.jpg',
    name: 'Notebook Lenovo Ultrafino IdeaPad',
    price: 2959.90
  },
  {
    id: '9',
    image: 'http://localhost:3000/images/product.jpg',
    name: 'Teclado Mecânico Gamer Husky Gaming Blizzard',
    price: 229.00
  }
]

function products(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(fakeProducts)
}

export default products
