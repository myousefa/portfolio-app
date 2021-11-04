import React from 'react';
import styled from 'styled-components';
import port from '../img/IMG_4072.JPG';
import PrimaryButton from './PrimaryButton';
import Pdf from '../img/MohammedAli_Resume.pdf';



function ImageSection() {
    return(
        <ImageSectionStyled>
            <div className="left-content">
                <img src={port} alt="ting"/>
            </div>

            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>Mohammed Ali</span></h4>
                </div>
                <p className="paragraph">
                    A software engineer based out of Seattle,
                    currently working at Liberty Mutual. My niche
                    within developing is backend but enjoy frontend
                    from time to time. Outside of coding, an activity I
                    enjoy is skiing. I have skied for over 10 years and
                    usually head to the moutain at least a few times a year. I also
                    enjoy cooking/trying new foods.</p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Location</p>
                        <p>Occupation</p>
                    </div>
                    <div className="info">
                        <p>: Mohammed Ali</p>
                        <p>: 20</p>
                        <p>: Kirkland, WA</p>
                        <p>: Software Engineer</p>
                    </div>
                </div>
                <PrimaryButton title = {'Open Resume'} href = {Pdf} target="_blank">
                    
                </PrimaryButton>
                
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    .left-content {
        width: 100%;
        img {
            width: 90%;
            object-fit: cover;
        }
    }

    .right-content {
        z-index: 1;
        h4 {
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }
        .paragraph {
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title {
                padding-right: 1rem; 
                p {
                    font-weight: 600;
                }
            }
            .info-title, .info {
                p {
                    padding: .3rem 0;
                }
            }
        }
    }

`;

export default ImageSection;