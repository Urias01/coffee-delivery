import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const ItemsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: 80px;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  ${mixins.fonts.textM}
  color: ${(props) => props.theme['base-text']};
`

export const ShoppingCartIcon = styled.span`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const PackageIcon = styled.span`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme['base-text']};
`

export const TimerIcon = styled.span`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.yellow};
`

export const CoffeeIcon = styled.span`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.purple};
`
