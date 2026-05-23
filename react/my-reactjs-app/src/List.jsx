function List(){
    const fruits = [{id:1, name:"apple",calories:953},
                    {id:2, name:"orange",calories:915},
                    {id:3, name:"banana",calories:9511},
                    {id:4, name:"coconut",calories:935},
                    {id:5, name:"pineapple",calories:951}];

    // fruits.sort((a,b)=>a.name.localeCompare(b.name));//alphabetical
    //fruits.sort((a,b)=>b.name.localeCompare(a.name));//revers alpha
    // fruits.sort((a,b)=>a.calories-b.calories); //numeric sort
    // fruits.sort((a,b)=>b.calories-a.calories); //reverse numeric sort

    const lowCalFruits = fruits.filter(fruit => fruit.calories<950);


    const listItems = lowCalFruits.map(lowCalfruit => <li key ={lowCalfruit.id}>{lowCalfruit.name}:&nbsp;{lowCalfruit.calories}</li>)

    return(<ol>{listItems}</ol>)
}   

export default List