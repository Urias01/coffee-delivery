import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  padding: 20px;
  padding-top: 0;
  gap: 1rem;
  background-color: ${(props) => props.theme['base-card']};
`
export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`

export const Tags = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`

const CardCenterBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TagTitle = styled(CardCenterBase)`
  h3 {
    ${mixins.fonts.titleS}
  }
`

export const TagDescription = styled(CardCenterBase)`
  p {
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    ${mixins.fonts.textS}
  }
`
export const Price = styled.p`
  color: ${(props) => props.theme['base-text']};
  ${mixins.fonts.titleM}
  font-weight: 700;

  span {
    font-weight: 400;
    ${mixins.fonts.textS}
  }
`

export const ShoppingControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme['base-button']};

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`

export const ShoppingCartButton = styled.span`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme['purple-dark']};

  cursor: pointer;
`
