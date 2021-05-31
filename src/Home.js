import './scss/Home.scss';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div className="home" 
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
        >
            <div className="container">
                <div className="home__inner">
                    <h1>Hello World!</h1>
                    <p>My name is Taras. And i'm a beginer front-end developer.</p>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;