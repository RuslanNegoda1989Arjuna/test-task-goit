
import { useCallback, useEffect, useState } from "react";
import { fetchAllUsers, putIsFollow } from "../../tools/Api";
import { Link } from "react-router-dom";
import OneCard from "../../modules/OneCard/OneCard";
import styles from './tweets-page.module.scss'


const TweetsPage = () => {
     const [users, setUsers] = useState([]);
    const [numPerPage, setNumPerPage] = useState(3);
    const [filter, setFilter] = useState('show all');
  
    const handleFilterChange = useCallback((e) => {
      setFilter(e.target.value);
    }, []);


useEffect(() => {
    try {

      const allUsers = fetchAllUsers();

      allUsers.then(data => {

      let filteredData = data;
      if (filter === 'follow') {
        filteredData = data.filter((item) => item.isFollow === false);
      } else if (filter === 'followings') {
        filteredData = data.filter((item) => item.isFollow === true);
        }
        
      setUsers(filteredData);
      });

    } catch (error) {
      console.log(error.message)
  }

}, [filter]);
    

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

    return (
        <div className="container">
            <div className={styles.filterWrapper}>
      <Link className={styles.goback} to='/'>GoBack</Link>
      <div className={styles.filter}>
        <label className={styles.filterLabel} htmlFor="filter-select">Filter:</label>
        <select  className={styles.filterSelect} id="filter-select" value={filter} onChange={handleFilterChange}>
          <option  value="show all">Show All</option>
          <option  value="follow">Follow</option>
          <option  value="followings">Followings</option>
        </select>
    </div>
      
      </div>
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
        </div>
    )
}

export default TweetsPage