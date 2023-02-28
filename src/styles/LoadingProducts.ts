import { styled } from "."

export const LoadingContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const Ldiv = styled('div', {
  height: 656,
  width: 528,

  borderRadius: 8,

  backgroundColor: '#202024',
})

export const Rdiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Div1 = styled('div', {
  borderRadius: 8,
  backgroundColor: '#202024',
  
  width: 435,
  height: 38,
})

export const Div2 = styled('div', {
  borderRadius: 8,
  backgroundColor: '#202024',
  
  width: 100,
  height: 38,
  marginTop: '1rem'
})

export const Div3 = styled('div', {
  borderRadius: 8,
  backgroundColor: '#202024',
  
  width: '100%',
  height: 143,
  marginTop: '2.5rem',
})

export const Div4 = styled('div', {
  marginTop: 'auto',

  borderRadius: 8,
  backgroundColor: '#202024',
  
  width: '100%',
  height: 61,
})