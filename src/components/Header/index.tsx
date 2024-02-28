import { HeaderContainer } from './styles'
import LogoCoffee from '../../assets/logo-coffee.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffee} alt="" />
      <nav></nav>
    </HeaderContainer>
  )
}
