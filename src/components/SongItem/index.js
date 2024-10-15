import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongItem = props => {
  const {eachItem, deleteItem} = props
  const {id, imageUrl, name, genre, duration} = eachItem

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="song-container">
      <div className="song-image-container">
        <img src={imageUrl} alt="track" className="song-image" />
        <div>
          <p className="song-name">{name}</p>
          <p className="song-genere">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
          data-testid="delete"
        >
          {' '}
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default SongItem
