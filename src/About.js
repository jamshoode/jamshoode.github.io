import { motion } from 'framer-motion';
import './scss/About.scss';
import profile from './img/profile.jpg';

function About() {
    return (
        <motion.div className="about" 
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
        >
            <div className="container">
                <div className="about__inner">
                    <div className="leftSide">
                        <h5>Taras Khanchuk</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores assumenda consectetur praesentium nemo, nihil recusandae? Praesentium, quo! Dolores aut quae ex harum beatae, atque in voluptatem fugiat doloremque consequatur quidem!</p>
                    </div>
                    <div className="middleSide">
                        <img src={profile} alt="Profile picture" />
                    </div>
                    <div className="rightSide">
                        <h5>Services</h5>
                        <span>
                            <p>HTML</p>
                            <div></div>
                        </span>
                        <span>
                            <p>SCSS</p>
                            <div></div>
                        </span>
                        <span>
                            <p>JS</p>
                            <div></div>
                        </span>
                        <span>
                            <p>REACT.JS</p>
                            <div></div>
                        </span>
                        <span>
                            <p>PYTHON</p>
                            <div></div>
                        </span>
                    </div>
                </div>
            </div>
            
        </motion.div>
    );
}

export default About;