import React from "react";

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://api.whatsapp.com/send?phone=40747104998&text=Hello!" className="home__social-icon" target="_blank">
          <i class="uil uil-whatsapp"></i>
        </a>

        <a href="https://linkedin.com/in/jonathanmogovan" className="home__social-icon" target="_blank">
            <i class="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://github.com/jonathan2667" className="home__social-icon" target="_blank">
            <i class="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social;