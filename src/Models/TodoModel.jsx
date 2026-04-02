import { v4 as uuidv4 } from 'uuid'

// Structure de nos données,ici la Todo 
// Donc id, check et content comme informations
class Todo {
    constructor(content, check = false) {
        this.id = uuidv4()
        this.content = content
        this.check = check
    }
}

// export const initTodo = () => {
//     id: id // ici uuidv4 
//     content: content  
//     check : false
// }

export default Todo