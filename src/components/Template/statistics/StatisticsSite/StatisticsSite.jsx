import SiteCard from '../SiteCard/SiteCard'
import './StatisticsSite.css'
import db from '../../../../Data/db.json'
import { useState } from 'react'

function StatisticsSite() {
    const [Sites]=useState(db.StatisticsSites)
  return (
    <section className="statisticsSite">
        <div className="row">
            {Sites.map(site=>(
            <div className="col-lg-3 col-md-6 col-sm-12" key={site.id}>
                <div className="box">
                    <SiteCard {...site}/>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default StatisticsSite