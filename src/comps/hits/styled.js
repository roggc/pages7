import styled from 'styled-components'

export const Div=
styled.div
`
a
{
  color:ghostwhite;
  text-decoration:none;
}
a:hover
{
  text-decoration:underline;
}
ul
{
  list-style-type:none;
  margin:0px;
  padding:0px;
}
li
{
  animation-name:fade;
  animation-duration:1s;
  @keyframes fade
  {
    from {opacity:0;}
    to {opacity:1;}
  }
}
.centerC
{
  display:flex;
  flex-direction:column;
  justify-content:center;
  height:100%;
}
.centerR
{
  display:flex;
  justify-content:center;
}
height:100%;
overflow:auto;
`
