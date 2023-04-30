import styles from './tweet-card.module.scss'
import { useEffect, useState } from "react";
import { fetchAllUsers, putIsFollow } from "../../tools/Api";
import { Link } from "react-router-dom";
import OneCard from "../OneCard/OneCard";



const TweetCard = () => {
    const [numFollowers, setNumFollowers] = useState([]);
    const [numPerPage, setNumPerPage] = useState(3);


useEffect(() => {
    try {

        const allUsers = fetchAllUsers();

        allUsers.then(data => {
        return setNumFollowers(data);
      });
    } catch (error) {
      console.log(error.message)
    }
}, []);
    

const handleClick = async (id, isFollow) => {
  const updatedFollowers = isFollow ? parseInt(numFollowers.find((card) => card.id === id).followers) - 1 : parseInt(numFollowers.find((card) => card.id === id).followers) + 1;
  try {
    await putIsFollow(id, !isFollow, updatedFollowers);
    setNumFollowers((prevState) =>
      prevState.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            followers: updatedFollowers.toString(),
            isFollow: !isFollow,
          };
        }
        return card;
      })
    );
  } catch (error) {
    console.log(error);
  }
    };
    
     const handleLoadMore = () => {
    setNumPerPage(numPerPage + 3);
  };

    return (<>
        <Link className={styles.goback} to='/'>GoBack</Link>
        <ul className={styles.list}>              
            {numFollowers.slice(0, 0 + numPerPage).map(({ id, tweets, followers, isFollow, avatar }) => {
              return (<OneCard key={id}
                id={id}
                tweets={tweets}
                followers={followers}
                isFollow={isFollow}
                avatar={avatar}
                handleClick={()=> handleClick(id, isFollow)}
              />)
                })}
        </ul>
        {numPerPage + 0 < numFollowers.length && (
            <div className={styles.btnWrapper}>
                <button className={styles.loadMore} onClick={handleLoadMore}>Load More</button>
            </div>
        
      )}

    </>          
            
    )
}

export default TweetCard