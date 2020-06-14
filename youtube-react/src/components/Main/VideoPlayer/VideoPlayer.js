import React from 'react';
import { SuggestedVideos } from './SuggestedVideos/SuggestedVideos';
import './VideoPlayer.css'

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }

    componentDidMount() {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.props.id}&type=video&key=AIzaSyBgC_4irQJUehFVW9tp-73wYVOEZZBDywU`)
            .then(res => res.json())
            .then(res => this.setState({ data: res.items }))
    }

    render() {
        return this.props.id !== '' ? < div className = "VideoPlayer__wrapper col-lg-12" > < iframe width = "700"
        height = "400"
        src = { `https://www.youtube.com/embed/${this.props.id}` } > < /iframe> <
        div > < SuggestedVideos data = { this.state.data }
        getId = { this.props.getId }
        /></div > < /div > : null
    }
}
export { VideoPlayer }