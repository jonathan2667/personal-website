import React from "react";
import "./skills_bitmovin.css";
import Web from "./Web";
import Android from "./Android";
import Ai from "./Ai";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Technologies Used</h2>
            <span className="section__subtitle">Implementation Tools</span>

            <div className="skills__container_bitmovin container grid">
                <Web/>
                <Android/>
                <Ai/>

            </div>
        </section>
    )
}

export default Skills