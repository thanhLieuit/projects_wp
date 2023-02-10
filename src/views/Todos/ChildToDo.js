import React from "react";
import { toast } from 'react-toastify';
class ChildToDo extends React.Component {
    state = {
        editTodos: {}
    }
    handleChangDelete = (todos) => {
        this.props.deleteToDos(todos)
    }
    handleChangEdit = (todos) => {
        const { editTodos } = this.state;
        const { listTodos } = this.props;
        const jsobemty = Object.keys(editTodos).length === 0;
        if (jsobemty === false && editTodos.id === todos.id) {
            //Find index of specific object using findIndex method.    
            const listEditTodo = [...listTodos]
            const objIndex = listEditTodo.findIndex((item => item.id == todos.id));

            listEditTodo[objIndex].title = editTodos.title;
            this.setState({
                editTodos: listEditTodo,
                editTodos: {}
            })
            toast.success("Bạn đã sửa Dử Liệu thành công!");
            return;
        }
        this.setState({
            editTodos: todos
        })

    }
    handleChangEditTodo = (event) => {
        let todoEdit = { ...this.state.editTodos, event };
        todoEdit.title = event.target.value;
        this.setState({
            editTodos: todoEdit
        })
    }
    render() {
        const { listTodos } = this.props;
        const { editTodos } = this.state;
        const jsobemty = Object.keys(editTodos).length === 0;
        console.log('check emty', jsobemty);
        return (
            <div className="list-todo-content">
                {listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                    return (
                        <div className="todo-child" key={item.id}>
                            {jsobemty === true ?
                                <span>{index + 1} - {item.title}</span>
                                :
                                <>
                                    {item.id === editTodos.id ?
                                        <span>
                                            {index + 1}  - <input
                                                value={editTodos.title}
                                                onChange={(event) => this.handleChangEditTodo(event)}
                                            />
                                        </span>
                                        :
                                        <span>{index + 1} - {item.title}</span>
                                    }
                                </>

                            }
                            <button
                                className="edit"
                                onClick={() => this.handleChangEdit(item)}
                            >
                                {jsobemty === false && editTodos.id === item.id ?
                                    'save'
                                    :
                                    'edit'
                                }
                            </button>
                            <button
                                className="delete"
                                onClick={() => this.handleChangDelete(item)}
                            >
                                Delete
                            </button>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default ChildToDo;