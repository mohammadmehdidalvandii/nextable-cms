import './NetworkSale.css'
import db from '../../../../Data/db.json'
import { useState } from 'react'

function NetworkSale() {
const [networks , setNetworks] =useState(db.networkPercent)

  return (
    <div className="networkSale">
        <h5 className="title">شبکه فروش</h5>
        <div className="networkSale-average">
            <div className="networkSale-averageBox">
                <span className="networkSale-average-number">65%</span>
                <h4 className="networkSale-average-text">میانیگن</h4>
            </div>
        </div>
        <div className="networkSalePercent">

            {networks.map(network=>(
            <div className="networkSalePercent-box" key={network.id}>
                <h6 className="networkSalePercent-title">{network.name}</h6>
                <div className="networkSalePercent-borderPercent">
                <div className="networkSalePercent-border">
                    <span className='networkSalePercent-border-br'style={{width:[network.width],backgroundColor:[network.bgColor]}} ></span>
                </div>
                    <span className="networkSalePercent-percentText">{network.percent}</span>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default NetworkSale