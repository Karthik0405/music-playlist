import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import SongItem from '../SongItem'
import './index.css'

class PlaylistHome extends Component {
  state = {trackList: [], searchInput: ''}

  componentDidMount() {
    this.updatedList()
  }

  updatedList = () => {
    const {initialTracksList} = this.props
    this.setState({
      trackList: initialTracksList,
    })
  }

  onSearchInput = e => {
    this.setState({
      searchInput: e.target.value,
    })
  }

  deleteItem = id => {
    const {trackList} = this.state
    const deleteList = trackList.filter(eachItem => eachItem.id !== id)
    this.setState({
      trackList: deleteList,
    })
  }

  rendersongPlaylist = () => {
    const {trackList, searchInput} = this.state
    const filterList = trackList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="play-list-bg">
        <div className="play-list-container">
          <h1 className="play-list-heading">Songs Playlist</h1>
          <div className="input-container">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              onChange={this.onSearchInput}
              value={searchInput}
            />
            <BsSearch className="search-icon" />
          </div>
        </div>
        {filterList.length === 0 ? (
          <div className="not-found-container">
            <p className="no-song">No Songs Found</p>
          </div>
        ) : (
          <ul className="list-container">
            {filterList.map(eachItem => (
              <SongItem
                eachItem={eachItem}
                key={eachItem.id}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="singer-bg">
          <h1 className="singer-name">Ed Sheeran</h1>
          <p className="singer">Singer</p>
        </div>
        {this.rendersongPlaylist()}
      </div>
    )
  }
}

export default PlaylistHome
