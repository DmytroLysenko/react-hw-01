import React from "react";

import Divider from "./Divider/Divider";

import Profile from "./Profile/Profile";
import userData from "./usersData.json";

import Statistics from "./Statistics/Statistics";
import statisticsData from "./statisticsData.json";

import FriendList from "./FriendList/FriendList";
import friends from "./friends.json";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./transaction.json";

function App() {
  return (
    <div className="App">
      <Divider />
      <Profile {...userData} />
      <Divider />
      <Statistics title="Upload stats" stats={statisticsData} />
      <Divider />
      <FriendList friends={friends} />
      <Divider />
      <TransactionHistory items={transactions} />
      <Divider />
    </div>
  );
}

export default App;
