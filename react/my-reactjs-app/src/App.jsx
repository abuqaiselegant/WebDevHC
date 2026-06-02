// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'
// import Card from './Card.jsx'
// import Student from './Student.jsx'



//  react hook - special function that allows functional components to use react features without writing class components(useState, useEffect, useContext, useReducer, useCallback)
//useState() = A React hook that allows the creation of a stateful variable and a setter funciton to update its value in the virtual dom.


import Button from './Button.jsx';
import List from './List.jsx'
import ProfilePicture from './ProfilePicture.jsx';
import MyComponents from './MyComponents.jsx'

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
       {<Button/>}
       {<ProfilePicture/>}
       {<MyComponents/>}
       {<List items ={fruits} category ="Fruits"/>}
       {<List items ={Vegetables} category ="Vegetables"/>}
       
       {<List items ={fastFood} category ="Fast Food"/>}
        </>
  );
}

export default App

/* <Header/>
      <Card/>
      <Student name ="Umar" age ={26} isStudent = {true}></Student>
      <List/>
      <fruits/> */

  /* {fruits.length > 0 ? <List items ={fruits} category ="Fruits"/> : null}
        {Vegetables.length > 0 ? <List items ={Vegetables} category ="Vegetables"/>:null} */
      //   fruits.length >0 && <List items ={fruits} category ="fruits"/>}