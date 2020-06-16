import React from 'react'
import { Post } from '../Post/Post'
import './ListofPosts.css'

class ListofPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            post: [],


        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => this.setState({ data: res.slice(0, 10) }))
    }

    render() {
        return <div className="ListofPosts__container">  <h1 className="ListofPosts__header">Posts</h1>
            {this.state.data.map(item => <Post title={item.title} desc={item.body} id={item.id} />)}</div>
    }
}
export { ListofPosts }