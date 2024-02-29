import {
  BaseText,
  CardsContainer,
  HomeContainer,
  IntroContainer,
  SubTitle,
  TitleInFocus,
} from './styles'
import coffeeImage from '../../assets/coffee.png'
import { Items } from './components/Items'
import { Card } from './components/Card'
import { coffees } from '../../../coffees.json'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <div>
          <TitleInFocus>
            Encontre o café perfeito para qualquer hora do dia
          </TitleInFocus>

          <BaseText>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </BaseText>

          <Items />
        </div>

        <img src={coffeeImage} alt="" />
      </IntroContainer>

      <SubTitle>Nossos cafés</SubTitle>
      <div>
        <CardsContainer>
          {coffees.map((coffee) => {
            return <Card key={coffee.id} coffee={coffee} />
          })}
        </CardsContainer>
      </div>
    </HomeContainer>
  )
}
