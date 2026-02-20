// TODO BASIQUE en REACT 

// ON a un input, un bouton de soulission et en dessous une zone d'affichage des todos
// On doit pouvoir ajouter une todo en cliiquant sur le bouton de soumission 
// On doit pouvoir supprimer une todo et aussi checker une todo (aka la todo est faite)

// Import des différents éléments (useState, des fichiers css etc)
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'

// Composant fonctionnel de Todo 
function Todo() {
    const [inputValue, setInputValue] = useState("")
    const [todos, setTodos] = useState([])

    function handleAddTodo() {
        // On vérifie que l'input ne soit pas vide 
        if (inputValue != "") {
            // On crée un objet pour notre todo
            let newTodo = {
                id: uuidv4(),
                check: false, 
                content: inputValue
            }
            // Puis on l'ajoute à notre tableau de todos en faisant une copie au préalable
            setTodos([ ...todos, newTodo ])
        }
    }

    function handleCheck(id) {
        // Avec map on vient créer un nouveau tableau de todos avec pour celle qui possède le meme id 
        // changer la valeur de check -> Ici avec un if... else sous forme d'opérateur ternaire
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, check: !todo.check } : todo))
    }

    console.log(todos)

    return ( 
        <>
            <input 
                type="text" 
                id="todo-input"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button onClick={() => handleAddTodo()}>Ajouter</button>
            

            {/* // Avec .map on va afficher l'ensemble des todos depuis un tableau  */}
            { todos.length && todos.map((todo) => (
                <div className="todo" key={todo.id}>
                    <p>{todo.content}</p>
                    <input type="checkbox" name="check" onClick={() => handleCheck(todo.id)} />
                </div>
            ))}
        </>
     );
}

// Exporter le composant 
export default Todo ;
