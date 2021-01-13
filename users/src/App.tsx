import React, {useState} from 'react';
import { getDataPromise } from './getDataPromise';
import { IUser } from './IUser';

const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  getDataPromise((receivedUsers:IUser[]) => setUsers([...users, ...receivedUsers]))(0,1)
  return(
  <div className='App'>  plese open console window </div>
  )
}

export default App;
