import React from 'react';
import { Authors } from "./Author/Author";

class Author extends React.Component {
    constructor(props) {
        super(props)
        this.state = { authors: [] }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => this.setState({ authors: res }))
    }

    render() {
        return <div>
            {this.state.authors.map((item, i) => <Authors name={item.name} id={item.id} />)}
        </div>
    }
}
export { Author }
