
import React, { useState, useEffect } from 'react';
import {Box,Image,Text,Input} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import header from '../assets/header.jpg'
import Find from './Find';


 // Assume you have some basic styles in App.css

export default function Navbar(){
  const [bgColor, setBgColor] = useState('transparent');
  const [color, setColor] = useState('white');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Change background color based on scroll position
      if (scrollTop > 1) {
        setBgColor('black');
        setColor('white')
      } else {
        setBgColor('transparent');
      
      }

      // Make div sticky based on scroll position
      if (scrollTop > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
     <Box zIndex={1000}   display={{base:'block',md:'flex'}} justifyContent={'space-between'}  h={'4.5rem'} style={{position:"sticky",top:"0px"}} bg={bgColor} w='100%' fontWeight={'700'} fontSize={'1.5rem'} p={4} color={color}><Box textDecoration={'underline 4px'} mx='12%' cursor={'pointer'}><h1><span style={{color:'green'}}>N</span>iva<span style={{color:'green'}}>W</span>eater</h1></Box>
     <Box textDecoration={'none'} mx='12%' gap={'5'} fontSize={'20px'} fontWeight={'600'} display={'flex'}>
        <Link to={'/'}><Text>Home</Text></Link>
        <Link to={'/contectus'}><Text>ContectUs</Text></Link>
        <Link to={'/privacy'}><Text>PrivacyPolicy</Text></Link>
        
     </Box>
     </Box>

     <Box display={'flex'} justifyContent={'center'} alignItems={'center'} color={'wheat'} mt='-4.5rem' w={'98.7vw'}  height={'100vh'} bgImg={header} style={{backgroundSize:'cover',backgroundBlendMode:'multiply',backgroundAttachment:'unset'}}>
       <Find/>
    </Box>
  

   
   
     </>
     

  );
};

