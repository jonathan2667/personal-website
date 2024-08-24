import React from "react";

const Web = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Web Development</h3>

            <div className="skills__box">
                {/* <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">C++</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                    </div>
                </div> */}

                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Gulp</h3>
                        <span className="skills__level">Build Automation Tool</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">TypeScript</h3>
                        <span className="skills__level">UI Scripting Language</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Bitmovin Player SDK</h3>
                        <span className="skills__level">Video Playback Engine</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Web