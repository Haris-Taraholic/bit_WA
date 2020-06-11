import React from 'react';
import './Search.css'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({ gifs: [] })
    }
    getEndpoint = (event) => {
        if (event.charCode === 13) {
            const $input = event.target
            const url = `https://api.giphy.com/v1/gifs/search?api_key=XL7fUtEZBBsKiCi0gwsxzdIA8navSziH&q=${$input.value}`;
            fetch(url)
                .then(res => res.json())
                .then(res => this.setState({ gifs: res.data }))
        }
        console.log(event.charCode);
    }
    render() {
        return <div className='Search__container'>
            <h1 className="Search__header">Search Giphy</h1>
            <input placeholder='Search' type='search' className='Search__input' onKeyPress={this.getEndpoint}></input>
            <div className='Search__wrapper'>
                {this.state.gifs.map((item, i) => <div className='Search__singleUser'><img key={i} src={item.images.preview_gif.url} alt="gif"></img></div>)}
            </div>
        </div >
    }
}
export { Search }