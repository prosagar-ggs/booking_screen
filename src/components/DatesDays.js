import moment from "moment";
function hijriDate(i){
    let date =new Date();
    date.setDate(date.getDate()+i)
    let lang = 'en';
    let islam=date.toLocaleString(lang + '-u-ca-islamic-umalqura',  {day: 'numeric'})
    let a=islam.split(" ").reverse().join(" ")
    return a
}
function hijriMonth(i){
    let date =new Date();
    date.setDate(date.getDate()+i)
    let lang = 'en';
    let islam=date.toLocaleString(lang + '-u-ca-islamic-umalqura',  {month: 'long'})
    let a=islam.split(" ").reverse().join(" ")
    return a
}
function hijriYear(i){
    let date =new Date();
    date.setDate(date.getDate()+i)
    let lang = 'en';
    let islam=date.toLocaleString(lang + '-u-ca-islamic-umalqura', {day:"numeric",month: 'long',year:"numeric"})
    let a=islam.split(" ").reverse().join(" ")
    return a
}


const DatesDays=[
    
    {
        id:1,
        day:moment().format("dddd"),
        date:moment().format('D'),
        month:moment().format('MMMM'),
        total:moment().format("D MMMM YYYY"),
        iDate:hijriDate(0),
        iMonth:hijriMonth(0),
        iYear:hijriYear(0)
    },
    {
        id:2,
        day:moment().add(1, 'days').format("dddd"),
        date:moment().add(1, 'days').format('D'),
        month:moment().add(1, 'days').format('MMMM'),
        total:moment().add(1, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(1),
        iMonth:hijriMonth(1),
        iYear:hijriYear(1)
    },
    {
        id:3,
        day:moment().add(2, 'days').format("dddd"),
        date:moment().add(2, 'days').format('D'),
        month:moment().add(2, 'days').format('MMMM'),
        total:moment().add(2, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(2),
        iMonth:hijriMonth(2),
        iYear:hijriYear(2)

    },
    {
        id:4,
        day:moment().add(3, 'days').format("dddd"),
        date:moment().add(3, 'days').format('D'),
        month:moment().add(3, 'days').format('MMMM'),
        total:moment().add(3, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(3),
        iMonth:hijriMonth(3),
        iYear:hijriYear(3)
    },
    {
        id:5,
        day:moment().add(4, 'days').format("dddd"),
        date:moment().add(4, 'days').format('D'),
        month:moment().add(4, 'days').format('MMMM'),
        total:moment().add(4, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(4),
        iMonth:hijriMonth(4),
        iYear:hijriYear(4)
    },
    {
        id:6,
        day:moment().add(5, 'days').format("dddd"),
        date:moment().add(5, 'days').format('D'),
        month:moment().add(5, 'days').format('MMMM'),
        total:moment().add(5, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(5),
        iMonth:hijriMonth(5),
        iYear:hijriYear(5)
    },
    {
        id:7,
        day:moment().add(6, 'days').format("dddd"),
        date:moment().add(6, 'days').format('D'),
        month:moment().add(6, 'days').format('MMMM'),
        total:moment().add(6, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(6),
        iMonth:hijriMonth(6),
        iYear:hijriYear(6)
    },
    {
        id:8,
        day:moment().add(7, 'days').format("dddd"),
        date:moment().add(7, 'days').format('D'),
        month:moment().add(7, 'days').format('MMMM'),
        total:moment().add(7, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(7),
        iMonth:hijriMonth(7),
        iYear:hijriYear(7)
    },
    {
        id:9,
        day:moment().add(8, 'days').format("dddd"),
        date:moment().add(8, 'days').format('D'),
        month:moment().add(8, 'days').format("MMMM"),
        total:moment().add(8, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(8),
        iMonth:hijriMonth(8),
        iYear:hijriYear(8)
    },
    {
        id:10,
        day:moment().add(9, 'days').format("dddd"),
        date:moment().add(9, 'days').format('D'),
        month:moment().add(9, 'days').format('MMMM'),
        total:moment().add(9, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(9),
        iMonth:hijriMonth(9),
        iYear:hijriYear(9)
    },
    {
        id:11,
        day:moment().add(10, 'days').format("dddd"),
        date:moment().add(10, 'days').format('D'),
        month:moment().add(10, 'days').format('MMMM'),
        total:moment().add(10, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(10),
        iMonth:hijriMonth(10),
        iYear:hijriYear(10)
    },
    {
        id:12,
        day:moment().add(11, 'days').format("dddd"),
        date:moment().add(11, 'days').format('D'),
        month:moment().add(11, 'days').format('MMMM'),
        total:moment().add(11, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(11),
        iMonth:hijriMonth(11),
        iYear:hijriYear(11)
    },
    {
        id:13,
        day:moment().add(12, 'days').format("dddd"),
        date:moment().add(12, 'days').format('D'),
        month:moment().add(12, 'days').format('MMMM'),
        total:moment().add(12, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(12),
        iMonth:hijriMonth(12),
        iYear:hijriYear(12)
    },
    {
        id:14,
        day:moment().add(13, 'days').format("dddd"),
        date:moment().add(13, 'days').format('D'),
        month:moment().add(13, 'days').format('MMMM'),
        total:moment().add(13, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(13),
        iMonth:hijriMonth(13),
        iYear:hijriYear(13)
    },
    {
        id:15,
        day:moment().add(14, 'days').format("dddd"),
        date:moment().add(14, 'days').format('D'),
        month:moment().add(14, 'days').format('MMMM'),
        total:moment().add(14, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(14),
        iMonth:hijriMonth(14),
        iYear:hijriYear(14)
    },
    {
        id:16,
        day:moment().add(15, 'days').format("dddd"),
        date:moment().add(15, 'days').format('D'),
        month:moment().add(15, 'days').format('MMMM'),
        total:moment().add(15, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(15),
        iMonth:hijriMonth(15),
        iYear:hijriYear(15)
    },
    {
        id:17,
        day:moment().add(16, 'days').format("dddd"),
        date:moment().add(16, 'days').format('D'),
        month:moment().add(16, 'days').format('MMMM'),
        total:moment().add(16, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(16),
        iMonth:hijriMonth(16),
        iYear:hijriYear(16)
    },
    {
        id:18,
        day:moment().add(17, 'days').format("dddd"),
        date:moment().add(17, 'days').format('D'),
        month:moment().add(17, 'days').format('MMMM'),
        total:moment().add(17, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(17),
        iMonth:hijriMonth(17),
        iYear:hijriYear(17)
    },
    {
        id:19,
        day:moment().add(18, 'days').format("dddd"),
        date:moment().add(18, 'days').format('D'),
        month:moment().add(18, 'days').format('MMMM'),
        total:moment().add(18, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(18),
        iMonth:hijriMonth(18),
        iYear:hijriYear(18)
    },
    {
        id:20,
        day:moment().add(19, 'days').format("dddd"),
        date:moment().add(19, 'days').format('D'),
        month:moment().add(19, 'days').format('MMMM'),
        total:moment().add(19, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(19),
        iMonth:hijriMonth(19),
        iYear:hijriYear(19)
    },
    {
        id:21,
        day:moment().add(20, 'days').format("dddd"),
        date:moment().add(20, 'days').format('D'),
        month:moment().add(20, 'days').format('MMMM'),
        total:moment().add(20, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(20),
        iMonth:hijriMonth(20),
        iYear:hijriYear(20)
    },
    {
        id:22,
        day:moment().add(21, 'days').format("dddd"),
        date:moment().add(21, 'days').format('D'),
        month:moment().add(21, 'days').format('MMMM'),
        total:moment().add(21, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(21),
        iMonth:hijriMonth(21),
        iYear:hijriYear(21)
    },
    {
        id:23,
        day:moment().add(22, 'days').format("dddd"),
        date:moment().add(22, 'days').format('D'),
        month:moment().add(22, 'days').format('MMMM'),
        total:moment().add(22, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(22),
        iMonth:hijriMonth(22),
        iYear:hijriYear(22)
    },
    {
        id:24,
        day:moment().add(23, 'days').format("dddd"),
        date:moment().add(23, 'days').format('D'),
        month:moment().add(23, 'days').format('MMMM'),
        total:moment().add(23, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(23),
        iMonth:hijriMonth(23),
        iYear:hijriYear(23)
    },
    {
        id:25,
        day:moment().add(24, 'days').format("dddd"),
        date:moment().add(24, 'days').format('D'),
        month:moment().add(24, 'days').format('MMMM'),
        total:moment().add(24, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(24),
        iMonth:hijriMonth(24),
        iYear:hijriYear(24)
    },
    {
        id:26,
        day:moment().add(25, 'days').format("dddd"),
        date:moment().add(25, 'days').format('D'),
        month:moment().add(25, 'days').format('MMMM'),
        total:moment().add(25, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(25),
        iMonth:hijriMonth(25),
        iYear:hijriYear(25)
    },
    {
        id:27,
        day:moment().add(26, 'days').format("dddd"),
        date:moment().add(26, 'days').format('D'),
        month:moment().add(26, 'days').format('MMMM'),
        total:moment().add(26, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(26),
        iMonth:hijriMonth(26),
        iYear:hijriYear(26)
    },
    {
        id:28,
        day:moment().add(27, 'days').format("dddd"),
        date:moment().add(27, 'days').format('D'),
        month:moment().add(27, 'days').format('MMMM'),
        total:moment().add(27, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(27),
        iMonth:hijriMonth(27),
        iYear:hijriYear(27)
    },
    {
        id:29,
        day:moment().add(28, 'days').format("dddd"),
        date:moment().add(28, 'days').format('D'),
        month:moment().add(28, 'days').format('MMMM'),
        total:moment().add(28, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(28),
        iMonth:hijriMonth(28),
        iYear:hijriYear(28)
    },
    {
        id:30,
        day:moment().add(29, 'days').format("dddd"),
        date:moment().add(29, 'days').format('D'),
        month:moment().add(29, 'days').format('MMMM'),
        total:moment().add(29, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(29),
        iMonth:hijriMonth(29),
        iYear:hijriYear(29)
    },
    {
        id:31,
        day:moment().add(30, 'days').format("dddd"),
        date:moment().add(30, 'days').format('D'),
        month:moment().add(30, 'days').format('MMMM'),
        total:moment().add(30, 'days').format("D MMMM YYYY"),
        iDate:hijriDate(30),
        iMonth:hijriMonth(30),
        iYear:hijriYear(30)
    }
]

export default DatesDays