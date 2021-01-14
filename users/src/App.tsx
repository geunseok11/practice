import React, {useState, useEffect} from 'react';
import { getDataPromise } from './getDataPromise';
import { IUser } from './IUser';
import {Card} from './Card';

const App: React.FC = () => {
  const limit = 1
  const [skip, setSkip] = useState(0)
  const [users, setUsers] = useState<IUser[]>([])
  const onClick = () => {
    getDataPromise((receivedUsers:IUser[]) => {
      setSkip(skip + limit)
      setUsers([...users, ...receivedUsers])})(skip,limit)
    }
  useEffect(onClick,[])
  return(
  <div className='App'> {users.map((user:IUser,key:number) => (<Card click={onClick} user={user} key={key.toString()}/>))}
  <p>{JSON.stringify(users)}</p>
  </div>
 )
}

export default App;
