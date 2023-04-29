
import styles from './home-page.module.scss';
import Logo from '../../shared/components/Logo/Logo';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container">
            <div className='mainBox'>
                <Logo />
                <div className={styles.background}>
                    
                <div className={styles.welcome}>
                    <h1 className={styles.title}>Welcome to Twitt</h1>
                    <Link className={styles.tweetLink} to='/tweets'>
                        <button className={styles.button}>View Tweets</button>
                    </Link>
                </div>   
                </div>
                        
            </div>            
         </div>
    )
}

export default HomePage;
