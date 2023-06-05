import React, { useEffect } from 'react';
import '../assets/css/Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

    useEffect(()=>{
        AOS.init({duration: 3000,offset: -800});
        AOS.refresh();
    },[])

    return (
        <section  id='skills' >
            <div data-aos="flip-up" className="skill_main">
                <h1 className="skill_heading">Skills</h1>
                <div className="skill" >
                    <div className="skill_name">HTML</div>
                    <div className="skill_percent">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated pb1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                    </div>
                </div>
                <div className="skill" >
                    <div className="skill_name">CSS</div>
                    <div className="skill_percent">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated pb2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                    </div>
                </div>
                <div className="skill" >
                    <div className="skill_name">JAVASCRIPT</div>
                    <div className="skill_percent">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated pb3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                    </div>
                </div>
                <div className="skill" >
                    <div className="skill_name">REACT</div>
                    <div className="skill_percent">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated pb4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
