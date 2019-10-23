import styled from 'styled-components'

export const Div=
styled.div
`
height:100%;
button
{
  border-radius: 5px;
  margin-bottom: 10px;
  cursor:pointer;
  font-size:.9em;
}
ul
{
  list-style-type:none;
  padding:0px;
  margin:0px;
  height:90%;
  overflow:auto;
  .inline
  {
    display:inline-block;
  }
}
li
{
  /*border:1px solid ghostwhite;
  border-radius:5px;
  padding:5px;
  float:left;*/
}
img
{
  height:10px;
}
.modal
{
  background-color:rgba(0,0,0,0.4);
  padding-top:145px;
  overflow:auto;
  position:fixed;
  top:0px;
  left:0px;
  height:100%;
  width:100%;
  z-index:1;
  input
  {
    border-radius:5px;
    width:300px;
    height:40px;
    font-size:.9em;
  }
  .center
  {
    width:31%;
    margin:auto;
    text-align:center;
  }
  button
  {
    margin-top:10px;
  }
}
.tooltip-container
{
  position:relative;
  display:inline-block;
  .tooltip
  {
    visibility: hidden;
    opacity: 0;
    /*visibility:visible;
    opacity:1;*/
    transition: opacity 0.3s 1s;
    width: 65px;
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 6px;
    padding: 5px 8px;
    position: absolute;
    z-index: 1;
    bottom: 127%;
    left: 0%;
    text-align:center;
  }
}
.tooltip-container:hover
{
  .tooltip
  {
    visibility:visible;
    opacity:1;
  }
}
.todo-center
{
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
}
`
