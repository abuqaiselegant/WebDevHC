function ProfilePicture(){
    const imageUrl = './src/assets/111.jpg';
    const handleClick = ()=> console.log("OUCH");
    return ( <img onClick ={handleClick} src = {imageUrl}></img>)
}

export default ProfilePicture