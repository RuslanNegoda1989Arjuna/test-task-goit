
import styles from './home-page.module.scss';
import Logo from '../../shared/components/Logo/Logo';
import HeaderImage from '../../shared/components/HeaderImage/HeaderImage';

const HomePage = () => {

    return (
        <div className="container">
            <div className='mainBox'>
                <Logo/>
                <HeaderImage/>
                <div className={styles.welcome}>
                    <h1 className={styles.title}>Welcome to Twitt</h1>
                </div>
            
               
            </div>
            
        </div>
    )
}

export default HomePage