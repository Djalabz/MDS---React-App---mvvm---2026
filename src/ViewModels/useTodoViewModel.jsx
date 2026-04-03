// Ici le VIEWMODEL : On y regroupe la logique de state et les fonctions associées 
// L'idée est de découpler la vue des données dynamiques afin de rendre plus flexible la gestion de celles-ci

// On pourra importer le TaskService.js afin d'utiliser les opérations à effectuer vers l'API
// On importe également les éléments nécessaires à la bonne gestion de nos states et autres opérations 
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import Todo from "../Models/TodoModel"


// Composant fonctionnel du ViewModel : retourne uniquement des states / opérations pas de JSX (ce sera la view)
// NB : Le use ne se rettrouve pas systématiquement au niveau du nom du vm
// NB 2 : Une classe peut aussi aussi préférable selon les cas
function useTodoViewModel() {
    const [inputValue, setInputValue] = useState("")
    const [todos, setTodos] = useState([])

    function handleAddTodo() {
        // On vérifie que l'input ne soit pas vide 
        if (inputValue != "") {
            // On crée un objet pour notre todo

            // On va instancier le modèle afin de générer un nouvel objet Todo
            const newTodo = new Todo(inputValue)

            // const newTodo = {
            //     id: uuidv4(),
            //     check: false, 
            //     content: inputValue
            // }

            // Puis on l'ajoute à notre tableau de todos en faisant une copie au préalable
            setTodos([ ...todos, newTodo ])
        }
    }

    function handleCheck(id) {
        // Avec map on vient créer un nouveau tableau de todos avec pour celle qui possède le meme id 
        // changer la valeur de check -> Ici avec un if... else sous forme d'opérateur ternaire
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, check: !todo.check } : todo))
    }

    return {
        inputValue, 
        todos,
        handleAddTodo,
        handleCheck, 
        setInputValue
    }
}

export { useTodoViewModel } 