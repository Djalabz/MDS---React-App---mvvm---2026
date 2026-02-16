import { useState } from "react"

function Form() {
    const [inputValue, setInputValue] = useState("")

    return ( 
        <>
            <h2>En React les inputs sont controllés - ils sont liés à un state</h2>
            <input 
                type="text" 
                placeholder="Ici votre pseudo"
                name="username"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />



        </> 
    );
}

export default Form 