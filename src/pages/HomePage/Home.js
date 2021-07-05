import React from 'react';
import styled from 'styled-components';
import {homeObjOne,homeObjtwo,homeObjthree,homeObjfour} from './Data'
import {InfoSection,Pricing} from '../../components'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  
    return (
        <Height>
        
          <InfoSection {...homeObjOne}/> 
          <InfoSection {...homeObjtwo}/>
          <InfoSection {...homeObjthree}/>
          <Pricing />
          <InfoSection {...homeObjfour}/> 
           <Footer />
        </Height>
       
    )
}

const Height=styled.div`
  
  max-height:70vh;
  position:relative;

`;

export default Home
