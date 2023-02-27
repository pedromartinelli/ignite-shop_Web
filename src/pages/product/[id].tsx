import { useRouter } from "next/router"
import Image from "next/image"

import { ProductContainer, ImageContainer, ProductDetails } from "@/styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>
      
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ex minus reiciendis explicabo voluptate voluptatem inventore, consequuntur dolorem reprehenderit praesentium earum accusantium aut fuga tempore cum et? Aut, tempore fugiat!</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}
