import './CardStatus.css'

function CardStatus({name ,job , color ,status}) {
  return (
    <div className="cardStatus">
    <div className="cardStatus-imgNameJob">
        <img src="/assets/images/avatar.jpg" alt="customer" className="cardStatus-img" />
        <div className="cardStatus-nameJob">
        <h6 className="cardStatus-name">{name}</h6>
        <span className="cardStatus-job">{job}</span>
        </div>
    </div>

    <span className="cardStatus-status" style={{backgroundColor:[color]}} >{status}</span>
</div>
  )
}

export default CardStatus