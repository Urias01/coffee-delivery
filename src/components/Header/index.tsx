import {
  HeaderContainer,
  LocationButton,
  NavContainer,
  ShoppingCartButton,
} from './styles'
import LogoCoffee from '../../assets/logo-coffee.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffee} alt="" />
      <NavContainer>
        <LocationButton>
          <MapPin size={24} color="#4b2995" weight="fill" />
          São Paulo, SP
        </LocationButton>

        <ShoppingCartButton>
          <ShoppingCart size={24} color="#c47f17" weight="fill" />
        </ShoppingCartButton>
      </NavContainer>
    </HeaderContainer>
  )
}
