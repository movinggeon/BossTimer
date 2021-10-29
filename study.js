const { time } = require('console');
const fs = require('fs');
const { generateDependencyReport } = require('@discordjs/voice');

console.log(generateDependencyReport());

// //boss.json

// const bossDataSave = {
//     boss1Name : "홍매화",
//     boss1Time : "2",
//     boss2Name : "거곤",
//     boss2Time : "5",
// }

// fs.writeFileSync('boss.json', JSON.stringify(bossDataSave));

// ////bossDataSave JSON 형태 확인
// // console.log(bossDataSave)

// //특정 값 추출(보스 이름 추출)
// const bossDataBuffer = fs.readFileSync('boss.json', 'utf-8');
// const bossDataJSON = bossDataBuffer.toString();
// const bossData = JSON.parse(bossDataJSON);

// bossDataSave.boss1Name = "ddd"

// // //보스 이름 추출 결과 값
// // console.log(bossData.boss1Name);

// const PATH ='./datas';
// fs.readFile(`${PATH}/boss1.json`,'utf-8',(err,data) => {
//     if(err) throw err;
//     const bossDataJSON = data.toString();
//     const bossData = JSON.parse(bossDataJSON);

//     msg.channel.send(`${bossData.bossName_1} -> ${bossData.bossName_1_afterTime}`);
// });

// const date = new Date();

// let time = 1;
// let hour;
// let min;

// let timeArr= [10,10]

// const today = `${date.getHours()}:${date.getMinutes()}`
// let todayArr = today.split(':');

// console.log(todayArr[0],todayArr[1])


// var timer = setInterval(() => {
//     min = timeArr[1]+time;
//     console.log(min);
//     time++;

//     if(min == 20){
//         clearTimeout(timer);
//         console.log('시간초과')
//     }
// }, 10);

// const date = new Date();

// let sec = date.getSeconds();
// let secCount;
// let standardTime = 0;

// var timer = setInterval(() => {
//     secCount = sec+standardTime;
//     console.log(secCount);
    
//     if(secCount === 60){
//         clearTimeout(timer);
//         console.log('종료');
//     }
//     standardTime++;
// }, 1000);
