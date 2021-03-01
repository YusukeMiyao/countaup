import { DialogHTMLAttributes, HtmlHTMLAttributes, JSXElementConstructor } from "react";



export default function diffDate(date: Date) {
    //今の日時
    const nowDate = new Date();
    const nowDateNumber = Number(nowDate)
    //ターゲット日時
    const openDate = new Date(date)
    const openDateNumber = Number(openDate)
    //時差（ミリ秒）
    const diffDate = openDateNumber - nowDateNumber
    // ミリ秒から秒に
    const diffDate_sec = Math.floor(diffDate / 1000)
    console.log(diffDate)

    //分、時、日の秒数
    const Minute_Sec = 60;
    const Hour_Sec = 60 * 60;
    const Day_Sec = 60 * 60 * 24;
    //あと何日  
    const d4_Day = Math.floor(diffDate_sec / Day_Sec);

    //あと何時間
    const d5_Hour = Math.floor(diffDate_sec / Hour_Sec % 24);

    //あと何分
    const d6_Minute = Math.floor(diffDate_sec / Minute_Sec % 60);

    //あと何秒
    const d7_Sec = Math.floor(diffDate_sec % 60);
   
    return (
        < div >
            d4_Day + "日" + d5_Hour + "時間" + d6_Minute + "分" + d7_Sec + "秒！！";
        </div >
    )


}
// //1秒ごとに実行
// setTimeout(diffDays, 1000);

declare namespace JSX {
    interface IntrinsicElements {
        diffDate:any
    }
}
