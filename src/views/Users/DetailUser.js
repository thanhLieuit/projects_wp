import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        user: []
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;

            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            console.log('check user id:', res);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : []
            })
        }

    }
    OnClickBack = () => {
        this.props.history.push('/user/')
    }
    render() {
        let { user } = this.state;
        const jsobemty = Object.keys(user).length === 0;
        return (
            <>
                this is page detailUser user id : {this.props.match.params.id}
                {jsobemty === false &&
                    <>
                        <p>User Name: {user.first_name} - {user.last_name}</p>
                        <p>Email: {user.email}</p>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.OnClickBack()}>Back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);