import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HomeContainer = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 10rem;
  margin-bottom: 1rem;
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
`

export const TitleInFocus = styled.h1`
  ${mixins.fonts.titleXL}
  color: ${(props) => props.theme['base-title']};
`

export const SubTitle = styled.h3`
  ${mixins.fonts.titleL}
  color: ${(props) => props.theme['base-subtitle']};
`

export const BaseText = styled.p`
  color: ${(props) => props.theme['base-text']};
  ${mixins.fonts.textL}
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(300px, 300px);
  grid-template-columns: repeat(4, minmax(256px, 1fr));
  grid-gap: 2rem;
`
