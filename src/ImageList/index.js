import './index.css'

const ImageList = props => {
  const {listItem, changeImagestate} = props
  const {thumbnailUrl, id} = listItem

  const changeImage = () => {
    changeImagestate(id)
  }

  return (
    <li>
      <button type="button" className="buttttton" onClick={changeImage}>
        <img className="thumbnillImage" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageList
