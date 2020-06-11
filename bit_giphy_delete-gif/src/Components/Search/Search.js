import React from 'react';
import './Search.css'
import { TiDeleteOutline } from "react-icons/ti";


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({ gifs: [], test: false })
    }
    getEndpoint = (event) => {
        if (event.charCode === 13) {
            const $input = event.target
            const url = `https://api.giphy.com/v1/gifs/search?api_key=XL7fUtEZBBsKiCi0gwsxzdIA8navSziH&q=${$input.value}`;
            fetch(url)
                .then(res => res.json())
                .then(res => this.setState({ gifs: res.data }))
        }
    }
    deleteItem = (index) => {
        let array = this.state.gifs.filter(item => item !== this.state.gifs[index])
        this.setState({ gifs: array })
    }
    render() {
        return (
            <div className='Search__container' >
                <h1 className="Search__header">Search Giphy</h1>
                <input placeholder='Search' type='search' className='Search__input' onKeyPress={this.getEndpoint}></input>
                <div className='Search__wrapper' >
                    {this.state.gifs.map((item, i) => (
                        <div key={i} className='Search__singleUser' >
                            <img src={item.images.preview_gif.url} alt="gif" />
                            <TiDeleteOutline className="Search__delete" onClick={() => this.deleteItem(i)} />
                        </div>
                    ))}
                </div>
            </div >
        )
    }
}
export { Search };