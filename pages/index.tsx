import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import ProductCard from "../components/ProductCard"

const Home: NextPage = () => {
  const meats = [
    {
      id: "1",
      name: "A5 MIYAZAKI JAPANESE WAGYU NY STRIP (14-16oz. Each)",
      price: "119.95",
      img: "https://www.subicmeatsandseafoods.com/wp-content/uploads/2022/07/img_5015.jpeg",
      description:
        "Japan Premium Beef carries imported Wagyu Beef from the Miyazaki prefecture of Japan. This is called ” MiyazakiGyu” and it’s Rated “A5” by the Japanese Government beef grading system."
    },
    {
      id: "2",
      name: "A5 MIYAZAKI JAPANESE WAGYU FILET MIGNON (7-8oz. Each)",
      price: "109.95",
      img: "https://www.subicmeatsandseafoods.com/wp-content/uploads/2022/07/img_5017.jpeg",
      description:
        "All Japanese A5 Wagyu arrives with Certificate of Authenticity that includes the nose print of the cow."
    },
    {
      id: "3",
      name: "A5 MIYAZAKI JAPANESE WAGYU FILET MIGNON (7-8oz. Each)",
      price: "109.95",
      img: "https://www.subicmeatsandseafoods.com/wp-content/uploads/2022/07/img_5017.jpeg",
      description:
        "All Japanese A5 Wagyu arrives with Certificate of Authenticity that includes the nose print of the cow."
    },
    {
      id: "4",
      name: "A5 MIYAZAKI JAPANESE WAGYU FILET MIGNON (7-8oz. Each)",
      price: "109.95",
      img: "https://www.subicmeatsandseafoods.com/wp-content/uploads/2022/07/img_5017.jpeg",
      description:
        "All Japanese A5 Wagyu arrives with Certificate of Authenticity that includes the nose print of the cow."
    }
  ]
  return (
    <div className="bg-[url('/assets/images/white-bg.jpg')] bg-fixed bg-cover bg-center">
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8">
        {meats.map((meat) => (
          <ProductCard
            key={meat.id}
            id={meat.id}
            name={meat.name}
            img={meat.img}
            price={meat.price}
            description={meat.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
