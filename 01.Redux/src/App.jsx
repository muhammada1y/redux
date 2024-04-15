import './App.css'
import Login from './commponents/Login'
import Profile from './commponents/profile'
import UserContextProvider from './context/UserContextProvider'
function App() {

  return (
    <UserContextProvider>
      <h1>hello</h1>
       <Login/>
       <Profile/>
    </UserContextProvider>
  )
}

export default App
