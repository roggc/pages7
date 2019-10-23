import styled from 'styled-components'

export const Div=
styled.div
`
height:100%;
input
{
  margin-left:10px;
  width:178px;
  height:24px;
  border-radius:5px;
  font-size:.9em;
}
.row
{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:7px;
}
.square
{
  float:left;
}
.center
{
  overflow: hidden;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
}
button
{
  font-size:.9em;
  border-radius:5px;
  cursor:pointer;
  padding:4px;
}
.row.last
{
  margin-top:23px;
}
`
