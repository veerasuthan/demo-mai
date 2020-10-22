import React from 'react';
import { Link } from 'react-router-dom';

function Intro() {
    return (
        <div class="content">
            <h1 className="heading-l1 txt-center">Explore and Discover New Beers</h1>
            <div className="middle flex">
                <div className="left-middle flex-item"></div>
                <div className="right-middle flex-item">
                    <h2 className="heading-l2">Find the Beer you'll love</h2>
                    <p>
                        We Combine our beer expertise with your taste preference to<br />
                        suggest the best beer for you
                    </p>
                    <Link to="/questions" className="nav-button right primary">
                        Get Started
                    </Link>
                </div>
                <img class="beer-glass" src={require('../assets/beer.png')} />
            </div>
            <div className="footer">
                <div style={{margin: "20px"}}>
                    Thanks for taking the time with us. Please give us your feedback to improve!
                </div>
                <div style={{margin: "20px"}}>
                    <Link to="/questions" className="nav-button right tri">
                        Give Us Feedback
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Intro;