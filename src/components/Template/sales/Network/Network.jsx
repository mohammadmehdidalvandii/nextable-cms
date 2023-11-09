import './Network.css'
import NetworkCard from '../NetworkCard/NetworkCard'
import db from '../../../../Data/db.json'
import { useState } from 'react'


function Network() {
    const[networks ,setNewtworks] =useState(db.networks)


  return (
  <section className="network">
        <div className="networkWrapper box">
            <h6 className="title">شبکه فروش</h6>
            <div className="row mt-4">
                {networks.map(network=>(
                <div className="col-lg-3 col-md-4 col-sm-12" key={network.id}>
                   <NetworkCard 
                        icon={network.icon}
                        color={network.color}
                        text={network.text}
                        number={network.number.toLocaleString()}
                   />
                </div>
                ))}
            </div>
        </div>
  </section>
  )
}

export default Network