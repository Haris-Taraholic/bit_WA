import React from 'react';
import { Search } from './Search/Search';
import { ListSearchedVideos } from './ListSearchedVideos/ListSearchedVideos';
import { VideoPlayer } from './VideoPlayer/VideoPlayer';


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            videoId: null,
        }
    }
    getData = (event) => {
        let searchValue = event.target.value
        if (event.keyCode === 13) {
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchValue}&key=AIzaSyBgC_4irQJUehFVW9tp-73wYVOEZZBDywU`)
                .then(res => res.json())
                .then(data => this.setState({ videoId: null, data: data.items }))
        }
        event.stopPropagation();
    }

    singleVideo = (item) => {
        this.setState({
            videoId: item.id.videoId,
            data: []
        })
        sessionStorage.setItem("previus", JSON.stringify(item))
    }

    render() {
        return (<div className="Main__wrapper container" >
            <div className="row" >
                <Search getData={this.getData} />
                {!this.state.videoId ?
                    <ListSearchedVideos videos={this.state.data} onClick={this.singleVideo}
                    /> : < VideoPlayer id={this.state.videoId} getId={this.singleVideo} />
                } </div>
        </div >
        )
    }
}

export { Main }