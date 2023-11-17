import "./SiteCard.css";

function SiteCard({number , action,actionColor ,paraph , bgColor , tColor , percent}) {
  return (
    <div className="siteCard">
      <div className="siteCard-content">
        <h6 className="siteCard-content-number">{number}</h6>
        <span className="siteCard-content-action" style={{color:[actionColor]}}>{action}</span>
        <p className="siteCard-content-paraph">
            {paraph}
        </p>
      </div>
      <div className="siteCard-chart">
        <div className="chart-back" style={{backgroundColor:[bgColor]}}>
          <span className="chart-front" style={{color:[tColor]}}>{percent}%</span>
        </div>
      </div>
    </div>
  );
}

export default SiteCard;
