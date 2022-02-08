import React, { useEffect } from 'react';
import HomeScreen from './HomeScreen';
import ReferralScreen from './ReferralScreen';
import { useStateValue } from '../redux/StateProvider';

function Home() {
  const [state, dispatch] = useStateValue();
  useEffect(()=>{
    console.log(state);
  })
  return <div>
        <HomeScreen></HomeScreen>
        <ReferralScreen/>
    </div>;
}

export default Home;
