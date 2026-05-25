type ProductCardProps = {
    title: string
    price: number
    inStock: boolean
}

function ProductCard({title, price, inStock}: ProductCardProps){
    return(
        <div>
            <h3>Title: {title}</h3>
            <p>Price of {title}: {price}</p>
            <p>Available:{inStock ? "Yes" : "No"}</p>
        </div>
    )
}

export default ProductCard