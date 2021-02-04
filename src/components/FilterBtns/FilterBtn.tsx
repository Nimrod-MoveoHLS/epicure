
import * as React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"


const FilterContainer = styled.div` 
background-color: #fafafa;
height: 125px;
width: auto;
display: none;


button:link {
          text-decoration: none;
          color: black;

}

button:visited {
         text-decoration: none;
         color: black;
}
button:hover {
         text-decoration: none;
         color: black;
}
@media (max-width: 650px) {
    display: block;
  }
`

const ButtonOne = styled.div`
button{
  width: 76px;
  height: 43px;
  /* background-color: rgba(232, 196, 122, 0.8); */
}
  
  margin-top:40px;
  /* margin-left:43px */

  h2{
    font-family: HelveticaNeue;
  font-size: 13px;
  font-weight: 100;
  /* font-weight: bold; */
  letter-spacing: 0.93px;
  color: black;
  }
`
const ButtonTwo = styled.div`
button{
  width: 131px;
  height: 43px;
}
  width: 131px;
  height: 43px;
  background-color: rgba(232, 196, 122, 0.8);
  /* border:none */
  h2{
    font-family: 'Helvetica Neue';
  font-size: 155px;
  font-weight: bold;
  letter-spacing: 0.93px;
  color: black;
  }
`
const ButtonsContainer = styled.div`
margin-left:20%;
/* margin-right:20%; */
justify-content: space-between;

button {
  box-sizing: border-box;
  height: 43px;
  margin: 40px 17px 0 0;
  background-color: #e8c47a;
border: none;
font-family: 'HelveticaNeue';
  font-size: 13px;
  font-weight: 100;
  letter-spacing: 0.93px;
  color: black;
  padding: 15px 11px 13px 17px;
text-align: center;
}

`
const FilterBtn = () => {
    return (
<FilterContainer>
  <ButtonsContainer>
<Link to='/restaurants'>
{/* <ButtonOne> */}
  <button>
CHEFS
  </button>
{/* </ButtonOne> */}
</Link>
<Link to='/restaurants'>
{/* <ButtonTwo> */}
  <button>
RESTAURANTS
  </button>
{/* </ButtonTwo> */}
</Link>
  </ButtonsContainer>
</FilterContainer>           
    )
}

export default FilterBtn
