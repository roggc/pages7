import styled from 'styled-components'

export const Row=
styled.div
`
display:flex;
justify-content:space-between;
align-items:center;
`

export const RowEnd=
styled.div
`
display:flex;
justify-content:flex-end;
`

export const FloatLink=
styled.div
`
float:left;
cursor:pointer;
margin-right: 5px;
`

export const Float=
styled.div
`
float:left;
margin-right: 5px;
a
{
  color:ghostwhite;
  text-decoration:none;
}
border:1px solid ghostwhite;
padding:3px;
border-radius:5px;
cursor:pointer;
position:relative;
.show
{
  opacity:1;
  transition:opacity 300ms;
}
.notShow
{
  opacity:0;
  transition:opacity 300ms,visibility 300ms;
  visibility:hidden;
}
`

export const Modal=
styled.div
`
overflow: auto;
max-height: 79px;
position:absolute;
border:1px solid ghostwhite;
border-radius:5px;
padding:5px;
background-color:grey;
a
{
  text-decoration:none;
  color:ghostwhite;
}
right:32px;
cursor:initial;
z-index:1;
`
