import React from "react";
import "./bitmovin.css";
import '../../App.css';
import DemoVideo from "../../assets/WebPlayer-Demo.mp4";
import Skills from "../skills_bitmovin/Skills";

const Bitmovin = () => {
    return (
        <section className="bitmovin section">
            <h2 className="section__title">My Bitmovin Internship</h2>
            <span className="section__subtitle">AI Sign Language Project</span>

            <img src={require("../../assets/Sign-Language.png")} alt="Sign Language" className="sign-language-image" />


            <p className="bitmovin__description">
                During my Bitmovin internship, I developed an <span className="highlight">AI-driven sign language feature</span> that is fully <span className="highlight">integrated into Bitmovin's video player.</span> This project was recognized as the <span className="highlight">best internship project of 2024</span> and involved creating a seamless integration of sign language overlays in video content, significantly enhancing accessibility for <span className="highlight">deaf and hard-of-hearing individuals</span> on Bitmovin's player.
            </p>


            <div className="bitmovin__container container">

                <div className="bitmovin__demo">
                    <h3 className="section__title">Demonstration</h3>
                    <span className="section__subtitle">Showcasing the Integration in Action</span>

                    <div className="bitmovin__video">
                        <video controls>
                            <source src={DemoVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <Skills />

                <div className="bitmovin__reflection">
                    <h3 className="section__title">My Reflection</h3>
                    <span className="section__subtitle">What I Learned</span>
                    <p>
                    Reflecting on my experience, it was <span className="highlight">incredible!</span> Delving into <span className="highlight">research and development</span>, while integrating <span className="highlight">AI-driven solutions</span> across multiple platforms, significantly expanded my understanding of what it means to be a software engineer. <br></br> The wealth of knowledge I gained in such a short period is largely due to the invaluable guidance from my  <span className="highlight">mentors,</span> who offered profound advice on growing as a young professional. I am immensely grateful to everyone at Bitmovin for the <span className="highlight">unforgettable experiences and team events</span>, which were not only enjoyable but deeply enriching. <br></br>This internship allowed me to <span className="highlight">develop personally</span> by connecting with new people from whom I learned and deeply admire, and it also enabled me to <span className="highlight">grow professionally</span> by enhancing my<span className="highlight"> problem-solving skills</span> and deepening my understanding of <span className="highlight">AI and cross-platform development.  </span>                  </p>
                </div>

                <div className="bitmovin__feedback">
                    <a href="path_to_your_feedback_letter.pdf" className="button button--flex">View My Feedback
                        <svg
                            className="button__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                fill="var(--container-color)"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Bitmovin;
