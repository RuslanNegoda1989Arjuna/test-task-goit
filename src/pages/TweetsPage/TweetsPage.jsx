import HeaderImage from "../../shared/components/HeaderImage/HeaderImage"
import Logo from "../../shared/components/Logo/Logo"
import styles from './tweets-page.module.scss'
import Avatar from '../../images/Boy.png';

const TweetsPage = () => {
    return (
        <div className="container">
            <div className="mainBox">
                <Logo />
                <HeaderImage />
                <img className={styles.avatarka} src={Avatar} alt="Avatarka" />
                <p className={styles.tweets}>777 tweets</p>
                <p className={styles.followers}>100,500 follows</p>
                <div className={styles.btnWrapper}>
                    <button className={styles.button}>FOLLOW</button>
                </div>
                
            </div>
           

        </div>
    )
}

export default TweetsPage