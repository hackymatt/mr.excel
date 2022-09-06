import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { InfoContainer, 
        InfoWrapper, 
        InfoRow, 
        Column1, 
        Column2, 
        TextWrapper, 
        TopLine, 
        Heading,  
        ImgWrap, 
        Img,
        Form,
        Input,
        TextField,
        Button,
        Label} from './ContactElements'
import Logo from '../../images/contact.svg'

const Contact = () => {
  
  const form = useRef();

  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_db615re', 'template_7rgbcxo', form.current, 'yK4pOnJl5nL3bmPMR')
      .then((result) => {
        //   console.log(result.text);
          setSent(true);
      }, (error) => {
        //   console.log(error.text);
          setSent(false);
      });

      

  };
  
  return (
    <>
      <InfoContainer lightBg={true} id="contact">
        <InfoWrapper>
            <InfoRow imgStart={false}>
                <Column1>
                    <TextWrapper>
                        <TopLine lightText={true}>MR. EXCEL</TopLine>
                        <Heading lightText={false}>Kontakt</Heading>

                            <Form ref={form} onSubmit={sendEmail}>
                                <Input type="text" name="user_name" placeholder="Imię"/>
                                <Input type="email" name="user_email" placeholder="Email"/>
                                <TextField name="message" placeholder="Wiadomość"/>
                                <Label sent={sent}>Wiadomość wysłana! Dziękujemy!</Label>
                                <Button 
                                    type="submit" 
                                    sent={sent}
                                    value="Wyślij"
                                    />
                            </Form>

                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={Logo} alt="contact"/>                        
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Contact
