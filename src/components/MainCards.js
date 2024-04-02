import React from "react";
import {
  BsCoin,
  
} from "react-icons/bs";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { GrUnorderedList } from "react-icons/gr";


function MainCards() {
  return (
    <div className="main-cards">
      <div className="card card-earnings">
        <div className="card-inner">
          <div className="card-left card-left-earnings">
            <BsCoin className="card_icon" />
          </div>
          <div className="card-right">
            <div className="cardTitle">Earnings</div>
            <div className="cardPrice">$1998k</div>
            <p>37.8% this month</p>
          </div>
        </div>
      </div>
      <div className="card card-orders">
        <div className="card-inner">
          <div className="card-left card-left-orders">
            <GrUnorderedList className="card_icon" />
          </div>
          <div className="card-right">
            <div className="cardTitle">Orders</div>
            <p className="cardPrice">$120k</p>
            <p>15.6% this month</p>
          </div>
        </div>
      </div>
      <div className="card card-balance">
        <div className="card-inner">
          <div className="card-left card-left-balance">
            <MdOutlineAccountBalanceWallet className="card_icon" />
          </div>
          <div className="card-right">
            <div className="cardTitle">Balance</div>
            <p className="cardPrice">$789k</p>
            <p>20.2% this month</p>
          </div>
        </div>
      </div>
      <div className="card card-total-sales">
        <div className="card-inner">
          <div className="card-left card-left-total-sales">
            <TbReportMoney className="card_icon" />
          </div>
          <div className="card-right">
            <div className="cardTitle">Total sales</div>
            <p className="cardPrice">$42k</p>
            <p>5.7% this month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCards;
