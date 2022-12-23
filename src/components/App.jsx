import user from 'path/user.json';
import data from 'path/data.json';
import friends from 'path/friends.json';
import transactions from 'path/transactions.json';
import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from './FriendList/FriendList.jsx';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
