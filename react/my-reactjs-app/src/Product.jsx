import { useState } from 'react'

type Product = {
  id: number
  name: string
  price: number
  discount?: number  // optional
}

const allProducts: Product[] = [
  { id: 1, name: "Headphones", price: 49.99, discount: 10 },
  { id: 2, name: "Keyboard", price: 29.99 },
  { id: 3, name: "Mouse", price: 19.99, discount: 5 },
]

function ProductList() {
  const [products, setProducts] = useState<Product[]>(allProducts)

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>£{product.price}</p>
          <p>Discount: {product.discount ?? "No discount"}</p>
        </div>
      ))}
    </div>
  )
}