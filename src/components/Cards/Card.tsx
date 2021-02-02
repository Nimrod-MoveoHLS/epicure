import * as React from "react";
import styled from "styled-components";

export interface CardProps {
  id?:number;
  title: string;
  img: string;
  alt?: string;
  body?: string;
  icon?: string;
  price?: number;
  restaraunt?: string;
  isDish?: string;
  isRest?: string;
  isSignatureDish?:string
  isPopular?:boolean
  cardData? : any
  onClickId?:any
  onClickModal?:any
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  img,
  body,
  icon,
  price,
  alt,
  restaraunt,
  isDish,
  isRest,
  isPopular,
  isSignatureDish,
  onClickId,
  onClickModal
}) => {


  const handleClicks = (id:any) => {
    onClickId(id);
  onClickModal();
  }

  
  return (
    <>
  
    <CardContainer className="card-container" isRest={isRest}>
      {restaraunt && <CardHeader>
        <h1>{restaraunt}</h1>
        </CardHeader>}
      {isRest && (
        <RestImage>
          <img src={img} alt={alt}></img>
        </RestImage>
      )}
      {isDish && (
        <DishImage className="dish-image" onClick={() => handleClicks(id)}>
          <img src={img} alt={alt}></img>
        </DishImage>
      )}
      {isSignatureDish && (
        <SignatureDish >
          <img src={img} alt={alt}></img>
        </SignatureDish>
      )}
      {isPopular && (
        <PopularRestImage>
          <img src={img} alt={alt}></img>
        </PopularRestImage>
      )}
      <CardContent className="card-content" price={price} isRest={isRest}> 
        <h2>{title}</h2>
        <p>{body}</p>
        {icon && (
          <Icon className="icon">
            <img src={icon} alt={alt}></img>
          </Icon>
        )}
        {price && (
          <Price price={price}>
            <hr></hr>
          </Price>
        )}
      </CardContent>
    </CardContainer>
    </>
  );
};

export default Card;

const CardContainer = styled.div<{readonly isRest?:string}>`
  width: 360px;
  overflow: hidden;
  margin: 1vh;

  @media only screen and (max-width: 550px) {
    width:${p => p.isRest ? '160px' : '260px'};
    overflow: visible;
  }
`;

const CardHeader = styled.div`
h1{
  font-size:1.5rem;
  text-align: center;
  font-family: HelveticaNeue;
  font-weight: 100;
  margin-top:3vh;
  margin-bottom:2vh;
}

@media only screen and(max-width:550px) {
  h1{
    font-size: 0.8rem;
  }
}
`
const PopularRestImage = styled.div`
  img {
    width: 360px;
    height: 224px;
  }

  @media only screen and (max-width: 550px) {
    img {
      width: 206px;
      height: 224px;
      object-fit: cover;
    }
  }
`;

const RestImage = styled.div`
  img {
    width: 360px;
  height: 212.2px;
  object-fit: cover;

  }

  @media only screen and (max-width: 550px) {
    img {
      width: 162px;
  height: 124px;
      object-fit: cover;
    }
  }
`;
const DishImage = styled.div`
  img {
    width: 360px;
  height: 212.2px;
  object-fit: cover;

  }

  @media only screen and (max-width: 550px) {
    img {
      width: 157px;
  height: 100px;
      object-fit: cover;
    }
  }
`;
const SignatureDish = styled.div`
  img {
    width: 360px;
    height: 290px;
  }

  @media only screen and (max-width: 550px) {
    img {
      width: 259.2px;
      height: 208.8px;
      object-fit: cover;
    }
  }
`;


const CardContent = styled.div<{readonly price?:number; isRest?:string}>`
  background-color: #f9f4ea;
  text-align: center;
  font-family: HelveticaNeue;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height:${p => p.price ? '250px' : '100px'};
  width:${p => p.isRest ? '360px' : 'auto'};

  h2 {
    font-family: HelveticaNeue;
  font-weight: 100;
    margin-bottom: 2vh;
    padding-top: 20px;
    font-size: 2rem;
    letter-spacing: 2.67px;
  }

  p {
    font-size: 1.563;
    font-weight: 100;
    letter-spacing: 1.67px;
    padding-bottom: 20px;
    width: 80%;
    margin-top: 2vh;
    margin: 0 auto;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 550px) {
    width:${p => p.isRest ? '160px' : 'auto'};

    h2 {
      font-size:${p => p.isRest ? '1.3rem' : '1.8rem'};
    }

    p {
      font-size:${p => p.isRest ? '0.9rem' : '1rem'};
    }
  }
`;
const CardContentDish = styled.div<{readonly price?:number; isRest?:string}>`
  background-color: #f9f4ea;
  text-align: center;
  font-family: HelveticaNeue;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height:${p => p.price ? '250px' : '100px'};
  width:${p => p.isRest ? '360px' : 'auto'};

  h2 {
    font-family: HelveticaNeue;
  font-weight: 100;
    margin-bottom: 2vh;
    padding-top: 20px;
    font-size: 2rem;
    letter-spacing: 2.67px;
  }

  p {
    font-size: 1.563;
    font-weight: 100;
    letter-spacing: 1.67px;
    padding-bottom: 20px;
    width: 80%;
    margin-top: 2vh;
    margin: 0 auto;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 550px) {
    width:${p => p.isRest ? '160px' : 'auto'};

    h2 {
      font-size:${p => p.isRest ? '1.3rem' : '1.8rem'};
    }

    p {
      font-size:${p => p.isRest ? '0.9rem' : '1rem'};
    }
  }
`;

const Icon = styled.div`
  img {
    width: 39px;
    height: 30px;
    object-fit: contain;
    margin: 0 auto;
    margin-bottom: 3vh;
  }
`;

const Price = styled.div<{ price: number }>`
  hr {
    border: none;
    font-weight: 100;
    font-family: HelveticaNeue;
    margin: 0 auto;
    width: 50%;
    border-top: 1px solid black;
    overflow: visible;
    text-align: center;
    height: 5px;
    margin-bottom: 2vh;
  }

  hr:after {
    background-color: #f9f4ea;
    content: "₪${(p) => p.price}";
    font-size: 1.2rem;
    padding: 0 4px;
    position: relative;
    top: -13px;
  }
  /* width: 100%;
  font-weight: 100;
  @media only screen and (max-width: 550px) {
    font-size: 16px;
  } */
`;
