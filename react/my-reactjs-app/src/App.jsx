import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'

function App() {

  return (
    <>
      <Header/>
      <Card/>
      <Student name ="Umar" age ={26} isStudent = {true}></Student>
      <Student name ="Abu" age ={26} isStudent = {true}></Student>
      <Student name ="anabiya" age ={6} isStudent = {false}></Student>
      <Student name ="rimpo" age ={16} isStudent = {true}></Student>

    </>
  );
}

export default App