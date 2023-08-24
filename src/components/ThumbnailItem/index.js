// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, navigateImage} = props

  const onClickImage = () => {
    navigateImage(eachItem.id)
  }

  return (
    <li className="list-items">
      <button type="button" onClick={onClickImage} className="btn">
        <img src={eachItem.thumbnailUrl} alt={eachItem.thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
