import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import Image from '../assets/img/blick.png'
import City from '../assets/img/WhatsApp Image 2024-02-28 at 15.32 1.png'

const Header = () => {

    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimationCompleted(true);
      }, 3000); 
      return () => clearTimeout(timer);
    }, []);

  return (
    <GeneralDiv>
      <BigDiv>
        <GreenInput>
            <IconsOne>
                <FaPhoneAlt />  
                <ImLocation />
                <IoMail />
            </IconsOne>

            <Frame>
                <p>Заказать уборку</p>
                <p>Услуги</p>
                <p>О нас</p>
                <p>Отзывы</p>
                <p>Контакты</p>
            </Frame>

            <IconsTwo>
                <FaInstagram />
                <IoLogoWhatsapp />
                <FaTelegram />
            </IconsTwo>
        </GreenInput>

        <div>
            <CityContainer animationCompleted={animationCompleted}>
                <CityImageStyled src={City} alt="City" />
            </CityContainer>        
        <h1>Чистый мир – Ваш путь <br /> к идеальной чистоте и комфорту!</h1>
        </div>



        <LoginPage>
            <Input type="text" placeholder="Ваше имя" id="" />
            <Line></Line>
            <Input type="text" placeholder="Ваш номер телефона или WhatsApp" id="" />
            <Line></Line>
            <Button>Заказать уборку</Button>
        </LoginPage>

      </BigDiv>

    </GeneralDiv>
  )
}

export default Header

const GeneralDiv = styled.div`
    background-image: url(${Image});
    width: 100%;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
`

const BigDiv = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const GreenInput = styled.nav`
    width: 1200px;
    height: 40px;
    padding: 19px 30px 19px 30px;
    border-radius: 20px;
    opacity: 0px;
    background: #67BA75;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const IconsOne = styled.div`
    display: flex;
    color: white;
    font-size: 25px;
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const IconsTwo = styled.div`
    display: flex;
    color: white;
    font-size: 25px;
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Frame = styled.div`
    display: flex;
    color: white;
    font-size: 18px;
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Input = styled.input`
    width: 337px;
    height: 23px;
    gap: 0px;
    opacity: 0px;
    border: none;
`
const Line = styled.div`
    width: 337px;
    height: 0.5px;
    background-color: #175783;
`
const Button = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 20px;
    background: #67BA75;
    border: none;
    color: white;
    font-size: 16px;
`

const  LoginPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 180px;
`
const zoomIn = keyframes`
  from {
    transform: scale(6);
  }
  to {
    transform: scale(1.5);
  }
`;

const zoomOut = keyframes`
  from {
    transform: scale(1.5);
  }
  to {
    transform: scale(0.5);
  }
`;

const CityContainer = styled.div`
  animation: ${({ animationCompleted }) => (animationCompleted ? zoomOut : zoomIn)} 4s linear forwards;
`;

const CityImageStyled = styled.img`
    width: 25%;
`;