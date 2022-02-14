import React, { useEffect, useState } from 'react';
import HomeScreen from './HomeScreen';
import ReferralScreen from './ReferralScreen';
import { useStateValue } from '../redux/StateProvider';

function Home() {
  const [state, dispatch] = useStateValue();
  const [user, setUser] = useState([]);
  useEffect(()=> {
      // async function fetchUserById (id) {
      //     let userDetails = await getUserById();
      //     setUser(userDetails);
      // } 
      // if(state!=null && state.users!=null) {
      //   setUser(state.users);
      // }
      // fetchUserById();
      console.log(state.users);
  }, [])
  return <div>
        <HomeScreen user={state.users}></HomeScreen>
        <ReferralScreen user={state.users}/>
    </div>;
}

export default Home;
