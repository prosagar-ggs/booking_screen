import React,{useState} from 'react';
import './App.css';
import DatesDays from './components/DatesDays';
import islamicDates from './components/islamicDates';
import Calendar from './components/calendar';
import TableData from './components/TableData';
import Table from "./components/Table";
import Footer from './components/footer';
import i18next from 'i18next';
import { MdDelete } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function App() {
  const [data,setData]= useState(DatesDays);
  const [iData,setIData]=useState(islamicDates);
  const [tableData,setTableData] = useState(TableData);
  const [modelData,setModelData] = useState({});
  const [modelArray,setModelArray]=useState([]);
  const [lang,setLang] = useState("en")
  const {t} = useTranslation();
  const dateHandler=(item)=>{
    setModelData(pre=>({...pre,reqDate:item}))
  }
  const timeHandler=(item)=>{
    setModelData(pre=>({...pre,reqTime:item}))
  }
  const nameHandler=(e)=>{
    setModelData(pre=>({...pre,name:e.target.value}))
  }
  const radioHandler = (e) => {
    setModelData((pre) => ({ ...pre,gender:e.target.value}));
  };
  const modelHandler=()=>{
      if (!modelData.reqDate || !modelData.reqTime || !modelData.name || !modelData.gender) {
        toast.error("Please fill and select all data fields.", { position: toast.POSITION.TOP_CENTER });
        return;
      }
    setModelArray(pre=>[...pre,modelData])
      if(modelArray.length>=5){
        toast.error("No More Booking Slots Availble", { position: toast.POSITION.TOP_CENTER });
        setModelArray(modelArray);
      }
      else{
        toast.success("Booking Slot Added Successfully", { position: toast.POSITION.TOP_CENTER });
        setModelData({})
      }
  }
  const arrayData=()=>{
      console.log(modelArray)
  }
  const handleDelete = (index) => {
      setModelArray(modelArray.filter((value, i) => i !== index));
  };
  const totalAmount = modelArray.reduce((acc, value) => {
    if(value.reqTime){
      const amount = parseInt(value.reqTime.SAR, 10) || parseArabicNumber(value.reqTime.SAR);
      return acc + amount;
    }
    return acc;
  }, 0);
  function parseArabicNumber(numAsString) {
    const numerals = { "٠": 0, "١": 1, "٢": 2, "٣": 3, "٤": 4, "٥": 5, "٦": 6, "٧": 7, "٨": 8, "٩": 9 };
    const numRegex = new RegExp(`[${Object.keys(numerals).join("")}]+`);
    const numStr = numRegex.exec(numAsString)[0];
    return [...numStr].reduce((acc, numeral) => acc * 10 + numerals[numeral], 0);
  } 
  const rtlLanguages = ["ar"]
  function setPageDirection(language) {
    const dir = rtlLanguages.includes(language) ? "rtl" : "ltr"
    document.documentElement.dir = dir
}
  const arabicClick=()=>{
    i18next.changeLanguage("ar")
    setPageDirection("ar")
    setLang("ar")
    setData(iData)
  }
  const englishClick=()=>{
    i18next.changeLanguage("en")
    setPageDirection("en")
    setLang("en")
    setData(DatesDays)
  }
  return (
    <>
    <ToastContainer
    autoClose={2000}
    theme="colored" />
    <div  className="app">
      <div className='part_1'>
        <div className="header">
          <div className="header_1">
            <div className='header_1-1'>
              <label htmlFor='male' className='radio' onChange={radioHandler}>
                <input type='radio' name='gender' id="male" className='radio_button' value={t('gender1')}/>
                <div className='radio__radio'></div>
                {t("gender1")}
              </label>
              <label htmlFor='female' className='radio' onChange={radioHandler}>
                <input type='radio' name='gender' id="female" className='radio_button' value={t('gender2')} />
                <div className='radio__radio'></div>
                {t("gender2")}
              </label>
            </div>
            <input type="text" onChange={nameHandler} placeholder="Enter the Umrah for Name"/><br/>
            <span style={{fontFamily:"Open sans",fontSize:"14px",fontWeight:"600"}}>{t("Selected-Date")}</span><br/>
          </div>
          <div className='header_2'>
            {lang ==="en"
            ?<a onClick={()=>arabicClick()}><img src='../../assets/language-arabic.png' alt='arabic-language'/></a>
            :<a onClick={()=>englishClick()}><img src='../../assets/language-english.png' alt='english-language'/></a>
            }
          </div>
        </div>
        <Calendar data={data} setData={setData} dateHandler={dateHandler}/>
        <Table tableData={tableData} setTableData={setTableData} timeHandler={timeHandler}/>
        <Footer modelData={modelData}/>
        <div style={{background:"#fff",marginTop:"-5px"}}><button className='btn' onClick={modelHandler}>{t("OK")}</button></div>
      </div>
      <div className='part_2'>
        <div className="modal-content">
          <h1>{t("Booking-Summery")}</h1>
            <table>
              <thead>
                <tr style={{color:"white"}}>
                    <th style={{padding:"10px",background:"#696969"}}>{t("Umrah-for-Name")}</th>
                    <th style={{background:"#696969"}}>{t("Slot-Details")}</th>
                    <th style={{background:"#696969"}}>{t("Cost-for-Umrah")}</th>
                    <th style={{background:"#696969"}}></th>
                </tr>
              </thead>
              <tbody>
                {modelArray&&modelArray.length>0&&modelArray.map((value,index)=>
                    <tr key={index}>
                      <td>{value.name}</td>
                      <td>{value.reqDate !== undefined || null ? <span>{value.reqDate.date} {value.reqDate.month} </span>:<br/>}@{value.reqTime !== undefined || null ? value.reqTime.time:<br/>}</td>
                      <td style={{color:"#dcbf2f"}}>{value.reqTime !== undefined || null ? value.reqTime.SAR:<br/>} SAR</td>
                      <td><button style={{border:"none",fontSize:"25px",textAlign:'center',paddingTop:'2px',color:"#e02f2f",cursor:"pointer"}} onClick={()=>handleDelete(index)}> <MdDelete/> </button></td>
                    </tr>
                )}
              </tbody>
            </table>
              <div className="total-row">
                  <div><span>{t("Total")}</span><br/><span style={{textAlign:"center"}}>{modelArray.length} {t("Persons")}</span></div>
                  <div><span>{t("Total-Amount")}</span><br/><span  style={{textAlign:"center"}}>{ totalAmount } SAR</span></div>
              </div><br/>
              <button className='btn' onClick={()=>arrayData()}>{t("Book-Now")}</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
