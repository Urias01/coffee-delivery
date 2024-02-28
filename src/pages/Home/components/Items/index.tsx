import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  CoffeeIcon,
  Item,
  ItemsContainer,
  PackageIcon,
  ShoppingCartIcon,
  TimerIcon,
} from './styles'

export function Items() {
  return (
    <ItemsContainer>
      <Item>
        <ShoppingCartIcon>
          <ShoppingCart size={24} color="#F3F2F2" weight="fill" />
        </ShoppingCartIcon>
        Compra simples e segura
      </Item>
      <Item>
        <PackageIcon>
          <Package size={24} color="#F3F2F2" weight="fill" />
        </PackageIcon>
        Embalagem mantém o café intacto
      </Item>
      <Item>
        <TimerIcon>
          <Timer size={24} color="#f3f2f2" weight="fill" />
        </TimerIcon>
        Entrega rápida e rastreada
      </Item>
      <Item>
        <CoffeeIcon>
          <Coffee size={24} color="#f3f2f2" weight="fill" />
        </CoffeeIcon>
        O café chega fresquinho até você
      </Item>
    </ItemsContainer>
  )
}
