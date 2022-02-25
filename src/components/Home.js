import React, { useEffect, useState } from 'react';
import HomeScreen from './HomeScreen';
import ReferralScreen from './ReferralScreen';
import { getReferralsExceptUserId, getReferralById, getReferralsByUserId } from "../api-service/ReferralService";
import { useStateValue } from '../redux/StateProvider';
import { Cookies } from 'react-cookie';
import {useHistory} from 'react-router-dom';

function Home() {
  const [state, dispatch] = useStateValue();
  const [user, setUser] = useState([]);
  const [referrals, setReferrals] = useState([]);
  const [showUserReferrals, setShowUserReferrals] = useState(false);
  const cookie = new Cookies();
  const history = useHistory();
  useEffect(()=> {
    async function fetchReferrals (id) {
        console.log(showUserReferrals);
        let retrunedReferrals = showUserReferrals ? await getReferralsByUserId(id) : await getReferralsExceptUserId(id);
        setReferrals(retrunedReferrals);
        console.log(retrunedReferrals);
        console.log(referrals);
    }
    if(state.users!=null) {
      setUser(state.users);
      fetchReferrals(state.users.id);
    } else {
      let userDetails = cookie.get('loggedUser');
      if (userDetails==null) {
          history.push("/login");
      } else {
        fetchReferrals(userDetails.id);
        setUser(userDetails);
      }
    }
  }, [showUserReferrals])

  const handleToggleShowUserReferrals = () => {
        let toggle = showUserReferrals;
        console.log("togle clicked");
        setShowUserReferrals(!toggle);
  }

  return <div>
        <HomeScreen user={user} handleToggle={handleToggleShowUserReferrals} showUserReferrals={showUserReferrals}></HomeScreen>
        <ReferralScreen user={user} referrals={referrals}  showUserReferrals={showUserReferrals}/>
    </div>;
}

export default Home;
