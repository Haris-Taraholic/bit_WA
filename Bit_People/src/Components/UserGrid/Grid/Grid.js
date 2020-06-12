import React from 'react'
import { emailShortage, dateTransform } from '../../functions'



class Grid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    render() {
        if (this.props.gender === "female") {
            return <div className=" femaleGrid">
                <img src={this.props.image} alt="large"></img>
                <div className='UserGrid__nameWrapper'><p>{this.props.name} </p> </div> <p> {emailShortage(this.props.mail)} <br></br> {dateTransform(this.props.date)}</p>
            </div>
        } else {
            return <div>
                <img src={this.props.image} alt="large"></img>
                <div className='UserGrid__nameWrapper'><p>{this.props.name} </p> </div> <p> {emailShortage(this.props.mail)} <br></br> {dateTransform(this.props.date)}</p>
            </div>
        }
    }
}


export { Grid };
