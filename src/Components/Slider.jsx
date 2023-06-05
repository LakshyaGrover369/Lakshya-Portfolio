import '../assets/css/Slider.css';
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from'../SubComponents/Card';
import Carousel from'../SubComponents/Carousel';
import site1img from '../assets/images/site1img.jpg';
import site2img from '../assets/images/site2img.png';
import site3img from '../assets/images/site3img.png';
import site4img from '../assets/images/site4img.png';

function App() {

  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])

  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen={site1img} title={`Quote Generator`} desc={` A website that shows motivational quotes`} demolink={`https://inspiquote.netlify.app/`}  codelink={`https://github.com/LakshyaGrover369/quote-of-the-day.git`}  />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={site2img}  title={`Simple way of Parking`} desc={` A website that help in managing the parking system of cars`}  demolink={`https://simplewayofparking.netlify.app/`}  codelink={`https://github.com/LakshyaGrover369/parking-lot.git`}   />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={site3img}  title={`Word Counter`} desc={` A website that shows Precise informations of paragraphs and words`}  demolink={`https://wordscounti.netlify.app/`}  codelink={`https://github.com/LakshyaGrover369/word-counter.git`}   />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={site4img}  title={`Quiz Time`} desc={` A website that take quizez and shows your result and overall Performance`} demolink={`https://quizzoi.netlify.app/`}  codelink={`https://github.com/LakshyaGrover369/Quiz_website.git`}  />
      )
    }
    // {
    //   key: uuidv4(),
    //   content: (
    //     <Card imagen={site1img} title={"Quote Generator"}/>
    //   )
    // }
  ];
  return (
    <div className="Projects" id="projectss">
      <h1>Projects</h1>
      <Carousel
        id="Slider_Carousal"
        cards={cards}
        height="500px"
        data-aos="flip-down"
        width="80%"
        offset={2}
        showArrows={false}
      />
    </div> 
  );
}

export default App;
