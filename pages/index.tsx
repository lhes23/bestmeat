import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import ProductCard from "../components/ProductCard"

const Home: NextPage = () => {
  const meats = [
    {
      name: "A5 MIYAZAKI JAPANESE WAGYU NY STRIP (14-16oz. Each)",
      price: "119.95",
      description:
        "Japan Premium Beef carries imported Wagyu Beef from the Miyazaki prefecture of Japan. This is called ” MiyazakiGyu” and it’s Rated “A5” by the Japanese Government beef grading system."
    },
    {
      name: "A5 MIYAZAKI JAPANESE WAGYU FILET MIGNON (7-8oz. Each)",
      price: "109.95",
      description:
        "All Japanese A5 Wagyu arrives with Certificate of Authenticity that includes the nose print of the cow."
    }
  ]
  return (
    <div className="container mx-auto">
      {meats.map((meat, i) => (
        <ProductCard
          key={i}
          name={meat.name}
          price={meat.price}
          description={meat.description}
        />
      ))}
    </div>
  )
}

export default Home
