import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import Particle from '../Components/Particle';
import PrimaryButton from '../Components/PrimaryButton';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import Location from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
    const phone = <Phone/>
    const email = <Email/>
    const location = <Location/>
    return (
        <MainLayout>
            <Title title={'Contact Me'} span={'Contact Me'} />
            <ContactPageStyled >
                <div className="particle-con">
                    <Particle />
                </div>
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">

                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>

                        <form  className="form">
                            <div className="form-field">
                                <label htmlFor="name"  >Enter your name*</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email"  >Enter your email*</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject"  >Enter your subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter your Message*</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            </div>

                            {/* Create new button component */}
                            <div className="form-field">
                                <PrimaryButton title = {'Send'}/>
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem title={'Phone'} icon={phone} contact1={'3608887980'} />
                        <ContactItem title={'Email'} icon={email} contact1={'yousefali.m44@gmail.com'}/>
                        <ContactItem title={'Address'} icon={location} contact1={'Greater Seattle Area'} />
                    
                </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .particle-con {
        position: absolute;
        z-index: -1;
    }

    .contact-section {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-column-gap: 2rem;
        .right-content {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
    }

    .contact-title{
        h4 {
            color: var(--white-color);
            padding: 1rem 0;
            font-size: 1.8rem; 
        }
    }
    .form {
        width: 100%;
        .form-field {
            margin-top: 2rem;
            position: relative;
            width:100%;
            label {
                position: absolute;
                left:20px;
                top: -19px; 
                display: inline-block;
                background-color: var(--background-dark-color);
                padding: 0 .5rem;
            }
            input {
                border: 1px solid var(--border-color);
                outline: none;
                background: transparent;
                height: 50px;
                padding: 0 15px;
                width: 100%;
                color: inherit;
            }
            textarea {
                background-color: transparent;
                border: 1px solid var(--border-color);
                outline: none;
                color: inherit;
                width: 100%;
                padding: .8rem 1;
            }
        }
    }
`;
export default ContactPage;