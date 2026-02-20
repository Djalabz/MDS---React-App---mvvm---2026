// VUE de la TODO ici il s'agit uniquement de l'UI aucune logique de state 

// On importe notre viewModel afin de pouvoir utiliser les données de states et autres opérations
import { useTodoViewModel } from "../ViewModels/useTodoViewModel"

// Dans notre composant fonctionnel TodoView on récupère les states 
// et fonctions du viewModel afin de les utiliser / afficher dans notre JSX
function TodoView() {
    const { inputValue, todos, handleAddTodo, handleCheck, setInputValue } = useTodoViewModel()
    
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

// On exporte la vue arfin de l'importer dans App
export default TodoView;
