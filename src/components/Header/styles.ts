import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  background-color: ${(props) => props.theme.background};
  justify-content: space-between;
  padding: 0 10rem;
  height: 100px;
  img {
    width: 85px;
    height: 40px;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const LocationButton = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  cursor: pointer;
`

export const ShoppingCartButton = styled.span`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme['yellow-light']};

  cursor: pointer;
`
