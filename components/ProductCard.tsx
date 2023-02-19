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
        <div className="card w-96 glass hover:shadow-xl transform duration-200 ease-in-out hover:scale-105">
          <figure>
            <img src={img} alt={name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="line-clamp-3">{description}</p>
            <div className="card-actions">
              <div className="justify-end">{price}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProductCard
