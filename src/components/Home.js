import React, { useEffect, useState } from 'react';
import HomeScreen from './HomeScreen';
import ReferralScreen from './ReferralScreen';
import { getReferralsExceptUserId, getReferralById, getReferralsByUserId } from "../api-service/ReferralService";
import { useStateValue } from '../redux/StateProvider';

function Home() {
  const [state, dispatch] = useStateValue();
  const [user, setUser] = useState([]);
  const [referrals, setReferrals] = useState([]);
  const [showUserReferrals, setShowUserReferrals] = useState(false);
  useEffect(()=> {
    console.log("home came");
    console.log(state);
  })
  useEffect(()=> {
    async function fetchReferrals (id) {
        console.log(showUserReferrals);
        let retrunedReferrals = showUserReferrals ? await getReferralsByUserId(id) : await getReferralsExceptUserId(id);
        setReferrals(retrunedReferrals);
        console.log(retrunedReferrals);
        console.log(referrals);
    }
    fetchReferrals(state.users.id);
  }, [showUserReferrals])

  const handleToggleShowUserReferrals = () => {
        let toggle = showUserReferrals;
        console.log("togle clicked");
        setShowUserReferrals(!toggle);
  }

  return <div>
        <HomeScreen user={state.users} handleToggle={handleToggleShowUserReferrals} showUserReferrals={showUserReferrals}></HomeScreen>
        <ReferralScreen user={state.users} referrals={referrals}  showUserReferrals={showUserReferrals}/>
    </div>;
}

export default Home;
