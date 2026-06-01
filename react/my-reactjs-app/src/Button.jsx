//click events - an interaction when a user click on a specific element we can respond to click by passing a callback to the onclick eventhandler
function Button(){
    const handleClick = (e) => e.target.textContent = "OUCH";
    return (
        <>
        <button onDoubleClick= {(e) => handleClick(e)}>Click me </button>
        <button onDoubleClick= {(e) => handleClick(e)}>Click me </button>      
        <button onDoubleClick= {(e) => handleClick(e)}>Click me </button>   
        </>
    )
}

export default Button


//e..target.style.display



// function Button(){
//     let count = 0;
//     const handleClick = (name) => {
//         if(count <3){
//             count++;
//             console.log(`${name} you clicked me ${count} time/s`);
//         }
//         else{
//             console.log(`${name} stop clicking me!`);
//         }
//     }
//     // const handleClick2 =(name) => console.log(`${name} stop clicking me`);
//     return(
//         <button onClick={ () => handleClick("Qais") }>Click Me 🦧 </button>
//     )
// }

// export default Button