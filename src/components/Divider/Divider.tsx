import styled from 'styled-components'
import { BasicDivStyled } from '../Basic/Basic'

const Divider = styled(BasicDivStyled)`
  background: ${({ theme }) => (theme?.colors?.text ? theme?.colors?.text : 'gray')};
  width: ${({ width }) => (width ? width : '1px')};
  height: ${({ height }) => (height ? height : '80%')};
  margin: 50px auto;
`

export default Divider
