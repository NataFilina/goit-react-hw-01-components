import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList"
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
console.log('data :>> ', data);
console.log('friends :>> ', friends);
console.log('transactions :>> ', transactions);

export const App = () => {
  return (
  <>
    <h2 className="task">Task 1 - Profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 className="task">Task 2 - Statistics</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2 className="task">Task 3 - FriendList</h2>
      <FriendList friends={friends} />
      <h2 className="task">Task 4 - TransactionHistory</h2>
      <TransactionHistory items={transactions} />
  </>
)};    
