import './App.css';
import './LeftSideBar/LeftSideBar.js'

function App() {
  const user = {
    name: 'Vasya',
    online: true,
    status: 'fell in love',
    avatarSrc: '',
    address: {
      city: 'Ryazan',
      street: 'MyStreet',
      building: '14',
    },
    age: '13',
    articles: [],
  }
  return (
    <div className="App">
      <LeftSideBar>
        <UserInfo avatarSrc={user.avatarSrc} userAddress={user.address}/>
        <Navigation/>
      </LeftSideBar>
      <UserPage user={user}/>
    </div>
  );
}

export default App;
