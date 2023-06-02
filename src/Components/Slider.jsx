import '../assets/css/Slider.css';
import { v4 as uuidv4 } from "uuid";
import Card from'../SubComponents/Card';
import Carousel from'../SubComponents/Carousel';
import site1img from '../assets/images/site1img.jpg';
import site2img from '../assets/images/site2img.png';
import site3img from '../assets/images/site3img.png';
import site4img from '../assets/images/site4img.png';

function App() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen={site1img} title={`Quote Generator`} desc={` A website that shows motivational quotes`} demolink={`https://statuesque-baklava-361a1d.netlify.app`}  codelink={`https://github.com/LakshyaGrover369/quote-of-the-day.git`}  />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={site2img}  title={`Simple way of Parking`} desc={` A website that help in managing the parking system of cars`}  demolink={`https://delightful-torrone-54dfee.netlify.app`}  codelink={`https://github.com/LakshyaGrover369/parking-lot.git`}   />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={site3img}  title={`Word Counter`} desc={` A website that shows Precise informations of paragraphs and words`}  demolink={`https://coruscating-otter-8e053d.netlify.app/`}  codelink={`https://github.com/LakshyaGrover369/word-counter.git`}   />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={site4img}  title={`Quiz Time`} desc={` A website that take quizez and shows your result and overall Performance`} demolink={`https://curious-semolina-3448ee.netlify.app/`}  codelink={`https://github.com/LakshyaGrover369/Quiz_website.git`}  />
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
        className="Slider_Carousal"
        cards={cards}
        height="500px"
        width="35%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div> 
  );
}

export default App;
