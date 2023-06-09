import React, { useEffect } from 'react';
import image1 from '../assets/images/my_img.png';
import '../assets/css/Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
    
    var [letterss, setLetters] = React.useState("");
    var [length, setLength] = React.useState(0);
    var [index, setIndex] = React.useState(0);

    useEffect(()=>{
    AOS.init();
    AOS.refresh();
    },[])
    
    useEffect(()=>{
    setTimeout(typing,40);
    })

    const typing = ()=>{
        var words=['My name is LAKSHYA GROVER ' , 'I am a WEB DEVELOPER '];

            setLetters(letterss + words[index][length]);
            setLength(length+1);

            if(length===words[index].length){

                setIndex(index+1);
                if(index===1) setIndex(index=0);
                
                setLength(length=0);
                setLetters(letterss="");
            }
    };


  return (
    <section id='hero-section'>
        <div id="photo">    
            <img id='me' src={image1} data-aos="fade-right" alt='err'></img>
        </div>
        <h1 data-aos="fade-left" id='heading'>{letterss} </h1>
    </section> 
  )
}

export default Hero



