import styled from 'styled-components'

const Card = styled.div<{
  width?: string
  height?: string
  marginTop?: string
  marginBottom?: string
}>`
  background: ${({ theme }) => (theme?.colors?.text ? theme?.colors?.text : 'gray')};
  width: ${({ width }) => (width ? width : '1px')};
  height: ${({ height }) => (height ? height : '80%')};
  margin: 50px auto;
`

export default Card
