import styles from './tweet-card.module.scss'
import { useCallback, useEffect, useState } from "react";
import { fetchAllUsers, putIsFollow } from "../../tools/Api";
import { Link } from "react-router-dom";
import OneCard from "../OneCard/OneCard";



const TweetCards = () => {
    const [users, setUsers] = useState([]);
    const [numPerPage, setNumPerPage] = useState(3);
    const [filter, setFilter] = useState('show all');


useEffect(() => {
    try {

        const allUsers = fetchAllUsers();

        allUsers.then(data => {
        return setUsers(data);
      });
    } catch (error) {
      console.log(error.message)
    }
}, []);
    

const handleClick = useCallback( async (id, isFollow) => {
  const updatedFollowers = isFollow ? parseInt(users.find((card) => card.id === id).followers) - 1 : parseInt(users.find((card) => card.id === id).followers) + 1;
  try {
    await putIsFollow(id, !isFollow, updatedFollowers);
    setUsers((prevState) =>
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
    },[users]);
    
     const handleLoadMore = () => {
    setNumPerPage(numPerPage + 3);
  };

    return (<>
        <Link className={styles.goback} to='/'>GoBack</Link>
        <ul className={styles.list}>              
            {users.slice(0, 0 + numPerPage).map(({ id, tweets, followers, isFollow, avatar }) => {
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
        {numPerPage + 0 < users.length && (
            <div className={styles.btnWrapper}>
                <button className={styles.loadMore} onClick={handleLoadMore}>Load More</button>
            </div>
        
      )}

    </>          
            
    )
}

export default TweetCards