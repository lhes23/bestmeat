import React from "react"

type Props = {
  name: string
  img: string
  price: string
  description: string
}

const ProductCard = ({ name, img, price, description }: Props) => {
  return (
    <>
      <div className="card w-96 glass shadow-xl">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <div className="justify-start">{price}</div>
            <div className="justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
