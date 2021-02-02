import * as React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export interface ModalProps {
  showModal: any;
  setShowModal: any;
  dish?: any;
  setselectedDishId?: any;
  selectedDishId?: any;
}

const Modal: React.FC<ModalProps> = ({
  setShowModal,
  showModal,
  dish,
  setselectedDishId,
  selectedDishId,
}) => {
  console.log(dish);
  const [count, setCount] = useState(0);
  const modalRef: any = useRef();

  console.log(dish);
  
  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalContainer>
            <CloseModalButton
              onClick={() => setShowModal(false)}
            >X
            </CloseModalButton>
            <RestImage>
              <img src={dish.modalImage} alt={dish.alt}></img>
            </RestImage>
            <ModalContent>
              <Icon>
                <img src={dish.icon} alt={dish.alt}></img>
                <h2>{dish.title}</h2>
              </Icon>
              <p>{dish.body}</p>
              <Price price={dish.price}>
                <hr></hr>
              </Price>
              <ContentOptionsOne>
                <h1>Choose a side</h1>
                <Inputs>
                  <input type="checkbox" id="bread"></input>
                  <label htmlFor="bread">White Bread</label>
                </Inputs>
                <Inputs>
                  <input type="checkbox" id="rice"></input>
                  <label htmlFor="rice">Sticky Rice</label>
                </Inputs>
              </ContentOptionsOne>
              <ContentOptionsTwo>
                <h1>Changes</h1>
                <Inputs>
                  <input type="checkbox" id="peanuts"></input>
                  <label htmlFor="peanuts">Without Peanuts</label>
                </Inputs>
                <Inputs>
                  <input type="checkbox" id="spicy"></input>
                  <label htmlFor="spicy">Less Spicy</label>
                </Inputs>
              </ContentOptionsTwo>
              <QuantityContainer>
                <h1>Quantity</h1>
                <Quantity>
                  {count}
                  <button onClick={() => setCount(count + 1)}>+</button>
                </Quantity>
              </QuantityContainer>
              <AddButton>
                <h1>ADD TO BAG</h1>
              </AddButton>
            </ModalContent>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;

const Background = styled.div`
    z-index: 999;
    width: 100vw;
    height: 100vw;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
    top: 0;
    @media only screen and (max-width: 550px) {
    width: 100%;
    width: 100vw;
    height: 100%;

  }
`;
const ModalContainer = styled.div`
  background-color: white;
  top: -40vh;
  /* width: 608px; */
  height: 1000px;
  /* margin: 1vh; */
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 10;

  @media only screen and (max-width: 550px) {
    width: 100%;
    top: 10vh;
    width: 100vw;
    height: 100%;

  }
`;

const RestImage = styled.div`
  img {
    width: 608px;
    height: 292px;
    object-fit: contain;
  }

  @media only screen and (max-width: 550px) {
    img {
        width: 100%;
  height: 254px;
  object-fit: contain;
    }
  }
`;

const ModalContent = styled.div<{ readonly price?: number; isRest?: string }>`
  text-align: center;
  font-family: HelveticaNeue;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: ${(p) => (p.isRest ? "360px" : "auto")};

  h2 {
    font-family: HelveticaNeue;
    font-weight: 100;
    margin-bottom: 2vh;
    font-size: 2rem;
    letter-spacing: 2.67px;
  }

  p {
    font-size: 1.563;
    font-weight: 100;
    letter-spacing: 1.67px;
    padding-bottom: 20px;
    width: 65%;
    margin-top: 2vh;
    margin: 0 auto;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 550px) {
    width: ${(p) => (p.isRest ? "160px" : "auto")};

    h2 {
      font-size: ${(p) => (p.isRest ? "1.3rem" : "1.8rem")};
    }

    p {
      font-size: ${(p) => (p.isRest ? "0.9rem" : "1rem")};
    }
  }
`;

const ContentOptionsOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 2.5vh;
  h1 {
    font-family: HelveticaNeue;
    width: 180px;
    margin: 0 auto;
    font-size: 20.4px;
    font-weight: 100;
    letter-spacing: 1.46px;
    margin-bottom: 2.5vh;
    padding-bottom: 10px;
    border-bottom: solid 1.8px rgba(222, 146, 0, 0.9);
  }
`;
const ContentOptionsTwo = styled.div`
  margin-top: 2.5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h1 {
    font-family: HelveticaNeue;
    width: 180px;
    margin: 0 auto;
    padding-bottom: 10px;
    border-bottom: solid 1.8px rgba(222, 146, 0, 0.9);
    font-size: 20.4px;
    font-weight: 100;
    letter-spacing: 1.46px;
    margin-bottom: 2.5vh;
  }
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 15px;

  font-family: HelveticaNeue;
  font-size: 18px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;
const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 180px;
  margin: 0 auto;
  margin-top: 4vh;

  h1 {
    font-family: HelveticaNeue;
    font-size: 20.4px;
    font-weight: 100;
    letter-spacing: 1.46px;
    margin-bottom: 2.5vh;
    padding-bottom: 10px;
    border-bottom: solid 1.8px rgba(222, 146, 0, 0.9);
  }
`;

const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  button {
    width: 18px;
    height: 18px;
    object-fit: contain;
    margin-left: 20px;
    background-color: transparent;
    border: none;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  img {
    width: 39px;
    margin-right: 20px;
    height: 30px;
    object-fit: contain;
    justify-content: center;
    align-items: center;
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
    margin-bottom: 4.5vh;
    margin-top: 2vh;
  }

  hr:after {
    background-color: white;
    content: "₪${(p) => p.price}";
    font-size: 1.2rem;
    padding: 0 4px;
    position: relative;
    top: -13px;
  }
`;

const AddButton = styled.button`
  width: 206px;
  height: 53px;
  margin: 50px 65px 0 65px;
  padding: 0 0px 0 0;
  border-radius: 2.1px;
  background-color: black;
  margin: 0 auto;
  margin-top: 3vh;

  h1 {
    font-family: HelveticaNeue;
    font-size: 18.9px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.08px;
    text-align: center;
    color: white;
  }
`;

const CloseModalButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: -30px;
  font-size: 2rem;
  color: white;
  padding: 0;
  z-index: 10;
`;
