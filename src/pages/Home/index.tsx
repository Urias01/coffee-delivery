import { BaseText, IntroContainer, TitleInFocus } from './styles'
import coffeeImage from '../../assets/coffee.png'
import { Items } from './components/Items'

export function Home() {
  return (
    <section>
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
    </section>
  )
}
