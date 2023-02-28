import { LoadingContainer, Ldiv, Rdiv, Div1, Div2, Div3, Div4 } from '../styles/LoadingProducts'

export default function LoadingProduct() {
  return (
    <LoadingContainer>
      <Ldiv />

      <Rdiv>
        <Div1 />
        <Div2 />
        <Div3 />
        <Div4 />
      </Rdiv>
    </LoadingContainer>
  )
}