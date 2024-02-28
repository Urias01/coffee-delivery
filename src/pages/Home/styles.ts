import styled from 'styled-components'

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  margin-top: 5rem;

  img {
    width: 476px;
    height: 360px;
  }
`

export const TitleInFocus = styled.h1`
  font-size: 3.25rem;
  line-height: 130%;
  font-weight: 700;
  font-family: 'Baloo 2', monospace;
  color: ${(props) => props.theme['base-title']};
`

export const BaseText = styled.p`
  font-size: 1.5rem;
  line-height: 130%;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};
`
