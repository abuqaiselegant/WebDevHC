// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'
// import Card from './Card.jsx'
// import Student from './Student.jsx'
import Button from './Button.jsx';
import List from './List.jsx'

function App() {
  const fruits = [{id:1, name:"apple",calories:953},
                  {id:2, name:"orange",calories:915},
                  {id:3, name:"banana",calories:9511},
                  {id:4, name:"coconut",calories:935},
                  {id:5, name:"pineapple",calories:951}];

  const Vegetables = [{id:1, name:"potato",calories:953},
                  {id:2, name:"onion",calories:95},
                  {id:3, name:"celery",calories:511},
                  {id:4, name:"lokki",calories:315},
                  {id:5, name:"carrots",calories:35},
                  {id:6, name:"pinee",calories:91}];

  const fastFood = [{id:1, name:"lays",calories:953},
                  {id:2, name:"kurkure",calories:95},
                  {id:3, name:"celery",calories:511},
                  {id:4, name:"peanut",calories:315},
                  {id:5, name:"carrots",calories:35},
                  {id:6, name:"plum",calories:91}];

  return (<>
        {/* {fruits.length > 0 ? <List items ={fruits} category ="Fruits"/> : null}
        {Vegetables.length > 0 ? <List items ={Vegetables} category ="Vegetables"/>:null} */
        fruits.length >0 && <List items ={fruits} category ="fruits"/>}
       {/* {Vegetables.length >0 && <List items ={Vegetables} category ="Vegetables"/>} */}
       {/* {fastFood.length >0 && <List items ={fastFood} category ="fastFood"/>} */}
       {<Button/>}
        </>
  );
}

export default App

/* <Header/>
      <Card/>
      <Student name ="Umar" age ={26} isStudent = {true}></Student>
      <List/>
      <fruits/> */