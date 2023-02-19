import Link from "next/link"
import React from "react"

type Props = {
  id: string
  name: string
  img: string
  price: string
  description: string
}

const ProductCard = ({ id, name, img, price, description }: Props) => {
  return (
    <>
      <Link href={`/products/${id}`} passHref>
        <div className="card w-96 bg-white hover:shadow-xl transform duration-200 ease-in-out hover:scale-105">
          <figure>
            <img src={img} alt={name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="line-clamp-3">{description}</p>
            <div className="card-actions justify-end">
              <div
                className="text-xl lg:text-3xl p-2 bg-red-400 
            rounded-tl-sm rounded-bl-sm font-bold rounded-lg"
              >
                $ {price}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProductCard
