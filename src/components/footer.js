import React from 'react';
import "./footer.css";
import { useTranslation } from 'react-i18next';



const Footer = (props) => {
    const {t} = useTranslation();
    return (
        <>
            <div className="footer">
                <table className='footer-table'>
                    <tbody>
                        <tr className='footer-row'>
                            <td style={{fontWeight:"500"}}>{t("Selected-Date")}</td>
                            <td style={{fontWeight:"500"}}>{t("Slot")}</td>
                            <td style={{fontWeight:"500"}}>{t("Cost")}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className='footer-row'>
                            <th className='data' style={{fontWeight:"700"}}>{props.modelData&&Object.keys(props.modelData).length>=4 ? props.modelData.reqDate.total :<br/>}</th>
                            <th className='data' style={{fontWeight:"700"}}>{props.modelData&&Object.keys(props.modelData).length>=4 ? props.modelData.reqTime.time:<br/>}</th>
                            <th className='data' style={{fontWeight:"700"}}>{props.modelData&&Object.keys(props.modelData).length>=4 ? props.modelData.reqTime.SAR:<br/>}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        
        </>
    )
}

export default Footer
