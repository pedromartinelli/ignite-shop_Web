import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import { camisetas } from "@/constants";

export default function Home() {
  return (
    <HomeContainer>

      {camisetas.map((camiseta, i) => (
        <Product key={`${camiseta}-${i}`}>

          <Image src={camiseta.imagem} alt={`${camiseta.nome}`} width={520} height={480} />

          <footer>
            <strong>{`${camiseta.nome}`}</strong>
            <span>{`${camiseta.preço}`}</span>
          </footer>
        </Product>
      ))}

    </HomeContainer>
  )
}
