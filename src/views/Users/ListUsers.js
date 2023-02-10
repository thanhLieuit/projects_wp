import React from 'react';
import axios from 'axios';
import './listusers.scss';
import { withRouter } from 'react-router-dom';
class ListUsers extends React.Component {
    state = {
        ListUsers: []
    }
    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log(">>check res: ", res.data.data)
        //     })
        /**async await */
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            ListUsers: res && res.data && res.data.data ? res.data.data : []
        })

    }
    OnClickDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let { ListUsers } = this.state;
        return (
            <div className='list-user'>
                <table id='customers'>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    {ListUsers && ListUsers.length > 0 &&
                        ListUsers.map((item, index) => {
                            return (
                                <tr key={item.id} onClick={() => this.OnClickDetailUser(item)}>
                                    <td>{index + 1}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            )
                        })
                    }

                </table>
            </div>
        )
    }
}

export default withRouter(ListUsers);