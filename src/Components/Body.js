import React from "react";
import './BodyStyle.css';
import textContent from './Text'; // Import the text content

function body() {
    return (
        <section>
            <img src="/images/cv-bild.jpg" alt="cv-bild" />
            <div className="BodyText">
                <h4>{textContent.header}</h4>
                <p>{textContent.paragraph}</p>
            </div>
        </section>
    );
}

export default body