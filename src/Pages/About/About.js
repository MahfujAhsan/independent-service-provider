import React from 'react';
import profile from "../../media/images/linkdin-cover.png";
import "./About.css"

const About = () => {
    return (
        <div>
            <div className='about-container'>
                <img src={profile} alt="" />
            </div>
            <div className='dream-container'>
                <h2>"Dream enormously big"</h2>
                <p>I Believe at The Quote <small>"Something You Want Achieve That Your Never Had, Something You Should Do That You Never Did"</small>. So, for Be a Programmer, I Loved to Play With My Abilities to Explore The Web World. Part as Getting Start, I Joined a 'Complete Web Development Course' 3 Month Ago. They Provide Updated & Contemporary Content As Education Materials. (Not Mentioned) "This Course Hosted By a Fantastic Programmer named "Jhankar Mahbub" (Sr. Web Developer, The Nielsen Company, San Francisco, California). It's Almost at Finishing Line. I Just Trying My Best For Grabbing Entire Scenario. After Finished The Journey My Great Achievement Would Be a Daily "Learning Habit". And Yeah, I Wanna Racing With This Giveaway Until I Touching My Goal, Until I'm Reaching My Goal. The Fact Has Become Such That Matter About Passion. Explanation of Passion ActuallY Infinite. So, Until Success, It's Going <small>"To Be Continue..."</small></p>
            </div>
        </div>
    );
};

export default About;