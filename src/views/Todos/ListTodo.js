import React from "react";
import './listTodo.scss';
import FormToDo from "./FormToDo";
import ChildToDo from "./ChildToDo";
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: '1', title: 'Read Book' },
            { id: '2', title: 'Playing game' },
            { id: '3', title: 'Study Reactjs' },
        ]
    }
    addToDos = (todos) => {
        this.setState({
            listTodos: [...this.state.listTodos, todos]
        })
        toast.success("Bạn đã thêm Dử Liệu thành công!");
    }
    deleteToDos = (todos) => {
        let currentToDos = this.state.listTodos;
        currentToDos = currentToDos.filter(item => item.id !== todos.id);
        this.setState({
            listTodos: currentToDos,
        })
        toast.success("Bạn đã Xóa Dử Liệu thành công!");

    }

    render() {
        let { listTodos } = this.state;
        return (
            <>
                <p>
                    Hello List to do (Thanh Lieu)
                </p>
                <div className="list-todo-container">
                    <FormToDo
                        addToDos={this.addToDos}
                    />
                    <ChildToDo
                        listTodos={this.state.listTodos}
                        deleteToDos={this.deleteToDos}
                    //editToDos={this.editToDos}
                    />
                </div>
            </>

        )
    }
}

export default ListTodo;