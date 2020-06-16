import React from 'react';
import { Link } from 'react-router-dom';


class SinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = { post: [], author: [], authorPosts: [] }
    }

    fetchData = () => {
        const postId = this.props.match.params.id;

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(res => {
                this.setState({ post: res });

                const userId = res.userId;
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                    .then(res => res.json())
                    .then(res => this.setState({ author: res }));

                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                    .then(res => res.json())
                    .then(res => this.setState({ authorPosts: res.slice(0, 3) }))
            })
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.fetchData();
        }
    }

    render() {
        return (
            < div >
                <h3> <Link to='/'>&larr;Back</Link></h3>
                <h1>{this.state.post.title}</h1>
                <Link to='/author'><h3>{this.state.author.name}</h3></Link>
                <p>{this.state.post.body}</p>
                <hr />
                {this.state.authorPosts.map((item, i) => <h1 key={i}> <Link to={`${item.id}`}>{item.title}</Link></h1>)}
            </div >
        )
    }
}
export { SinglePost }