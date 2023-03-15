import moment from "moment-hijri";
import "moment/locale/ar";

function arab(i){
    let date =new Date();
    date.setDate(date.getDate()+i)
    let islam=date.toLocaleDateString('ar-u-ca-islamic',{month: 'long'})
    return islam
}

const islamicDates=[
    
    {
        id:1,
        day:moment().format("dddd"),
        date:moment().format('D'),
        month:moment().format('MMMM'),
        total:moment().format("D MMMM YYYY"),
        iDate:moment().format('iD'),
        iMonth:arab(0),
        iYear:moment().format("iD iMMMM iYYYY")
    },
    {
        id:2,
        day:moment().add(1, 'days').format("dddd"),
        date:moment().add(1, 'days').format('D'),
        month:moment().add(1, 'days').format('MMMM'),
        total:moment().add(1, 'days').format("D MMMM YYYY"),
        iDate:moment().add(1, 'days').format('iD'),
        iMonth:arab(1),
        iYear:moment().add(1,"days").format("iD iMMMM iYYYY")
    },
    {
        id:3,
        day:moment().add(2, 'days').format("dddd"),
        date:moment().add(2, 'days').format('D'),
        month:moment().add(2, 'days').format('MMMM'),
        total:moment().add(2, 'days').format("D MMMM YYYY"),
        iDate:moment().add(2, 'days').format('iD'),
        iMonth:arab(2),
        iYear:moment().add(2,"days").format("iD iMMMM iYYYY")
    },
    {
        id:4,
        day:moment().add(3, 'days').format("dddd"),
        date:moment().add(3, 'days').format('D'),
        month:moment().add(3, 'days').format('MMMM'),
        total:moment().add(3, 'days').format("D MMMM YYYY"),
        iDate:moment().add(3, 'days').format('iD'),
        iMonth:arab(3),
        iYear:moment().add(3,"days").format("iD iMMMM iYYYY")
    },
    {
        id:5,
        day:moment().add(4, 'days').format("dddd"),
        date:moment().add(4, 'days').format('D'),
        month:moment().add(4, 'days').format('MMMM'),
        total:moment().add(4, 'days').format("D MMMM YYYY"),
        iDate:moment().add(4, 'days').format('iD'),
        iMonth:arab(4),
        iYear:moment().add(4,"days").format("iD iMMMM iYYYY")
    },
    {
        id:6,
        day:moment().add(5, 'days').format("dddd"),
        date:moment().add(5, 'days').format('D'),
        month:moment().add(5, 'days').format('MMMM'),
        total:moment().add(5, 'days').format("D MMMM YYYY"),
        iDate:moment().add(5, 'days').format('iD'),
        iMonth:arab(5),
        iYear:moment().add(5,"days").format("iD iMMMM iYYYY")
    },
    {
        id:7,
        day:moment().add(6, 'days').format("dddd"),
        date:moment().add(6, 'days').format('D'),
        month:moment().add(6, 'days').format('MMMM'),
        total:moment().add(6, 'days').format("D MMMM YYYY"),
        iDate:moment().add(6, 'days').format('iD'),
        iMonth:arab(6),
        iYear:moment().add(6,"days").format("iD iMMMM iYYYY")
    },
    {
        id:8,
        day:moment().add(7, 'days').format("dddd"),
        date:moment().add(7, 'days').format('D'),
        month:moment().add(7, 'days').format('MMMM'),
        total:moment().add(7, 'days').format("D MMMM YYYY"),
        iDate:moment().add(7, 'days').format('iD'),
        iMonth:arab(7),
        iYear:moment().add(7,"days").format("iD iMMMM iYYYY")
    },
    {
        id:9,
        day:moment().add(8, 'days').format("dddd"),
        date:moment().add(8, 'days').format('D'),
        month:moment().add(8, 'days').format("MMMM"),
        total:moment().add(8, 'days').format("D MMMM YYYY"),
        iDate:moment().add(8, 'days').format('iD'),
        iMonth:arab(8),
        iYear:moment().add(8,"days").format("iD iMMMM iYYYY")
    },
    {
        id:10,
        day:moment().add(9, 'days').format("dddd"),
        date:moment().add(9, 'days').format('D'),
        month:moment().add(9, 'days').format('MMMM'),
        total:moment().add(9, 'days').format("D MMMM YYYY"),
        iDate:moment().add(9, 'days').format('iD'),
        iMonth:arab(9),
        iYear:moment().add(9,"days").format("iD iMMMM iYYYY")
    },
    {
        id:11,
        day:moment().add(10, 'days').format("dddd"),
        date:moment().add(10, 'days').format('D'),
        month:moment().add(10, 'days').format('MMMM'),
        total:moment().add(10, 'days').format("D MMMM YYYY"),
        iDate:moment().add(10, 'days').format('iD'),
        iMonth:arab(10),
        iYear:moment().add(10,"days").format("iD iMMMM iYYYY")
    },
    {
        id:12,
        day:moment().add(11, 'days').format("dddd"),
        date:moment().add(11, 'days').format('D'),
        month:moment().add(11, 'days').format('MMMM'),
        total:moment().add(11, 'days').format("D MMMM YYYY"),
        iDate:moment().add(11, 'days').format('iD'),
        iMonth:arab(11),
        iYear:moment().add(11,"days").format("iD iMMMM iYYYY")
    },
    {
        id:13,
        day:moment().add(12, 'days').format("dddd"),
        date:moment().add(12, 'days').format('D'),
        month:moment().add(12, 'days').format('MMMM'),
        total:moment().add(12, 'days').format("D MMMM YYYY"),
        iDate:moment().add(12, 'days').format('iD'),
        iMonth:arab(12),
        iYear:moment().add(12,"days").format("iD iMMMM iYYYY")
    },
    {
        id:14,
        day:moment().add(13, 'days').format("dddd"),
        date:moment().add(13, 'days').format('D'),
        month:moment().add(13, 'days').format('MMMM'),
        total:moment().add(13, 'days').format("D MMMM YYYY"),
        iDate:moment().add(13, 'days').format('iD'),
        iMonth:arab(13),
        iYear:moment().add(13,"days").format("iD iMMMM iYYYY")
    },
    {
        id:15,
        day:moment().add(14, 'days').format("dddd"),
        date:moment().add(14, 'days').format('D'),
        month:moment().add(14, 'days').format('MMMM'),
        total:moment().add(14, 'days').format("D MMMM YYYY"),
        iDate:moment().add(14, 'days').format('iD'),
        iMonth:arab(14),
        iYear:moment().add(14,"days").format("iD iMMMM iYYYY")
    },
    {
        id:16,
        day:moment().add(15, 'days').format("dddd"),
        date:moment().add(15, 'days').format('D'),
        month:moment().add(15, 'days').format('MMMM'),
        total:moment().add(15, 'days').format("D MMMM YYYY"),
        iDate:moment().add(15, 'days').format('iD'),
        iMonth:arab(15),
        iYear:moment().add(15,"days").format("iD iMMMM iYYYY")
    },
    {
        id:17,
        day:moment().add(16, 'days').format("dddd"),
        date:moment().add(16, 'days').format('D'),
        month:moment().add(16, 'days').format('MMMM'),
        total:moment().add(16, 'days').format("D MMMM YYYY"),
        iDate:moment().add(16, 'days').format('iD'),
        iMonth:arab(16),
        iYear:moment().add(16,"days").format("iD iMMMM iYYYY")
    },
    {
        id:18,
        day:moment().add(17, 'days').format("dddd"),
        date:moment().add(17, 'days').format('D'),
        month:moment().add(17, 'days').format('MMMM'),
        total:moment().add(17, 'days').format("D MMMM YYYY"),
        iDate:moment().add(17, 'days').format('iD'),
        iMonth:arab(17),
        iYear:moment().add(17,"days").format("iD iMMMM iYYYY")
    },
    {
        id:19,
        day:moment().add(18, 'days').format("dddd"),
        date:moment().add(18, 'days').format('D'),
        month:moment().add(18, 'days').format('MMMM'),
        total:moment().add(18, 'days').format("D MMMM YYYY"),
        iDate:moment().add(18, 'days').format('iD'),
        iMonth:arab(18),
        iYear:moment().add(18,"days").format("iD iMMMM iYYYY")
    },
    {
        id:20,
        day:moment().add(19, 'days').format("dddd"),
        date:moment().add(19, 'days').format('D'),
        month:moment().add(19, 'days').format('MMMM'),
        total:moment().add(19, 'days').format("D MMMM YYYY"),
        iDate:moment().add(19, 'days').format('iD'),
        iMonth:arab(19),
        iYear:moment().add(19,"days").format("iD iMMMM iYYYY")
    },
    {
        id:21,
        day:moment().add(20, 'days').format("dddd"),
        date:moment().add(20, 'days').format('D'),
        month:moment().add(20, 'days').format('MMMM'),
        total:moment().add(20, 'days').format("D MMMM YYYY"),
        iDate:moment().add(20, 'days').format('iD'),
        iMonth:arab(20),
        iYear:moment().add(20,"days").format("iD iMMMM iYYYY")
    },
    {
        id:22,
        day:moment().add(21, 'days').format("dddd"),
        date:moment().add(21, 'days').format('D'),
        month:moment().add(21, 'days').format('MMMM'),
        total:moment().add(21, 'days').format("D MMMM YYYY"),
        iDate:moment().add(21, 'days').format('iD'),
        iMonth:arab(21),
        iYear:moment().add(21,"days").format("iD iMMMM iYYYY")
    },
    {
        id:23,
        day:moment().add(22, 'days').format("dddd"),
        date:moment().add(22, 'days').format('D'),
        month:moment().add(22, 'days').format('MMMM'),
        total:moment().add(22, 'days').format("D MMMM YYYY"),
        iDate:moment().add(22, 'days').format('iD'),
        iMonth:arab(22),
        iYear:moment().add(22,"days").format("iD iMMMM iYYYY")
    },
    {
        id:24,
        day:moment().add(23, 'days').format("dddd"),
        date:moment().add(23, 'days').format('D'),
        month:moment().add(23, 'days').format('MMMM'),
        total:moment().add(23, 'days').format("D MMMM YYYY"),
        iDate:moment().add(23, 'days').format('iD'),
        iMonth:arab(23),
        iYear:moment().add(23,"days").format("iD iMMMM iYYYY")
    },
    {
        id:25,
        day:moment().add(24, 'days').format("dddd"),
        date:moment().add(24, 'days').format('D'),
        month:moment().add(24, 'days').format('MMMM'),
        total:moment().add(24, 'days').format("D MMMM YYYY"),
        iDate:moment().add(24, 'days').format('iD'),
        iMonth:arab(24),
        iYear:moment().add(24,"days").format("iD iMMMM iYYYY")
    },
    {
        id:26,
        day:moment().add(25, 'days').format("dddd"),
        date:moment().add(25, 'days').format('D'),
        month:moment().add(25, 'days').format('MMMM'),
        total:moment().add(25, 'days').format("D MMMM YYYY"),
        iDate:moment().add(25, 'days').format('iD'),
        iMonth:arab(25),
        iYear:moment().add(25,"days").format("iD iMMMM iYYYY")
    },
    {
        id:27,
        day:moment().add(26, 'days').format("dddd"),
        date:moment().add(26, 'days').format('D'),
        month:moment().add(26, 'days').format('MMMM'),
        total:moment().add(26, 'days').format("D MMMM YYYY"),
        iDate:moment().add(26, 'days').format('iD'),
        iMonth:arab(26),
        iYear:moment().add(26,"days").format("iD iMMMM iYYYY")
    },
    {
        id:28,
        day:moment().add(27, 'days').format("dddd"),
        date:moment().add(27, 'days').format('D'),
        month:moment().add(27, 'days').format('MMMM'),
        total:moment().add(27, 'days').format("D MMMM YYYY"),
        iDate:moment().add(27, 'days').format('iD'),
        iMonth:arab(27),
        iYear:moment().add(27,"days").format("iD iMMMM iYYYY")
    },
    {
        id:29,
        day:moment().add(28, 'days').format("dddd"),
        date:moment().add(28, 'days').format('D'),
        month:moment().add(28, 'days').format('MMMM'),
        total:moment().add(28, 'days').format("D MMMM YYYY"),
        iDate:moment().add(28, 'days').format('iD'),
        iMonth:arab(28),
        iYear:moment().add(28,"days").format("iD iMMMM iYYYY")
    },
    {
        id:30,
        day:moment().add(29, 'days').format("dddd"),
        date:moment().add(29, 'days').format('D'),
        month:moment().add(29, 'days').format('MMMM'),
        total:moment().add(29, 'days').format("D MMMM YYYY"),
        iDate:moment().add(29, 'days').format('iD'),
        iMonth:arab(29),
        iYear:moment().add(29,"days").format("iD iMMMM iYYYY")
    },
    {
        id:31,
        day:moment().add(30, 'days').format("dddd"),
        date:moment().add(30, 'days').format('D'),
        month:moment().add(30, 'days').format('MMMM'),
        total:moment().add(30, 'days').format("D MMMM YYYY"),
        iDate:moment().add(30, 'days').format('iD'),
        iMonth:arab(30),
        iYear:moment().add(30,"days").format("iD iMMMM iYYYY")
    }
    
]

export default islamicDates