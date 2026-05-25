// Practice exercises
// Create a new file src/components/UserCard.tsx:

// Build a UserCard component with props: name (string), age (number), city (string), 
// isPremium (optional boolean, default false). If isPremium is true, show a "⭐ Premium" label, otherwise show "Free".
// Use UserCard at least 3 times in App.tsx with different data. Pass isPremium on some, skip it on others.
// Deliberately pass a wrong type (like age="hello") and observe the TS error in VS Code, then fix it.
// Create a second component src/components/ProductCard.tsx with props: title (string), price (number),
//  inStock (boolean). Show all three pieces of info. Use it twice in App.tsx.


type UserCardProps = {
    name: string
    age: number
    city: string
    isPremium?: boolean 
}

function UserCard({name,age,city,isPremium=false}: UserCardProps){
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>isPremium: {isPremium ?"⭐ Premium":"Free"}</p>
        </div>
    )
}

export default UserCard