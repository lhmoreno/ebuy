interface ProductProps {
  image: string
  title: string
  description: string
  price: string
}

function Product({ image, title, description, price }: ProductProps) {
  return (
    <div className="p-2 flex gap-2 rounded bg-white md:py-4 md:gap-4">
      <div className="min-w-fit px-4 bg-gray-100 flex justify-center rounded md:px-6">
        <img
          className="w-28 object-contain md:w-36"
          src={image}
          alt="product"
        />
      </div>

      <div className="flex flex-col gap-0.5 md:gap-2">
        <h3 className="text-lg md:text-xl">
          {title}
        </h3>
        <p className="text-sm text-gray-400 md:text-base">
          {description}
        </p>
        <p className="text-purple-500 md:text-lg">
          {price}
        </p>
      </div>
    </div>
  )
}

export default Product