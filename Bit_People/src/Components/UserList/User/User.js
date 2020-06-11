import React from 'react'
import './User.css'
import { MdMail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { emailShortage, dateTransform } from "../../functions"



class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        if (this.props.gender === 'female') {
            return <div className='user__wrapper femaleUser'>
                <img src={this.props.image} className="User__image" alt="avatar"></img>
                <p>name: {this.props.name} <br></br> <MdMail />email: {emailShortage(this.props.email)} <br></br> <FaBirthdayCake />date of birth: {dateTransform(this.props.dob)}</p>
            </div >
        } else {return <div className='user__wrapper'>
        <img src={this.props.image} className="User__image" alt="avatar"></img>
        <p>name: {this.props.name} <br></br> <MdMail />email: {emailShortage(this.props.email)} <br></br> <FaBirthdayCake />date of birth: {dateTransform(this.props.dob)}</p>
    </div >

        }
    } 
}
export { User }                    