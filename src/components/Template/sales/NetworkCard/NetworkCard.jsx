import './NetworkCard.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

function NetworkCard({icon,text,number,color}) {
  return (
    <div className="networkCard">
    <span className="networkCard-iconBox" style={{color:[color]}}>
        <FontAwesomeIcon
            icon={Icons[icon]}
           color={color}
           style={{fontSize:'1.5rem',marginLeft:'0.5rem'}}
        />
       {text}
    </span>
        <span className="networkCard-number" style={{color:[color]}}>{number}</span>
</div>
  )
}

export default NetworkCard