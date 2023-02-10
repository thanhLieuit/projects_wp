import React from "react";
import { withRouter } from "react-router";
import Color from "../Hoc/Color";
import { connect } from "react-redux";
class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    onDeleteUser = (user) => {
        console.log('check delete user:', user);
        this.props.deleteUserRedux(user);
    }
    onCreaterUser = () => {
        this.props.addUserRedux();
    }
    render() {
        console.log(">>> check props:", this.props.dateRedux);
        let listUsers = this.props.dateRedux;
        return (
            <>
                <p>this is home page</p>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.onDeleteUser(item)}>X</span>
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={() => this.onCreaterUser()}>add new</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dateRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: (userAdd) => dispatch({ type: 'ADD_USER', payload: userAdd })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));