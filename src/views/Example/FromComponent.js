import React from 'react';

class FromComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }
    handleChangJobTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleChangSubmit = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert('bạn để trống 1 trường');
            return;
        }
        this.props.addJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,
        })
        this.setState({
            title: '',
            salary: '',
        })
    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Job`s Title:</label>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangJobTitle(event)}
                /><br /><br />
                <label htmlFor="lname">salary:</label>
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangSalary(event)}
                /><br /><br />
                <input
                    type="submit"
                    onClick={(event) => this.handleChangSubmit(event)} />
            </form>
        )
    }
}
export default FromComponent;