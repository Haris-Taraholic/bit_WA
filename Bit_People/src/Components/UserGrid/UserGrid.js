import React from 'react'
import "./UserGrid.css"
import { Grid } from "./Grid/Grid"


class UserGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }
    render() {
        return <div className='UserGrid__container'>
            {this.props.data.map(item => <div className="UserGrid__wrapper"><Grid name={item.name.first} image={item.picture.large} mail={item.email} date={item.dob.date} gender={item.gender} /></div>)}
        </div>
    }
}
export { UserGrid }