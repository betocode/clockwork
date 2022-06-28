import styled from 'styled-components'


export const MainSection = styled.div`
backgroundColor:${prop=>prop.theme.black_bg}
flex-direction:row;

@media(min-width: 800px) {
flex-direction:coluumn;
  }
`
export const SearchContainer = styled.div`

`
export const FilterContainer = styled.div`

`
export const MoviesContainer = styled.div`

`
