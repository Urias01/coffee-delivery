import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HomeContainer = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 10rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;

  img {
    width: 476px;
    height: 360px;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    img {
      width: 276px;
      height: 180px;
    }
  }
`

export const TitleInFocus = styled.h1`
  ${mixins.fonts.titleXL}
  color: ${(props) => props.theme['base-title']};

  @media (max-width: 768px) {
    ${mixins.fonts.titleL}
  }
`

export const SubTitle = styled.h3`
  ${mixins.fonts.titleL}
  color: ${(props) => props.theme['base-subtitle']};
`

export const BaseText = styled.p`
  color: ${(props) => props.theme['base-text']};
  ${mixins.fonts.textL}

  @media (max-width: 768px) {
    ${mixins.fonts.textS}
  }
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(256px, 300px);
  grid-template-columns: repeat(4, minmax(256px, 1fr));
  grid-gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(256px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(256px, 1fr));
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, minmax(256px, 1fr));
  }
`
