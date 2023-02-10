import React from "react";
import { toast } from 'react-toastify';
class FormToDo extends React.Component {
    state = {
        id: '',
        title: '',
    }
    handleChangToDos = (event) => {
        this.setState({
            title: event.target.value
        })

    }
    handleChangButtonToDos = (event) => {
        event.preventDefault();
        if (!this.state.title) {
            toast.error("Trường dử liệu của bạn đang trống!");
            return;
        }
        this.props.addToDos({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
        })
        this.setState({
            id: '',
            title: '',
        })
    }
    render() {
        return (
            <div className="list-todo-add">
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangToDos(event)}
                />
                <button
                    className="add"
                    onClick={(event) => this.handleChangButtonToDos(event)}
                >
                    add
                </button>
            </div>
        )
    }
}

export default FormToDo;