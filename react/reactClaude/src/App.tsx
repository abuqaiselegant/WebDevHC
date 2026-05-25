import Header from './Header'
import Footer from './Footer'
import UserCard from './UserCard'

function App(){
  return (
    <>
      <div>
        <h1>Hello</h1>
      </div>
      <Header/>
      <UserCard name="Qais" age ={26} city="london" isPremium = {true} />
      <UserCard name="s khan" age ={24} city="london" isPremium = {false} />
      <UserCard name="m ameer" age ={27} city="london" isPremium = {false} />
      <Footer/>

    </>
    
  )
}

export default App