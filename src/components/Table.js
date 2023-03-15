import React from 'react';
import "./Table.css";
import { useTranslation } from 'react-i18next';

const Table = ({timeHandler}) => {

    const timeObjectHandler=(item)=>{
        timeHandler(item)
    }
    const { t,ready } = useTranslation();
    if (!ready) return 'loading translations...';
    const TableData = t("TableData", { returnObjects: true });
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th style={{fontWeight:"500"}}>{t("Local-time")}</th>
                        <th style={{fontWeight:"500"}}>{t("Available")}</th>
                        <th className='money'>{t("SAR")}</th>
                    </tr>
                </tbody>
                <tbody>
                {
                    TableData.map((table)=>{
                        return(
                            <tr className='table-data' tabIndex={1} key={table.id} onClick={()=>timeObjectHandler(table)}>
                                <td className='data'>{table.time}</td>
                                <td className='data'>{table.available}</td>
                                <td className='money data'>{table.SAR}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
                
            </table>
        
        </>
    )
}

export default Table
