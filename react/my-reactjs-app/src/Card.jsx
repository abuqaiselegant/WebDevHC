import profilePic from './assets/111.jpg'
function Card(){
    return(
        <div className="card">
            <img className = "card-image" src={profilePic} alt="profile pic" />
            <h2 className="card-title">AQ</h2>
            <p className = "card-text">i am the next big thing!</p>
        </div>
        )
}

export default Card