import './Visit.css'
import db from '../../../../Data/db.json'
import { useState } from 'react'
function Visit() {

    const [pages, setPages] =useState(db.visitPages)
  return (
   <section className="visit">
    <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="box">
                <div className="totalVisit">
                    <h5 className="title">مجموع بازدید</h5>
                    <table className="totalVisit-table">
                        <thead className="totalVisit-thead">
                            <th className="totalVisit-thead-th">عنوان صفحه</th>
                            <th className="totalVisit-thead-th">درصد(%)</th>
                            <th className="totalVisit-thead-th">مقدار</th>
                        </thead>
                        {pages.map(page=>(
                        <tbody className="totalVisit-tbody" key={page.id}>
                            <tr className="totalVisit-tbody-tr">
                                <span className="totalVisit-tbody-pageName">{page.pageName}</span>
                            </tr>
                            <tr className="totalVisit-tbody-tr">
                                <div className="totalVisit-tbody-progress">
                                    <span className="totalVisit-tbody-front" style={{backgroundColor:[page.color], width:[page.progress]}}></span>
                                </div>
                            </tr>
                            <tr className="totalVisit-tbody-tr">{page.progress}</tr>
                        </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        </div>
    </div>
   </section>
  )
}

export default Visit