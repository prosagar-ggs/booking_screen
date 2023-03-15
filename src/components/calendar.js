import "./calender.css";

const Calendar =({data,dateHandler})=>{
    const dateObjectHandler=(item)=>{
        dateHandler(item)
    }
    return(
        <div className='month'>
            <div style={{display:"flex"}}>
                {
                    data.map((curEle) => {   
                        return(
                            <button className='date' key={curEle.id} onClick={()=>dateObjectHandler(curEle)}>
                                    <span>{curEle.day}</span><br/>
                                    <div className='date-month'>
                                        <span>{curEle.date}</span> <span>{curEle.month}</span>
                                    </div><br/>
                                    <span className='arabic'><span>{curEle.iDate}</span> <span>{curEle.iMonth}</span></span>
                            </button>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default Calendar