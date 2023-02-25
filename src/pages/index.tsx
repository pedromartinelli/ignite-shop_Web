import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { camisetas } from "@/constants";

export default function Home() {
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
      {camisetas.map((camiseta, i) => (
        <Product
          key={`${camiseta}-${i}`}
          className='keen-slider__slide'
        >

          <Image src={camiseta.imagem} alt={`${camiseta.nome}`} width={520} height={480} />

          <footer>
            <strong>{`${camiseta.nome}`}</strong>
            <span>{`${camiseta.preço}`}</span>
          </footer>
        </Product>
      ))
      }

    </HomeContainer >
  )
}

