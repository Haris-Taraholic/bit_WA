import React from 'react'
import { User } from './User/User'

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    render() {
        return <div>
            {this.props.users.map((item, i) => < User gender={item.gender} key={i} name={item.name.first + " " + item.name.last} image={item.picture.thumbnail} email={item.email} dob={item.dob.date} />)}
        </div>
    }

}
export { UserList }