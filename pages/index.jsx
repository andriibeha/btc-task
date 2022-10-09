import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../redux/slices/coinSlices';

import CoinList from "../components/CoinList";
import Skeleton from '../components/CoinList/Skeleton';
import HeadLaybel from '../components/HeadLaybel/HeadLaybel';



const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.coins);


    
  useEffect(() => {
    dispatch(fetchCoins())
  }, [fetchCoins]);
  
  const coins = items.map((item) => <CoinList key={item.id} {...item} />);
  const skeleton = [...new Array(20)].map((_, index) => <Skeleton key={index} />);
  
  
  return (
    <>
      <HeadLaybel />
      {status === 'error' ?
        <div>
          <h2>Sorry, somethings goes wrong!</h2>
        </div>
        :
        <>
          {status === 'loading' ? skeleton : coins}
        </>
      }
    </>
  )
};

export default Home;