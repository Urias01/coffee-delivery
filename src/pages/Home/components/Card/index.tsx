import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import {
  CardContainer,
  CoffeeImg,
  Order,
  Price,
  ShoppingCartButton,
  ShoppingControl,
  TagDescription,
  TagTitle,
  Tags,
} from './styles'

type Coffee = {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface CardProps {
  coffee: Coffee
}
export function Card({ coffee }: CardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  function handleMinusCoffeeQuantity() {
    setCoffeeQuantity((state) => state - 1)
  }

  function handlePlusCoffeeQuantity() {
    setCoffeeQuantity((state) => state + 1)
  }

  return (
    <CardContainer>
      <CoffeeImg src={coffee.image} alt={coffee.title} />
      <Tags>
        {coffee.tags.map((tag, index) => {
          return <span key={index}>{tag}</span>
        })}
      </Tags>
      <TagTitle>
        <h3>{coffee.title}</h3>
      </TagTitle>
      <TagDescription>
        <p>{coffee.description}</p>
      </TagDescription>
      <ShoppingControl>
        <Price>
          <span>R$</span> R$ {coffee.price.toFixed(2)}
        </Price>
        <Order>
          <button onClick={handleMinusCoffeeQuantity}>
            <Minus size={14} weight="bold" color="#8047F8" />
          </button>
          {coffeeQuantity}
          <button onClick={handlePlusCoffeeQuantity}>
            <Plus size={14} weight="bold" color="#8047F8" />
          </button>
        </Order>
        <ShoppingCartButton>
          <ShoppingCart size={20} color="#FFF" weight="fill" />
        </ShoppingCartButton>
      </ShoppingControl>
    </CardContainer>
  )
}
