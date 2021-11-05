import React from 'react';
import { MainLayout } from '../styles/Layouts';
import Resume from '../Components/Resume';
import Particle from '../Components/Particle';
import styled from 'styled-components';

function ResumePage() {
    return (
        <MainLayout>
            <ResumePageStyled>
                <div className="particle-con">
                    <Particle />
                </div> 
                <Resume />
            </ResumePageStyled>
        </MainLayout>
    )
}

const ResumePageStyled = styled.section`
    .particle-con {
        position: absolute;
        z-index: -1;
    }
`;

export default ResumePage