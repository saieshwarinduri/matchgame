import './index.css'

const TabList = props => {
  const {eachList, lableId, setlabesState} = props
  const {displayText, tabId} = eachList
  const style = lableId === tabId ? 'listItem1' : 'listItem'
  const lineStyle = tabId === lableId ? 'liner1' : 'liner'

  const clickOnbutton = () => {
    setlabesState(tabId)
  }

  return (
    <li className="listCONtenrrrrr">
      <button type="button" className="button" onClick={clickOnbutton}>
        <h1 className={style}>{displayText}</h1>
      </button>

      <hr className={lineStyle} />
    </li>
  )
}
export default TabList
