import './App.css';
// import React, {useState} from 'react';
import LeftSideBar from './LeftSideBar/LeftSideBar.jsx'
import UserInfo from './UserInfo/UserInfo.jsx'
import Navigation from './Navigation/Navigation.jsx'
import UserPage from './UserPage/UserPage.jsx'
import Counter from './Component/Counter';



function App() {
  const user = {
    name: 'Vasya',
    online: true,
    status: 'fell in love',
    avatarSrc: '/raccoon.jpeg',
    address: {
      city: 'Ryazan',
      street: 'MyStreet',
      building: '14',
      toString() {
        return `${this.city}, ${this.street}, ${this.building}`
      },
    },
    age: '13',
    articles: [
      {
        title: 'artricle 1',
        text: 'text1',
      },
      {
        title: 'artricle 2',
        text: 'text2',
      },
      {
        title: 'artricle 3',
        text: 'text3',
      },
      {
        title: 'artricle 4',
        text: 'text4',
      },
    ], 
  }

  // const [ articles, setArticles] = useState([]);
  return (
    <div className="App">
      <LeftSideBar>
        <UserInfo avatarSrc={user.avatarSrc} userAddress={user.address} name = {user.name}/>
        <Navigation/>        
      </LeftSideBar>
      
      <UserPage user={user}>
      <Counter />
      </UserPage>
    </div>
  );
}

export default App;
