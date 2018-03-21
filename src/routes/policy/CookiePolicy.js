import React, { Component } from "react";
import "./Policys.css";
import GlobalHeader from "../globalHeader/GlobalHeader.js";
import { strings } from "./cookieStrings.js";
import ReactDOM from 'react-dom';



export default class CookiePolicy extends Component {
    constructor(props) {
        super(props);



    }





    privacyPolicy() {
        if (strings.getLanguage() === 'dt') {
            strings.cookie22 = null;
        }
    }

    privatePolicy() {
        let webLink = 'https://www.aboutcookies.org/';

        return (
            <div className="PolicyDiv">
                <div className="privacyPolicyHeading"> {strings.cookiesPolicy}</div>
                <div className="subHeadingCookie"> {strings.heading1}</div>
                <div className="divText">
                    <p> {strings.cookie1}</p>
                    <p> {strings.cookie2} </p>
                    <p> {strings.cookie3} </p>
                    <p> {strings.cookie4} </p>
                    <div className="subHeadingCookie"> {strings.heading2}</div>
                    <div className="smallHeadingCookie">{strings.heading3}</div>
                </div>
                <div className="divText">
                    <p> {strings.cookie5} </p>
                    <p> {strings.cookie6} </p>
                    <p> {strings.cookie7} </p>
                    <p> {strings.cookie8} </p>
                </div>
                <div className="divText">
                    <table cellPadding="10%">
                        <tbody className="okTable">
                            <tr className="okTable">
                                <td className="okTable"> {strings.tableHeading1} </td>
                                <td className="okTable"> 	{strings.tableHeading2}  </td>
                                <td className="okTable"> 	{strings.tableHeading3} </td>
                                <td className="okTable"> {strings.tableHeading4} </td>
                            </tr>
                            <tr className="okTable">
                                <td className="okTable"> {strings.tableInfo1} </td>
                                <td className="okTable"> {strings.tableInfo2}  </td>
                                <td className="okTable">{strings.tableInfo3} </td>
                                <td className="okTable"> {strings.tableInfo4}  </td>
                            </tr>
                            <tr className="okTable">
                                <td className="okTable"> {strings.tableInfo5}  </td>
                                <td className="okTable"> {strings.tableInfo6} </td>
                                <td className="okTable"> {strings.tableInfo7} </td>
                                <td className="okTable"> {strings.tableInfo8}  </td>
                            </tr>
                            <tr className="okTable">
                                <td className="okTable"> {strings.tableInfo9}  </td>
                                <td className="okTable"> {strings.tableInfo10} </td>
                                <td className="okTable"> {strings.tableInfo11} </td>
                                <td className="okTable"> {strings.tableInfo12}  </td>
                            </tr>
                            <tr className="okTable">
                                <td className="okTable"> {strings.tableInfo13}  </td>
                                <td className="okTable"> {strings.tableInfo14} </td>
                                <td className="okTable"> {strings.tableInfo15} </td>
                                <td className="okTable"> {strings.tableInfo16}  </td>
                            </tr>
                            <tr className="okTable">
                                <td className="okTable"> {strings.tableInfo17} </td>
                                <td className="okTable"> 	{strings.tableInfo18} </td>
                                <td className="okTable"> {strings.tableInfo19} </td>
                                <td className="okTable"> {strings.tableInfo20} </td>
                            </tr>
                            <tr className="okTable">
                                <td className="okTable"> {strings.tableInfo21}</td>
                                <td className="okTable"> 	{strings.tableInfo22}</td>
                                <td className="okTable"> 	{strings.tableInfo23}</td>
                                <td className="okTable"> {strings.tableInfo24} </td>
                            </tr>
                            <tr className="okTable">
                                <td className="okTable"> {strings.tableInfo25} </td>
                                <td className="okTable"> {strings.tableInfo26}</td>
                                <td className="okTable"> {strings.tableInfo27}</td>
                                <td className="okTable"> {strings.tableInfo28} </td>
                            </tr>
                        </tbody>

                    </table>
                    <div className="subHeadingCookie"> {strings.heading4}</div>
                    <div className="divText">
                        <p> {strings.cookie9} </p>
                        <p> {strings.cookie10} </p>
                        <p> {strings.cookie11} </p>
                    </div>
                    <div className="divText">
                        <table cellPadding="10%">
                            <tbody className="okTable">
                                <tr className="okTable">
                                    <td className="okTable"> {strings.tableHeading1}  </td>
                                    <td className="okTable"> 	{strings.tableHeading2}  </td>
                                    <td className="okTable"> 	{strings.tableHeading3} </td>
                                    <td className="okTable"> {strings.tableHeading4} </td>
                                </tr>
                                <tr className="okTable">
                                    <td className="okTable"> {strings.tableInfo29}  </td>
                                    <td className="okTable"> 	{strings.tableInfo30}  </td>
                                    <td className="okTable"> 	{strings.tableInfo31} </td>
                                    <td className="okTable"> {strings.tableInfo32} </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="divTextNoMargin">
                            <p> {strings.cookie12} </p>
                        </div>
                    </div>
                    <div className="subHeadingCookie"> {strings.heading5}</div>
                    <div className="divText1">
                        <p> {strings.cookie13} </p>
                    </div>

                    <div className="smallHeadingCookie"> {strings.heading6}</div>

                    <div className="divText1">
                        <p> {strings.cookie14} </p>
                    </div>
                    <div className="divText1">
                        <p> <span className="theBoldText">{strings.boldText1}</span> {strings.cookie15} </p>
                        <p> <span className="theBoldText">{strings.boldText2}  </span> {strings.cookie16} </p>
                    </div>
                    <div className="smallHeadingCookie"> {strings.heading7}</div>
                    <div style={{ marginTop: '2vh', fontWeight: 'bold' }}> {strings.GoogleChrome} </div>
                    <div className="internetProviders">
                        <p><ol>
                            <li> {strings.bullet1}</li>
                            <li> {strings.bullet2}</li>
                            <li> {strings.bullet3}</li>
                        </ol> </p>
                    </div>
                    <div style={{ marginTop: '2vh', fontWeight: 'bold' }}> {strings.IE} </div>
                    <div className="internetProviders">
                        <p><ol>
                            <li> {strings.bullet4}</li>
                            <li> {strings.bullet5}</li>
                            <li> {strings.bullet6}</li>
                        </ol> </p>
                    </div>
                    <div style={{ marginTop: '2vh', fontWeight: 'bold' }}> {strings.Mozilla}</div>
                    <div className="internetProviders">
                        <p><ol>
                            <li> {strings.bullet7}</li>
                            <li> {strings.bullet8}</li>
                            <li> {strings.bullet9}</li>
                        </ol> </p>

                    </div>
                    <div style={{ marginTop: '2vh', fontWeight: 'bold' }}> {strings.Safari}</div>
                    <div className="internetProviders">
                        <p><ol>
                            <li> {strings.bullet10}</li>
                            <li> {strings.bullet11}</li>
                            <li> {strings.bullet12}</li>
                        </ol> </p>

                    </div>
                    <div style={{ marginTop: '2vh', fontWeight: 'bold' }}> {strings.Opera} </div>
                    <div className="internetProviders">
                        <p><ol>
                            <li> {strings.bullet13}</li>
                            <li> {strings.bullet14}</li>
                            <li> {strings.bullet15}</li>
                        </ol> </p>

                    </div>
                    <div style={{ marginTop: '2vh', fontWeight: 'bold' }}> {strings.SafariOsx} </div>
                    <div className="internetProviders">
                        <p><ol>
                            <li> {strings.bullet16}</li>
                            <li> {strings.bullet17}</li>
                            <li> {strings.bullet18}</li>
                        </ol> </p>
                    </div>
                    <div className="smallHeadingCookie"> {strings.heading8}</div>
                    <div className="divText1">
                        <p> {strings.cookie17} </p>
                        <div className="smallHeadingCookie"> {strings.heading9}</div>
                        <div className="divText1">     </div>
                        <p>{strings.cookie18} <a href={webLink}> {strings.link} </a> {strings.cookie185} </p>
                    </div>
                    <div className="subHeadingCookie"> {strings.heading10}</div>
                    <div className="divText1"></div>
                    <p> {strings.cookie19} </p>
                    <p> {strings.cookie20} </p>
                    <div className="divText1"></div>
                    <div className="smallHeadingCookie"> {strings.heading11}</div>
                    <div className="divText1"> </div>
                    <p> {strings.cookie21}</p>
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
                {this.privatePolicy()}
            </div>
        )
    }

}