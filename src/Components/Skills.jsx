import React from 'react';
import '../assets/css/Skills.css';

const Skills = () => {
    return (
        <section  id='skills' >
            <div className="skill_main">
                <h1 className="skill_heading">Skills</h1>
                <div className="skill" >
                    <div className="skill_name">HTML</div>
                    <div className="skill_percent">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                    </div>
                </div>
                <div className="skill" >
                    <div className="skill_name">CSS</div>
                    <div className="skill_percent">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                    </div>
                </div>
                <div className="skill" >
                    <div className="skill_name">JAVASCRIPT</div>
                    <div className="skill_percent">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                    </div>
                </div>
                <div className="skill" >
                    <div className="skill_name">REACT</div>
                    <div className="skill_percent">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
