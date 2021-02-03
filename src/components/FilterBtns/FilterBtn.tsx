
import * as React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"


const FilterContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin:0 auto;
display: none;
text-align: center;

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

const ButtonOne = styled.button`
  width: 76px;
  height: 43px;
  margin: 0 17px 0 0;
  background-color: rgba(232, 196, 122, 0.8);

  h2{
    font-family: HelveticaNeue;
  font-size: 13px;
  font-weight: 100;
  font-weight: 100;
  letter-spacing: 0.93px;
  color: black;
  }
`
const ButtonTwo = styled.button`
  width: 131px;
  height: 43px;
  margin: 0 0 0 17px;
  background-color: rgba(232, 196, 122, 0.8);
  h2{
    font-family: HelveticaNeue;
  font-size: 13px;
  font-weight: 100;
  font-weight: 100;
  letter-spacing: 0.93px;
  color: black;
  }
`
const FilterBtn = () => {
    return (
<FilterContainer>
<Link to='/restaurants'>
<ButtonOne>
    <h2>
CHEFS
    </h2>
</ButtonOne>
</Link>
<Link to='/restaurants'>
<ButtonTwo>
    <h2>
RESTAURANTS
    </h2>
</ButtonTwo>
</Link>
</FilterContainer>           
    )
}

export default FilterBtn
