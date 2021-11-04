import React from 'react';
import styled from 'styled-components';
import {MainLayout} from '../styles/Layouts'
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import Particle from '../Components/Particle';

function AboutPage() {
    return (
       <MainLayout>
           <AboutStyled>
                <div className="particle-con">
                    <Particle />
                </div>
               <Title title = {'About Me'} span = {'About Me'}/>
               <ImageSection/>
           </AboutStyled>
       </MainLayout>
    )
    
}

const AboutStyled = styled.section`
        .particle-con {
            position: absolute;
            z-index: -1;
        }
`;

export default AboutPage;