function List(props){
    const itemList = props.items;
    const category = props.category;

    // fruits.sort((a,b)=>a.name.localeCompare(b.name));//alphabetical
    //fruits.sort((a,b)=>b.name.localeCompare(a.name));//revers alpha
    // fruits.sort((a,b)=>a.calories-b.calories); //numeric sort
    // fruits.sort((a,b)=>b.calories-a.calories); //reverse numeric sort

    // const lowCalFruits = fruits.filter(fruit => fruit.calories<950);
    //const highCalFruits = fruits.filter(fruit => fruit.calories>950);

    //const listItems = fruits.map(fruit => <li key = {fruti})
    // const listItems = lowCalFruits.map(lowCalfruit => <li key ={lowCalfruit.id}>{lowCalfruit.name}:&nbsp;{lowCalfruit.calories}</li>)
    //const listItems = highCalFruits.map(highCalfruit => <li key ={highCalfruit.id}>{highCalfruit.name}:&nbsp;{highCalfruit.calories}</li>)
    const listItems = itemList.map(item => <li key = {item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);
    return(<>
                <h3 className = "list-category">{category}</h3>
                <ol className = "list-items">{listItems}</ol>
           </>);
}   

List.defaultProps ={
    category: "Category",
    items :[]
}

export default List