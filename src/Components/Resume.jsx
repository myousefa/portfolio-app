import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import { InnerLayout } from '../styles/Layouts';
import SmallTitle from './SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';
import PrimaryButton from '../Components/PrimaryButton';
import Pdf from '../img/MohammedAli_Resume.pdf';

function Resume() {
    const briefcase = <BusinessCenterIcon/>
    const school = <SchoolIcon/>
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'} />
            
            <div className="preview-resume">
                <PrimaryButton title = {'Open Resume'} href = {Pdf} target="_blank"/>
            </div>
            
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon = {briefcase} title={'Working Experience'} /> 
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year = {'Sept 2021 - Current'}
                        title = {'Software Engineer'}
                        subTitle = {'Liberty Mutual Insurance'}
                        text = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem asperiores facilis aliquam, reiciendis rerum, itaque repudiandae maxime possimus laborum praesentium. Ipsum sapiente illo aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptatem."}/>
                    <ResumeItem 
                        year = {'June 2021 - Aug 2021'}
                        title = {'Software Engineer Intern'}
                        subTitle = {'Mphasis'}
                        text = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem asperiores facilis aliquam, reiciendis rerum, itaque repudiandae maxime possimus laborum praesentium. Ipsum sapiente illo aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptatem."}/>
                    <ResumeItem 
                        year = {'July 2019 - Sept 2019'}
                        title = {'Test Associate'}
                        subTitle = {'Lionbridge Technologies'}
                        text = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem asperiores facilis aliquam, reiciendis rerum, itaque repudiandae maxime possimus laborum praesentium. Ipsum sapiente illo aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptatem."}/>
                </div>

                <div className="small-title">
                    <SmallTitle icon = {school} title = {"Education"} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year = {'Sept 2021 - Current'}
                        title = {'Software Engineer'}
                        subTitle = {'Liberty Mutual Insurance'}
                        text = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem asperiores facilis aliquam, reiciendis rerum, itaque repudiandae maxime possimus laborum praesentium. Ipsum sapiente illo aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptatem."}/>
                    <ResumeItem 
                        year = {'June 2021 - Aug 2021'}
                        title = {'Software Engineer Intern'}
                        subTitle = {'Mphasis'}
                        text = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem asperiores facilis aliquam, reiciendis rerum, itaque repudiandae maxime possimus laborum praesentium. Ipsum sapiente illo aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptatem."}/>
                    <ResumeItem 
                        year = {'July 2019 - Sept 2019'}
                        title = {'Test Associate'}
                        subTitle = {'Lionbridge Technologies'}
                        text = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem asperiores facilis aliquam, reiciendis rerum, itaque repudiandae maxime possimus laborum praesentium. Ipsum sapiente illo aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptatem."}/>
                </div>
            </InnerLayout>
        </ResumeStyled>
    );
    
}

const ResumeStyled = styled.section`
    .preview-resume {
        padding-top: 2rem;  
    }
    .small-title {
        padding-bottom: 3rem;
    }
    .resume-content {
        border-left: 2px solid var(--border-color);
        
    }
`;

export default Resume;