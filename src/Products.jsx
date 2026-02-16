import { useState, useEffect } from "react"

function Products() {
    // 1- State, données etc 
    const [products, setProducts] = useState(null)
    
    // useEffect pour le call API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(data => data.json())
        .then(products => {
            setProducts(products)
        })
        .catch(err => console.log(err))
    }, []) 

    // 2 - Les opérations (focntions / méthodes)
    

    // 3 - La vue
    return (  

        <>
            <h1>Page de produit </h1>

            {(products != null) && products.map(product => 
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <img src={product.image}  />
                    <h3>{product.price}</h3>
                </div>
            )}
            
        </>
    )
}

export default Products ;