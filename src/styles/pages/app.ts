import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',

  marginTop: 50,
  
  '@md': {
    marginTop: 0,
    justifyContent: 'center',
  },
  
})

export const Header = styled('div', {
  padding: '2rem 2rem',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  '@lg': {
    padding: '2rem 0',
  },
  
})