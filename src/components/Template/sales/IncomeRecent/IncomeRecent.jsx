import "./IncomeRecent.css";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaHandLizard } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";

function IncomeRecent() {
  return (
    <section className="incomeRecent">
      <div className="box">
        <div className="row">
          <div className="col-12">
            <h5 className="title">درآمد های اخیر شما</h5>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="incomeRecent-item">
              <div className="incomeRecent-item-boxIcon">
                <BsFillBarChartFill className="incomeRecent-item-icon" />
              </div>
              <div className="incomeRecent-item-content">
                <span className="incomeRecent-item-title">سود ناخالص</span>
                <span className="incomeRecent-item-number">
                  1,958,104 تومان
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="incomeRecent-item">
              <div className="incomeRecent-item-boxIcon">
                <FaHandLizard className="incomeRecent-item-icon" />
              </div>
              <div className="incomeRecent-item-content">
                <span className="incomeRecent-item-title">کسر مالیات</span>
                <span className="incomeRecent-item-number">234,769 تومان</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="incomeRecent-item">
              <div className="incomeRecent-item-boxIcon">
                <BiDollar className="incomeRecent-item-icon" />
              </div>
              <div className="incomeRecent-item-content">
                <span className="incomeRecent-item-title">سود خالص</span>
                <span className="incomeRecent-item-number">
                  1,608,469 تومان
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IncomeRecent;
