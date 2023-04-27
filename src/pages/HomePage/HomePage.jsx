import styles from './home-page.module.scss';

const HomePage = () => {

    return (
        <div className="container">
            <div className={styles.mainBox}>
                <div className={styles.image}>
                    <h1 className={styles.title}>Home Page</h1>
                    <p>Hello to Twitter</p>   
                </div>
               
            </div>
            
        </div>
    )
}

export default HomePage