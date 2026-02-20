import { useState, useEffect } from "react"

// TODO : 
// - Lorsque l'on clique sur un item cela nous emmène sur une page de type produit individuel
// exemple de path dans le routeur - products/:id (vous pouvez recup in id dans les params useParams)
// - Pouvoir ajouter un produit à un panier depuis la page individuelle
// + Adapter les composants Tailwind


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

    // 2 - Les opérations (fonctions / méthodes)
    

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