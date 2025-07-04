import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Experience
                    </div>

                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor’s degree - Computer Science</h3>
                                <span className="qualification__subtitle">Cluj, Romania | Babes-Bolyai University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">High-School</h3>
                                <span className="qualification__subtitle">Bistrita, Romania | Liviu Rebreanu National College</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2023
                                </div>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Middle School</h3>
                                <span className="qualification__subtitle">Montreal, Canada | George-Vanier High School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}

                        {/* <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2018
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineer Intern – Citadel Securities</h3>
                                <span className="qualification__subtitle">London, United Kingdom</span>
                                <span className="qualification__description">Options Market Making</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 07/2025 – 10/2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Quantitative Trading & Technology Discovery Day Participant</h3>
                                <span className="qualification__subtitle">Dublin, Ireland | Susquehanna International Group (SIG)</span>
                                <span className="qualification__description">Discovery Day Intern. Quantitative Trading, Game Theory, and Trading Strategy Workshops</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 04/2025
                                </div>
                            </div>
                        </div>
                        
                        <div className="qualification__data">
                            <div>
                            <h3 className="qualification__title">
                                <a href="https://jonathanmogovan.com/bitmovin" target="_blank" rel="noopener noreferrer"  className="unstyled-link">
                                    Software Engineer Intern - Bitmovin
                                </a>
                            </h3>
                                <span className="qualification__subtitle">Vienna, Austria</span>
                                <span className="qualification__description">AI Sign Language Research, Integration, NLP, Patent Application in Progress</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 07/2024 - 08/2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Assistant Manager</h3>
                                <span className="qualification__subtitle">Ireland | Omega Tiles & Floors</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 06/2022 - 09/2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Python Automation Developer</h3>
                                <span className="qualification__subtitle">Fiverr Freelancer</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 01/2021 - 06/2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification