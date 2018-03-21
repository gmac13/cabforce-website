import React, { Component } from "react";
import "./Policys.css";
import GlobalHeader from "../globalHeader/GlobalHeader.js";
import { strings } from "./policyStrings.js";



export default class PrivatePolicy extends Component {
    constructor(props) {
        super(props);



    }

    linkToCookiePolicy() {
        this.props.history.push({ pathname: "/help/details/cookiePolicy" });



    }

    privacyPolicy() {
        if (strings.getLanguage() !== 'en') {
            strings.private2 = null;
        }

        let link = "https://www.holidayautos.com/terms-and-conditions"

        return (

            <div className="PolicyDiv">
                <div className="privacyPolicyHeading"> {strings.privatePolicy} </div>
                <div className="divText">
                    <p>   {strings.private1} </p>
                    <p> {strings.private2} </p>
                    {strings.getLanguage() === 'en' ? (
                        <p> {strings.private3BeforeLink} <a href={link}> {strings.private3Link} </a> {strings.private3AfterLink} </p>) : (
                            <p> {strings.private3} </p>
                        )}
                </div>
                <div className="subHeadingPolicy"> <p> {strings.heading1} </p></div>
                <div className="divText1">
                    <p>  <p> {strings.private4} </p> </p>
                    <div style={{ padding: '1%' }}>
                        <ul>
                            <li> {strings.bullet1} </li>
                            <li> {strings.bullet2} </li>
                            <li> {strings.bullet3} </li>
                            <li> {strings.bullet4} </li>
                            <li> {strings.bullet5} </li>
                            <li> {strings.bullet6} </li>
                            <li> {strings.bullet7} </li>
                        </ul>
                    </div>
                    <div className="subHeadingPolicy">{strings.Cookies}</div>
                    <div className="divText1">
                        <p> {strings.private5} <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => this.linkToCookiePolicy()} > {strings.cookieLink} </span> </p>
                    </div>
                    <div className="subHeadingPolicy">{strings.heading2} </div>
                    <div className="divText1">
                        <p> {strings.private6} </p>
                        <p> {strings.private7} </p>
                        <p> {strings.private8} </p>
                        <p> {strings.private9} </p>
                    </div>
                    <div className="subHeadingPolicy">{strings.heading3} </div>
                    <div className="divText1">
                        <p> {strings.private10}</p>
                        <p> {strings.private11} </p>
                        <p> {strings.private12}</p>
                        <p> {strings.private13} </p>
                        <p> {strings.private14} </p>
                        <p> {strings.private15}</p>
                        <p> {strings.private16} </p>
                        <p> {strings.private17} </p>
                        <p> {strings.private18} </p>
                    </div>
                    <div className="subHeadingPolicy"> {strings.heading4}</div>
                    <div className="divText1">
                        <p> {strings.private188} </p>
                        <p> {strings.private19} </p>
                        <p> {strings.private20} </p>
                        <p> {strings.private21} </p>
                        <p> {strings.private22} </p>
                    </div>
                    <div className="subHeadingPolicy">{strings.heading5}</div>
                    <div className="divText1">
                        <p> {strings.private23} </p>
                        <div className="columnLeft">
                            <div> {strings.Etrawler} </div>
                            <div> {strings.ClassonHouse} </div>
                            <div> {strings.DundrumBusinessPark}</div>
                            <div> {strings.Dundrum} </div>
                            <div> {strings.Dublin14} </div>
                            <div> {strings.Ireland} </div>
                        </div>
                        <div className="divText1">
                            <p> {strings.private24}</p>
                        </div>
                    </div>
                    <div className="subHeadingPolicy">{strings.heading6}</div>
                    <div className="divText1">
                        <p> {strings.private25} </p>
                        <p> {strings.private26} </p>
                    </div>
                    <div className="subHeadingPolicy">{strings.heading7}</div>
                    <div className="divText1">
                        <p> {strings.private27} </p>
                    </div>
                    <div className="subHeadingPolicy"> {strings.heading8} </div>
                    <div className="divText1">
                        <p> {strings.private28} </p>
                    </div>
                    <div className="subHeadingPolicy"> {strings.heading9}</div>
                    <div className="divText1">
                        <p> {strings.lastLine} </p>
                        <div className="columnLeft">
                            <div> {strings.Etrawler} </div>
                            <div> {strings.ClassonHouse} </div>
                            <div> {strings.DundrumBusinessPark}</div>
                            <div> {strings.Dundrum} </div>
                            <div> {strings.Dublin14} </div>
                            <div> {strings.Ireland} </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }



    render() {
        return (

            <div>
                <GlobalHeader
                    router={this.props.history}
                />
                <div className="SearchDiv3" />
                {this.privacyPolicy()}

            </div>
        )
    }

}