import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

export interface ModalProps {
  showModal: any;
  setShowModal: any;
  dish: any;
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
    
  const [count, setCount] = useState(0);
  const modalRef: any = useRef();

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };


  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalContainer>
            <CloseModalButton onClick={() => setShowModal(false)}>
            <img src="../images/x.svg" alt="x-icon"></img>
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
              </ModalContent>

              <Price  price={dish.price}>
                <hr ></hr>
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
                  <img src="../images/plus.svg" alt="plus-icon" onClick={() => setCount(count + 1)}></img>
                </Quantity>
              </QuantityContainer>
              <AddButton>
                <h1>ADD TO BAG</h1>
              </AddButton>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;

const Background = styled.div`
  z-index: 999;
  width: 100%;
  height: 100vw;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  /* top: 0; */
  @media only screen and (max-width: 650px) {
    width: 100%;
    height: 100%;
  }
`;
const ModalContainer = styled.div`
  background-color: white;
  height: 1098px;
  width: 608px;
  /* justify-content: center ; */
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 10;

  @media only screen and (max-width: 650px) {
    width: 100%;
margin-top:45px;
    width: 100%;
    position: absolute;
    z-index: 100;
  }
`;

const RestImage = styled.div`
  img {
    width: 608px;
    height: 292px;
    object-fit: contain;
  }

  @media only screen and (max-width: 650px) {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const ModalContent = styled.div<{ readonly price?: number; isRest?: string }>`
  text-align: center;
  font-family: HelveticaNeue;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: ${(p) => (p.isRest ? "360px" : "auto")};
  margin-top:27px;


  h2 {
    font-family: HelveticaNeue;
    font-weight: 100;
    font-size: 2rem;
    letter-spacing: 2.67px;
  }

  p {
    font-size: 1.563;
    font-weight: 100;
    letter-spacing: 1.67px;
    margin-bottom:14.5px;
    width: 50%;
    text-align: center;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 650px) {
    width: ${(p) => (p.isRest ? "160px" : "auto")};

    h2 {
    }

    p {

  font-family: HelveticaNeue;
  font-size: 16.8px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.12px;
  text-align: center;
  }
}
`;
const Icon = styled.div`
  display: flex;
  margin-right:21.1px;
  margin-bottom: 14px;

  img {
    width: 39px;
    height: 30px;
    object-fit: contain;
    margin-right:21.1px;
    /* margin-left:141px; */

  }
`;
const ContentOptionsOne = styled.div`
margin-top:42.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: center;
  /* margin-bottom: 2.5vh; */
  h1 {
    margin-bottom:33px;
    font-family: HelveticaNeue;
margin:0 auto;
margin-bottom:33px;

    /* margin: 0 auto; */
    font-size: 20.4px;
    font-weight: 100;
    letter-spacing: 1.46px;
        padding-bottom: 4.8px;
    /* margin-bottom: 2.5vh; */
    /* padding-bottom: 10px; */
    border-bottom: solid 1.8px rgba(222, 146, 0, 0.9);
  }
`;
const ContentOptionsTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top:19px;
  align-items: start;


  h1 {
    font-family: HelveticaNeue;
    margin:0 auto;
    margin-bottom:27px;
    border-bottom: solid 1.8px rgba(222, 146, 0, 0.9);
    padding-bottom: 4.8px;
    font-size: 20.4px;
    font-weight: 100;
    letter-spacing: 1.46px;
    /* margin-bottom: 2.5vh; */
  }
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom:28px;
  font-family: HelveticaNeue;
  font-size: 18px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-left:195px;
  label{
    margin-top:7px;
  }
  input{
    margin-right:20px;
    width: 28px;
  height: 28px;
  }
`;
const QuantityContainer = styled.div`
margin-top:42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: auto;
  /* margin: 0 auto; */
  /* margin-top: 4vh; */

  h1 {
    font-family: HelveticaNeue;
    margin:0 auto;

    font-size: 20.4px;
    font-weight: 100;
    letter-spacing: 1.46px;
    border-bottom: solid 1.8px rgba(222, 146, 0, 0.9);
  }
`;

const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top:23.6px;
  margin-left: 39.6px;
margin-bottom:50px;
  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    margin-left: 39.6px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;


const Price = styled.div<{ price: number }>`
margin-top:14.5px;
  hr {
    border: none;
    font-weight: 100;
    font-family: HelveticaNeue;
    margin: 0 auto;
    width: 184px;
    border-top: 1px solid black;
    overflow: visible;
    text-align: center;
    height: 5px;
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
  /* margin: 50px 65px 0 65px; */
  border-radius: 2.1px;
  background-color: black;
  /* margin: 0 auto; */
  /* margin-top: 3vh; */
  /* margin-bottom: 3vh; */
  cursor: pointer;
  margin-left:208px;
  h1 {
    font-family: HelveticaNeue;
    font-size: 18.9px;
    letter-spacing: 1.08px;
    text-align: center;
    color: white;
  }
`;

const CloseModalButton = styled.div`

img{
  width: 18px;
  height: 18px;
}
  cursor: pointer;
  position: absolute;
  top: -35px;
  font-size: 2rem;
  font-weight: 200;
  color: white;
  padding: 0;
  z-index: 10;
`;
