import Image from "next/image";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

import { HomeContainer, Product } from "@/styles/pages/home";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Link from "next/link";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [slideRef] = useKeenSlider<HTMLDivElement>({

    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 36 },
        vertical: false,
      },

      "(min-width: 1020px)": {
        slides: { perView: 3, spacing: 36 },
        vertical: false,
      },
    },
    slides: {
      origin: 'center',
      perView: 1,
      spacing: 20,
    },
  })

  return (
    <HomeContainer
      ref={slideRef}
      className='keen-slider'
    >
      {products.map((product, i) => (
        <Link href={`/product/${product.id}`} key={product.id} >
          <Product className='keen-slider__slide'>
            <Image src={product.imageUrl} alt={product.name} width={520} height={480} />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        </Link>
      ))}
    </HomeContainer >
  )
}

export async function getStaticProps() {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100,)
    }
  })

  console.log(response.data)
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}

