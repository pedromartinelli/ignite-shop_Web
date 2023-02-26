import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  
  '@sm': {
    // marginRight: 10,
    padding: '0',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,
    maxHeight: '80vh',
  },

})

export const Product = styled('a', {

  background: 'linear-gradient(180deg, #1ea483 0, #7465d4 100%);',
  borderRadius: 8,
  padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@sm': {
    maxWidth: 'auto',
  },

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.3s ease-in-out',

    strong: {
      fontSize: '$lg',
    },

    span: {
      fontSize: '20px',
      FontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1,
      transition: 'all 0.2s ease-in-out',
    }

  },
})