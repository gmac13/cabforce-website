import React from "react";

import mytaxi from "../../assets/mytaxi_logo.png";
import taksee from "../../assets/taksee_logo.png";
import cabify from "../../assets/cabify_logo.png";

import Collapsible from "react-collapsible";

export default class TripItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() { }

  checkSupplier(item) {
    if (item.supplierName === "Cabify") {
      return (
        <div className="SupplierIcon">
          <img
            src={cabify}
            style={{
              height: "3vw",
              width: "9vw",
              minHeight: "25px",
              minWidth: "60px",
              maxHeight: "70px",
              maxWidth: "160px"
            }}
          />{" "}
        </div>
      );
    } else if (item.supplierName === "Demo") {
      return (
        <div className="SupplierIcon">
          <img
            src={cabify}
            style={{
              height: "3vw",
              width: "9vw",
              minHeight: "25px",
              minWidth: "60px",
              maxHeight: "70px",
              maxWidth: "160px"
            }}
          />
        </div>
      );
    } else if (item.supplierName === "Taksee") {
      return (
        <div className="SupplierIcon">
          <img
            scr={taksee}
            style={{
              height: "4vw",
              width: "4.5vw",
              minHeight: "40px",
              minWidth: "45px",
              maxHeight: "90px",
              maxWidth: "95px"
            }}
          />{" "}
        </div>
      );
    }
  }

  renderTripItem() {
    let date;
    let pickupTime;
    let item = this.props.item;

    if (
      item.orderStatus === "SUPPLIER_CANCELLED" ||
      item.orderStatus === "USER_CANCELLED"
    ) {
      date = new Date(item.orderDateTime);
      pickupTime = new Date(item.orderDateTime);

      var month;
      if (date.getMonth().toString().length === 1) {
        month = "0" + (date.getMonth() + 1);
      }
      date = date.getDate() + "/" + month + "/" + date.getFullYear();
    } else {
      date = new Date(item.pickupDatetime);
      pickupTime = new Date(item.pickupDatetime);

      var month;
      if (date.getMonth().toString().length === 1) {
        month = "0" + (date.getMonth() + 1);
      }
      date = date.getDate() + "/" + month + "/" + date.getFullYear();
    }

    const dateOptions = { year: "numeric", month: "short", day: "numeric" };
    const pickupShort = item.pickupLocation.address;
    const noDroppOff = "strings.unknownDestination";

    const time = pickupTime.toLocaleTimeString("en-GB").slice(0, 5);

    let dropoffShort = null;

    if (item.dropoffLocation) {
      dropoffShort = item.dropoffLocation.address;
    }

    return (
      <Collapsible
        transitionTime={150}
        trigger={
          <div
            className="JourneyDetailsDiv"
            onClick={() => {
              // this.props.history.push({ pathname: "/help/trip" });
              // this.props.addTripObject(item);
            }}
          >
            <div className="Touch">
              <div className="DateTime">
                <div>
                  {date.toLocaleString("en-US", dateOptions)}
                  {/* {" at "}
                  {time} */}
                </div>
              </div>

              <div className="PriceDiv">
                {item.totalPrice ? (
                  <div>{item.totalPrice}</div>
                ) : (
                    <div>0.00</div>
                  )}
              </div>

              {item.orderStatus === "USER_CANCELLED" ||
                item.orderStatus === "SUPPLIER_CANCELLED" ? (
                  <div className="CancelledTextDiv1">Cancelled</div>
                ) : (
                  <div className="DriverSupplierDiv">
                    <div className="DriverDiv">
                      <div>{item.car.driverName}</div>
                    </div>

                    <div className="SupplierDiv">{this.checkSupplier(item)}</div>
                  </div>
                )}
            </div>
          </div>
        }
      >
        <div className="JourneyDetailsDivDropDown">
          <div className="HelpLinkDiv">
            {this.props.helpDetailsScreen ? (
              <a
                href="https://help.cabify.com/hc/en-us/requests/new"
                target="_blank"
              >
                Get Help
              </a>
            ) : (
                <div
                  onClick={() => {
                    this.props.addTripObject(item);
                    this.props.history.push({ pathname: "/help/trip" });
                  }}
                >
                  <a className="GetHelpLink">Get Help</a>
                </div>
              )}
          </div>
          <div className="JounreyDiv">
            <div className="JounreyDivFrom">{item.pickupLocation.address}</div>
            <div className="JounreyDivIcon">to</div>
            {item.dropoffLocation ? (
              <div className="JounreyDivTo">{item.dropoffLocation.address}</div>
            ) : (
                <div className="JounreyDivTo">destination not specified</div>
              )}
          </div>
          <div className="HelpLinkDiv" />
        </div>
      </Collapsible>
    );
  }

  render() {
    return this.renderTripItem();
  }
}
