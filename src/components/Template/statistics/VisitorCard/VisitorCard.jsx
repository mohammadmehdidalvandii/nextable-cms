import './VisitorCard.css'
function VisitorCard({title , text , number ,color ,progress}) {
  return (
    <div className="visitorCard">
    <div className="visitorCard-titleName">
        <span className="visitorCard-titleName-text">{title}</span>
        <span className="visitorCard-titleName-text">{text}</span>
    </div>
    <span className="visitorCard-number">{number}</span>
    <div className="visitorCard-progressBg">
        <span className="visitorCard-progressFront" style={{backgroundColor:[color], width:[progress]}}></span>
    </div>
</div>
  )
}

export default VisitorCard