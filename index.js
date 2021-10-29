const Discord = require('discord.js');
const fs = require('fs');
const voiceDiscord = require('@discordjs/voice');
const { setInterval } = require('timers');

const client = new Discord.Client({ intends: 32767 });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.author.bot) return;// 무한반복 방지 코드
    if(msg.author.id === client.user.id) return;//로그인한 봇으로 채팅입력 방지

    //각 보스 젠 타임
    const bossName_1_genTime = 9;
    const bossName_2_genTime = 3;
    const bossName_3_genTime = 4;
    const bossName_4_genTime = 5;
    const bossName_5_genTime = 6;
    const bossName_6_genTime = 9;
    const bossName_7_genTime = 7;
    const bossName_8_genTime = 4;

    //version1.홍매화,모순학,거곤,굴락,녹력대귀,백화렴
    //version2.대인면충, 돌주먹
    //version3.모순학 -> 협순학으로 바꾸고, 바순학, 샘순학, 강철악
    //JSON으로 정리할 데이터
    const bossDataSave_1 = {
        bossName_1 : "홍매화",//보스 이름
        bossName_1_afterTime : "",//각 보스 다음에 나오는 시간
        boss1_hour: "",
        boss1_min: "",
        boss1_hourCount: "",
        boss1_minCount: "",
    }

    const bossDataSave_2 = {
        bossName_2 : "모순학",
        bossName_2_afterTime : "",
        boss2_hour: "",
        boss2_min: "",
        boss2_hourCount: "",
        boss2_minCount: "",
    }

    const bossDataSave_3 = {
        bossName_3 : "거곤",
        bossName_3_afterTime : "",
        boss3_hour: "",
        boss3_min: "",
        boss3_hourCount: "",
        boss3_minCount: "",
    }

    const bossDataSave_4 = {
        bossName_4 : "굴락",
        bossName_4_afterTime : "",
        boss4_hour: "",
        boss4_min: "",
        boss4_hourCount: "",
        boss4_minCount: "",
    }

    const bossDataSave_5 = {
        bossName_5 : "녹력대귀",
        bossName_5_afterTime : "",
        boss5_hour: "",
        boss5_min: "",
        boss5_hourCount: "",
        boss5_minCount: "",
    }
    const bossDataSave_6 = {
        bossName_6 : "백화렴",
        bossName_6_afterTime : "",
        boss6_hour: "",
        boss6_min: "",
        boss6_hourCount: "",
        boss6_minCount: "",
    }
    const bossDataSave_7 = {
        bossName_7 : "대인면충",
        bossName_7_afterTime : "",
        boss7_hour: "",
        boss7_min: "",
        boss7_hourCount: "",
        boss7_minCount: "",
    }
    const bossDataSave_8 = {
        bossName_8 : "돌주먹",
        bossName_8_afterTime : "",
        boss8_hour: "",
        boss8_min: "",
        boss8_hourCount: "",
        boss8_minCount: "",
    }

    //테스트
    //불러오기
    if(msg.content === "!보탐"){
        msg.channel.send('불러오는중~잠시만 기다려주세요!');
        msg.channel.send('...');

        //특정 값 추출(보스 이름 추출)
        //홍매화
        const boss1DataBuffer = fs.readFileSync('./datas/boss1.json', 'utf-8');
        const boss1DataJSON = boss1DataBuffer.toString();
        const boss1Data = JSON.parse(boss1DataJSON);

        const boss2DataBuffer = fs.readFileSync('./datas/boss2.json', 'utf-8');
        const boss2DataJSON = boss2DataBuffer.toString();
        const boss2Data = JSON.parse(boss2DataJSON);

        const boss3DataBuffer = fs.readFileSync('./datas/boss3.json', 'utf-8');
        const boss3DataJSON = boss3DataBuffer.toString();
        const boss3Data = JSON.parse(boss3DataJSON);

        const boss4DataBuffer = fs.readFileSync('./datas/boss4.json', 'utf-8');
        const boss4DataJSON = boss4DataBuffer.toString();
        const boss4Data = JSON.parse(boss4DataJSON);

        const boss5DataBuffer = fs.readFileSync('./datas/boss5.json', 'utf-8');
        const boss5DataJSON = boss5DataBuffer.toString();
        const boss5Data = JSON.parse(boss5DataJSON);

        const boss6DataBuffer = fs.readFileSync('./datas/boss6.json', 'utf-8');
        const boss6DataJSON = boss6DataBuffer.toString();
        const boss6Data = JSON.parse(boss6DataJSON);

        const boss7DataBuffer = fs.readFileSync('./datas/boss7.json', 'utf-8');
        const boss7DataJSON = boss7DataBuffer.toString();
        const boss7Data = JSON.parse(boss7DataJSON);

        const boss8DataBuffer = fs.readFileSync('./datas/boss8.json', 'utf-8');
        const boss8DataJSON = boss8DataBuffer.toString();
        const boss8Data = JSON.parse(boss8DataJSON);

        const bosstimeArr = [boss1Data.bossName_1_afterTime,
                             boss2Data.bossName_2_afterTime,
                             boss3Data.bossName_3_afterTime,
                             boss4Data.bossName_4_afterTime,
                             boss5Data.bossName_5_afterTime,
                             boss6Data.bossName_6_afterTime,
                             boss7Data.bossName_7_afterTime,
                             boss8Data.bossName_8_afterTime]

        const bossNameArr = [boss1Data.bossName_1,
                             boss2Data.bossName_2,
                             boss3Data.bossName_3,
                             boss4Data.bossName_4,
                             boss5Data.bossName_5,
                             boss6Data.bossName_6,
                             boss7Data.bossName_7,
                             boss8Data.bossName_8
                            ]
      
        const bossSearch = [[boss1Data.bossName_1,boss1Data.bossName_1_afterTime],
                            [boss2Data.bossName_2,boss2Data.bossName_2_afterTime],
                            [boss3Data.bossName_3,boss3Data.bossName_3_afterTime],
                            [boss4Data.bossName_4,boss4Data.bossName_4_afterTime],
                            [boss5Data.bossName_5,boss5Data.bossName_5_afterTime],
                            [boss6Data.bossName_6,boss6Data.bossName_6_afterTime],
                            [boss7Data.bossName_7,boss7Data.bossName_7_afterTime],
                            [boss8Data.bossName_8,boss8Data.bossName_8_afterTime]
                        ]
        
        let sortArr = bosstimeArr.sort();
        let saveName = new Array(bossSearch.length);

        for(let i=0;i<bossSearch.length;i++){
            for(let k=0;k<bossSearch.length;k++){
                if(k != 0 && (sortArr[i-1] == bossSearch[k][1])){
                    continue;
                }
                if(sortArr[i] == bossSearch[k][1]){
                    saveName[i] = bossSearch[k][0];
                }
            }
        }

        // for(let i=0;i<bossSearch.length;i++){
        //     msg.channel.send('```'+`${saveName[i]} -> ${sortArr[i]}`+'```');
        // }

        //보스 8까지 있음(인덱스 7까지 사용)
        msg.channel.send('```'+`
        ${saveName[0]} -> ${sortArr[0]}
        ${saveName[1]} -> ${sortArr[1]}
        ${saveName[2]} -> ${sortArr[2]}
        ${saveName[3]} -> ${sortArr[3]}
        ${saveName[4]} -> ${sortArr[4]}
        ${saveName[5]} -> ${sortArr[5]}
        ${saveName[6]} -> ${sortArr[6]}
        ${saveName[7]} -> ${sortArr[7]}`
        +'```');


        // for(let i=0;i<arrResult.length;i++){
        //     for(let k=0;k<bosstimeArr.length;k++){
        //         if(arrResult[i] == bosstimeArr[k]){
        //             msg.channel.send(`${bossNameArr[k]} -> ${arrResult[k]}`)
        //         }
        //     }
        // }

    }

    //!(보스이름)컷 기능
    //홍매화
    try{
        if(msg.content.startsWith("!홍매화컷 ")){
                const fristData = msg.content.split(" ");
                const arr=fristData[1].split(":");
                const result_1 = parseInt(arr[0]);
                const result_2 = parseInt(arr[1]);

                if(result_1+bossName_1_genTime >= 24){
                    bossDataSave_1.bossName_1_afterTime = `${(result_1+bossName_1_genTime)%24}:${result_2}`
                }else{
                    bossDataSave_1.bossName_1_afterTime = `${result_1+bossName_1_genTime}:${result_2}`
                }
                msg.reply(`홍매화 컷...=> ${bossDataSave_1.bossName_1_afterTime}`);
                //...다음 예상 출현 시간
            //업데이트
            fs.writeFile('./datas/boss1.json', JSON.stringify(bossDataSave_1),'utf-8',(err) => {
                if(err) throw err
                else console.log('홍매화컷 저장성공!')
            })
        }
    }catch(e){
        console.log('에러')
    }
    //모순학
    try{
        if(msg.content.startsWith("!모순학컷 ")){
            const fristData = msg.content.split(" ");
            const arr=fristData[1].split(":");
            const result_1 = parseInt(arr[0]);
            const result_2 = parseInt(arr[1]);

            if(result_1+bossName_2_genTime >= 24){
                bossDataSave_2.bossName_2_afterTime = `${(result_1+bossName_2_genTime)%24}:${result_2}`
            }else{
                bossDataSave_2.bossName_2_afterTime = `${result_1+bossName_2_genTime}:${result_2}`
            }
            msg.reply(`모순학 컷...다음 예상 출현 시간 => ${bossDataSave_2.bossName_2_afterTime}`);

            fs.writeFile('./datas/boss2.json', JSON.stringify(bossDataSave_2),'utf-8',(err) => {
                if(err) throw err
                else console.log('모순학컷 저장성공!')
            })
        }
    }catch(e){
        console.log(e);
    }
        
    //거곤
    try{
        if(msg.content.startsWith("!거곤컷 ")){
            const fristData = msg.content.split(" ");
            const arr=fristData[1].split(":");
            const result_1 = parseInt(arr[0]);
            const result_2 = parseInt(arr[1]);

            if(result_1+bossName_3_genTime >= 24){
                bossDataSave_3.bossName_3_afterTime = `${(result_1+bossName_3_genTime)%24}:${result_2}`
            }else{
                bossDataSave_3.bossName_3_afterTime = `${result_1+bossName_3_genTime}:${result_2}`
            }
            msg.reply(`거곤 컷...다음 예상 출현 시간 => ${bossDataSave_3.bossName_3_afterTime}`);

            fs.writeFile('./datas/boss3.json', JSON.stringify(bossDataSave_3),'utf-8',(err) => {
                if(err) throw err
                else console.log('거곤컷 저장성공!')
            })
        }
    }catch(e){
        console.log(e);
    }
    //굴락
    try{
        if(msg.content.startsWith("!굴락컷 ")){
            const fristData = msg.content.split(" ");
            const arr=fristData[1].split(":");
            const result_1 = parseInt(arr[0]);
            const result_2 = parseInt(arr[1]);

            if(result_1+bossName_4_genTime >= 24){
                bossDataSave_4.bossName_4_afterTime = `${(result_1+bossName_4_genTime)%24}:${result_2}`
            }else{
                bossDataSave_4.bossName_4_afterTime = `${result_1+bossName_4_genTime}:${result_2}`
            }
            msg.reply(`굴락 컷...다음 예상 출현 시간 => ${bossDataSave_4.bossName_4_afterTime}`);

            fs.writeFile('./datas/boss4.json', JSON.stringify(bossDataSave_4),'utf-8',(err) => {
                if(err) throw err
                else console.log('굴락컷 저장성공!')
            })
        }
    }catch(e){
        console.log(e)
    }
    //녹력대귀
    try{
        if(msg.content.startsWith("!녹력대귀컷 ")){
            const fristData = msg.content.split(" ");
            const arr=fristData[1].split(":");
            const result_1 = parseInt(arr[0]);
            const result_2 = parseInt(arr[1]);

            if(result_1+bossName_5_genTime >= 24){
                bossDataSave_5.bossName_5_afterTime = `${(result_1+bossName_5_genTime)%24}:${result_2}`
            }else{
                bossDataSave_5.bossName_5_afterTime = `${result_1+bossName_5_genTime}:${result_2}`
            }
            msg.reply(`녹력대귀 컷...다음 예상 출현 시간 => ${bossDataSave_5.bossName_5_afterTime}`);

            fs.writeFile('./datas/boss5.json', JSON.stringify(bossDataSave_5),'utf-8',(err) => {
                if(err) throw err
                else console.log('녹력대귀컷 저장성공!')
            })
        }
    }catch(e){
        console.log(e)
    }
    //백화렴
    try{
        if(msg.content.startsWith("!백화렴컷 ")){
            const fristData = msg.content.split(" ");
            const arr=fristData[1].split(":");
            const result_1 = parseInt(arr[0]);
            const result_2 = parseInt(arr[1]);

            if(result_1+bossName_6_genTime >= 24){
                bossDataSave_6.bossName_6_afterTime = `${(result_1+bossName_6_genTime)%24}:${result_2}`
            }else{
                bossDataSave_6.bossName_6_afterTime = `${result_1+bossName_6_genTime}:${result_2}`
            }
            msg.reply(`백화렴 컷...다음 예상 출현 시간 => ${bossDataSave_6.bossName_6_afterTime}`);

            fs.writeFile('./datas/boss6.json', JSON.stringify(bossDataSave_6),'utf-8',(err) => {
                if(err) throw err
                else console.log('백화렴컷 저장성공!')
            })
        }
    }catch(e){
        console.log(e)
    }

    //version2.대인면충, 돌주먹
    //대인면충
    try{
        if(msg.content.startsWith("!대인면충컷 ")){
            const fristData = msg.content.split(" ");
            const arr=fristData[1].split(":");
            const result_1 = parseInt(arr[0]);
            const result_2 = parseInt(arr[1]);

            if(result_1+bossName_7_genTime >= 24){
                bossDataSave_7.bossName_7_afterTime = `${(result_1+bossName_7_genTime)%24}:${result_2}`
            }else{
                bossDataSave_7.bossName_7_afterTime = `${result_1+bossName_7_genTime}:${result_2}`
            }
            msg.reply(`대인면충 컷...다음 예상 출현 시간 => ${bossDataSave_7.bossName_7_afterTime}`);

            fs.writeFile('./datas/boss6.json', JSON.stringify(bossDataSave_7),'utf-8',(err) => {
                if(err) throw err
                else console.log('대인면충컷 저장성공!')
            })
        }
    }catch(e){
        console.log(e)
    }

    //돌주먹
    try{
        if(msg.content.startsWith("!돌주먹컷 ")){
            const fristData = msg.content.split(" ");
            const arr=fristData[1].split(":");
            const result_1 = parseInt(arr[0]);
            const result_2 = parseInt(arr[1]);

            if(result_1+bossName_8_genTime >= 24){
                bossDataSave_8.bossName_8_afterTime = `${(result_1+bossName_8_genTime)%24}:${result_2}`
            }else{
                bossDataSave_8.bossName_8_afterTime = `${result_1+bossName_8_genTime}:${result_2}`
            }
            msg.reply(`돌주먹 컷...다음 예상 출현 시간 => ${bossDataSave_8.bossName_8_afterTime}`);

            fs.writeFile('./datas/boss8.json', JSON.stringify(bossDataSave_8),'utf-8',(err) => {
                if(err) throw err
                else console.log('돌주먹컷 저장성공!')
            })
        }
    }catch(e){
        console.log(e)
    }


    if(msg.content === "!타이머"){
        // //타이머 기능
        msg.channel.send('```타이머 시작! 10분, 5분, 2분 전에 알려 드립니다.```');
        //홍매화
        const PATH ='./datas';
        fs.readFile(`${PATH}/boss1.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);
            const date = new Date();
        
            let hour = date.getHours();
            let min = date.getMinutes();
            
            let timeCount = (date.getHours()*60)+date.getMinutes();

            let bossTimerArrBase = bossData.bossName_1_afterTime;
            let bossTimerArr = bossTimerArrBase.split(':');
            const maxHour = bossTimerArr[0];
            const maxMin = bossTimerArr[1];
            
            let timeCountMax = parseInt(maxHour)*60+parseInt(maxMin);

            //  msg.channel.send(`홍매화 젠 시간: ${bossTimerArr[0]}:${bossTimerArr[1]}`)

            var timer = setInterval(() => {        
                const voice = msg.member.voice

                if(!voice.channelID){
                    msg.reply('채널 없음');
                    return
                }
        
                // voice.channel.join().then((connection) => {
                //     connection.play('./홍매화.mp3');
                // })

                timeCount++;
                if(min<59){
                    min++;
                }else{
                    hour++;
                    min++;
                    min = min%60;
                }
                if(hour>=24){
                    hour=hour%24;
                }
                
                if(hour == maxHour && maxMin - min == 10){
                    msg.reply('홍매화 약 10분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/홍매화10.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 10){
                    msg.reply('홍매화 약 10분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/홍매화10.mp3');
                    })
                }

                if(hour == maxHour && maxMin - min == 5){
                    msg.reply('홍매화 약 5분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/홍매화5.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 5){
                    msg.reply('홍매화 약 5분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/홍매화5.mp3');
                    })
                }

                if(hour == maxHour && maxMin - min == 2){
                    msg.reply('홍매화 약 2분 남았습니다. 해당 장소로 모여주세요');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/홍매화2.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 2){
                    msg.reply('홍매화 약 2분 남았습니다. 해당 장소로 모여주세요');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/홍매화2.mp3');
                    })
                }

                if(hour == maxHour && min == maxMin){
                    msg.reply('홍매화출현');
                    clearTimeout(timer);
                }
            }, 60000)
        })
        //모순학
        fs.readFile(`${PATH}/boss2.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);
            const date = new Date();
        
            let hour = date.getHours();
            let min = date.getMinutes();
            
            let timeCount = (date.getHours()*60)+date.getMinutes();

            let bossTimerArrBase = bossData.bossName_2_afterTime;
            let bossTimerArr = bossTimerArrBase.split(':');
            const maxHour = bossTimerArr[0];
            const maxMin = bossTimerArr[1];
            
            let timeCountMax = parseInt(maxHour)*60+parseInt(maxMin);

            // msg.channel.send(`모순학 젠 시간: ${bossTimerArr[0]}:${bossTimerArr[1]}`)

            var timer = setInterval(() => {        
                const voice = msg.member.voice

                if(!voice.channelID){
                    msg.reply('채널 없음');
                    return
                }
        
                // voice.channel.join().then((connection) => {
                //     connection.play('./홍매화.mp3');
                // })

                timeCount++;
                if(min<59){
                    min++;
                }else{
                    hour++;
                    min++;
                    min = min%60;
                }
                if(hour>=24){
                    hour=hour%24;
                }
                
                if(hour == maxHour && maxMin - min == 10){
                    msg.reply('모순학 약 10분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/모순학10.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 10){
                    msg.reply('모순학 약 10분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/모순학10.mp3');
                    })
                }

                if(hour == maxHour && maxMin - min == 5){
                    msg.reply('모순학 약 5분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/모순학5.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 5){
                    msg.reply('모순학 약 5분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/모순학5.mp3');
                    })
                }

                if(hour == maxHour && maxMin - min == 2){
                    msg.reply('모순학 약 2분 남았습니다. 해당 장소로 모여주세요');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/모순학2.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 2){
                    msg.reply('모순학 약 2분 남았습니다. 해당 장소로 모여주세요');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/모순학2.mp3');
                    })
                }

                if(hour == maxHour && min == maxMin){
                    msg.reply('모순학출현');
                    clearTimeout(timer);
                }
            }, 60000)

        })
        //거곤
        fs.readFile(`${PATH}/boss3.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);
            const date = new Date();
        
            let hour = date.getHours();
            let min = date.getMinutes();
            
            let timeCount = (date.getHours()*60)+date.getMinutes();

            let bossTimerArrBase = bossData.bossName_3_afterTime;
            let bossTimerArr = bossTimerArrBase.split(':');
            const maxHour = bossTimerArr[0];
            const maxMin = bossTimerArr[1];
            
            let timeCountMax = parseInt(maxHour)*60+parseInt(maxMin);

            // msg.channel.send(`거곤 젠 시간: ${bossTimerArr[0]}:${bossTimerArr[1]}`)

            var timer = setInterval(() => {        
                const voice = msg.member.voice

                if(!voice.channelID){
                    msg.reply('채널 없음');
                    return
                }

                timeCount++;
                if(min<59){
                    min++;
                }else{
                    hour++;
                    min++;
                    min = min%60;
                }
                if(hour>=24){
                    hour=hour%24;
                }
                
                if(hour == maxHour && maxMin - min == 10){
                    msg.reply('거곤 약 10분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/거곤10.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 10){
                    msg.reply('거곤 약 10분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/거곤10.mp3');
                    })
                }

                if(hour == maxHour && maxMin - min == 5){
                    msg.reply('거곤 약 5분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/거곤5.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 5){
                    msg.reply('거곤 약 5분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/거곤5.mp3');
                    })
                }

                if(hour == maxHour && maxMin - min == 2){
                    msg.reply('거곤 약 2분 남았습니다. 해당 장소로 모여주세요');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/거곤2.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 2){
                    msg.reply('거곤 약 2분 남았습니다. 해당 장소로 모여주세요');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/거곤2.mp3');
                    })
                }

                if(hour == maxHour && min == maxMin){
                    msg.reply('거곤출현');
                    clearTimeout(timer);
                }
            }, 60000)
        })
        //굴락
        fs.readFile(`${PATH}/boss4.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);
            const date = new Date();
        
            let hour = date.getHours();
            let min = date.getMinutes();
            
            let timeCount = (date.getHours()*60)+date.getMinutes();

            let bossTimerArrBase = bossData.bossName_4_afterTime;
            let bossTimerArr = bossTimerArrBase.split(':');
            const maxHour = bossTimerArr[0];
            const maxMin = bossTimerArr[1];
            
            let timeCountMax = parseInt(maxHour)*60+parseInt(maxMin);

            // msg.channel.send(`굴락 젠 시간: ${bossTimerArr[0]}:${bossTimerArr[1]}`)

            var timer = setInterval(() => {        
                const voice = msg.member.voice

                if(!voice.channelID){
                    msg.reply('채널 없음');
                    return
                }

                timeCount++;
                if(min<59){
                    min++;
                }else{
                    hour++;
                    min++;
                    min = min%60;
                }
                if(hour>=24){
                    hour=hour%24;
                }
                
                if(hour == maxHour && maxMin - min == 10){
                    msg.reply('굴락 약 10분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/굴락10.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 10){
                    msg.reply('굴락 약 10분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/굴락10.mp3');
                    })
                }

                if(hour == maxHour && maxMin - min == 5){
                    msg.reply('굴락 약 5분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/굴락5.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 5){
                    msg.reply('굴락 약 5분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/굴락5.mp3');
                    })
                }

                if(hour == maxHour && maxMin - min == 2){
                    msg.reply('굴락 약 2분 남았습니다. 해당 장소로 모여주세요');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/굴락2.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 2){
                    msg.reply('굴락 약 2분 남았습니다. 해당 장소로 모여주세요');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/굴락2.mp3');
                    })
                }

                if(hour == maxHour && min == maxMin){
                    msg.reply('굴락출현');
                    clearTimeout(timer);
                }
            }, 60000)
        })
        //녹력대귀
        fs.readFile(`${PATH}/boss5.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);
            const date = new Date();
        
            let hour = date.getHours();
            let min = date.getMinutes();
            
            let timeCount = (date.getHours()*60)+date.getMinutes();

            let bossTimerArrBase = bossData.bossName_5_afterTime;
            let bossTimerArr = bossTimerArrBase.split(':');
            const maxHour = bossTimerArr[0];
            const maxMin = bossTimerArr[1];
            
            let timeCountMax = parseInt(maxHour)*60+parseInt(maxMin);

            // msg.channel.send(`녹력대귀 젠 시간: ${bossTimerArr[0]}:${bossTimerArr[1]}`)

            var timer = setInterval(() => {        
                const voice = msg.member.voice

                if(!voice.channelID){
                    msg.reply('채널 없음');
                    return
                }

                timeCount++;
                if(min<59){
                    min++;
                }else{
                    hour++;
                    min++;
                    min = min%60;
                }
                if(hour>=24){
                    hour=hour%24;
                }
                
                if(hour == maxHour && maxMin - min == 10){
                    msg.reply('녹력대귀 약 10분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/녹력대귀10.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 10){
                    msg.reply('녹력대귀 약 10분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/녹력대귀10.mp3');
                    })
                }

                if(hour == maxHour && maxMin - min == 5){
                    msg.reply('녹력대귀 약 5분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/녹력대귀5.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 5){
                    msg.reply('녹력대귀 약 5분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/녹력대귀5.mp3');
                    })
                }

                if(hour == maxHour && maxMin - min == 2){
                    msg.reply('녹력대귀 약 2분 남았습니다. 해당 장소로 모여주세요');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/녹력대귀2.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 2){
                    msg.reply('녹력대귀 약 2분 남았습니다. 해당 장소로 모여주세요');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/녹력대귀2.mp3');
                    })
                }

                if(hour == maxHour && min == maxMin){
                    msg.reply('녹력대귀출현');
                    clearTimeout(timer);
                }
            }, 60000)
        })
        //백화렴
        fs.readFile(`${PATH}/boss6.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);
            const date = new Date();
        
            let hour = date.getHours();
            let min = date.getMinutes();
            
            let timeCount = (date.getHours()*60)+date.getMinutes();

            let bossTimerArrBase = bossData.bossName_6_afterTime;
            let bossTimerArr = bossTimerArrBase.split(':');
            const maxHour = bossTimerArr[0];
            const maxMin = bossTimerArr[1];
            
            let timeCountMax = parseInt(maxHour)*60+parseInt(maxMin);

            // msg.channel.send(`백화렴 젠 시간: ${bossTimerArr[0]}:${bossTimerArr[1]}`)

            var timer = setInterval(() => {        
                const voice = msg.member.voice

                if(!voice.channelID){
                    msg.reply('채널 없음');
                    return
                }

                timeCount++;
                if(min<59){
                    min++;
                }else{
                    hour++;
                    min++;
                    min = min%60;
                }
                if(hour>=24){
                    hour=hour%24;
                }
                
                if(hour == maxHour && maxMin - min == 10){
                    msg.reply('백화렴 약 10분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/백화렴10.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 10){
                    msg.reply('백화렴 약 10분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/백화렴10.mp3');
                    })
                }

                if(hour == maxHour && maxMin - min == 5){
                    msg.reply('백화렴 약 5분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/백화렴5.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 5){
                    msg.reply('백화렴 약 5분 남았습니다.');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/백화렴5.mp3');
                    })
                }

                if(hour == maxHour && maxMin - min == 2){
                    msg.reply('백화렴 약 2분 남았습니다. 해당 장소로 모여주세요');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/백화렴2.mp3');
                    })
    
                }else if(timeCountMax-timeCount == 2){
                    msg.reply('백화렴 약 2분 남았습니다. 해당 장소로 모여주세요');
                    voice.channel.join().then((connection) => {
                        connection.play('./voice/백화렴2.mp3');
                    })
                }

                if(hour == maxHour && min == maxMin){
                    msg.reply('백화렴출현');
                    clearTimeout(timer);
                }
            }, 60000)
        })
    //version2.대인면충, 돌주먹
    //대인면충
    fs.readFile(`${PATH}/boss7.json`,'utf-8',(err,data) => {
        if(err) throw err;
        const bossDataJSON = data.toString();
        const bossData = JSON.parse(bossDataJSON);
        const date = new Date();
    
        let hour = date.getHours();
        let min = date.getMinutes();
        
        let timeCount = (date.getHours()*60)+date.getMinutes();

        let bossTimerArrBase = bossData.bossName_7_afterTime;
        let bossTimerArr = bossTimerArrBase.split(':');
        const maxHour = bossTimerArr[0];
        const maxMin = bossTimerArr[1];
        
        let timeCountMax = parseInt(maxHour)*60+parseInt(maxMin);

        // msg.channel.send(`대인면충 젠 시간: ${bossTimerArr[0]}:${bossTimerArr[1]}`)

        var timer = setInterval(() => {        
            const voice = msg.member.voice

            if(!voice.channelID){
                msg.reply('채널 없음');
                return
            }

            timeCount++;
            if(min<59){
                min++;
            }else{
                hour++;
                min++;
                min = min%60;
            }
            if(hour>=24){
                hour=hour%24;
            }
            
            if(hour == maxHour && maxMin - min == 10){
                msg.reply('대인면충 약 10분 남았습니다.');
                voice.channel.join().then((connection) => {
                    connection.play('./voice/대인면충10.mp3');
                })

            }else if(timeCountMax-timeCount == 10){
                msg.reply('대인면충 약 10분 남았습니다.');
                voice.channel.join().then((connection) => {
                    connection.play('./voice/대인면충10.mp3');
                })
            }

            if(hour == maxHour && maxMin - min == 5){
                msg.reply('대인면충 약 5분 남았습니다.');
                voice.channel.join().then((connection) => {
                    connection.play('./voice/대인면충5.mp3');
                })

            }else if(timeCountMax-timeCount == 5){
                msg.reply('대인면충 약 5분 남았습니다.');
                voice.channel.join().then((connection) => {
                    connection.play('./voice/대인면충5.mp3');
                })
            }

            if(hour == maxHour && maxMin - min == 2){
                msg.reply('대인면충 약 2분 남았습니다. 해당 장소로 모여주세요');
                voice.channel.join().then((connection) => {
                    connection.play('./voice/대인면충2.mp3');
                })

            }else if(timeCountMax-timeCount == 2){
                msg.reply('대인면충 약 2분 남았습니다. 해당 장소로 모여주세요');
                voice.channel.join().then((connection) => {
                    connection.play('./voice/대인면충2.mp3');
                })
            }

            if(hour == maxHour && min == maxMin){
                msg.reply('대인면충출현');
                clearTimeout(timer);
            }
        }, 60000)
    })
    //돌주먹
    fs.readFile(`${PATH}/boss8.json`,'utf-8',(err,data) => {
        if(err) throw err;
        const bossDataJSON = data.toString();
        const bossData = JSON.parse(bossDataJSON);
        const date = new Date();
    
        let hour = date.getHours();
        let min = date.getMinutes();
        
        let timeCount = (date.getHours()*60)+date.getMinutes();

        let bossTimerArrBase = bossData.bossName_8_afterTime;
        let bossTimerArr = bossTimerArrBase.split(':');
        const maxHour = bossTimerArr[0];
        const maxMin = bossTimerArr[1];
        
        let timeCountMax = parseInt(maxHour)*60+parseInt(maxMin);

        // msg.channel.send(`돌주먹 젠 시간: ${bossTimerArr[0]}:${bossTimerArr[1]}`)

        var timer = setInterval(() => {        
            const voice = msg.member.voice

            if(!voice.channelID){
                msg.reply('채널 없음');
                return
            }

            timeCount++;
            if(min<59){
                min++;
            }else{
                hour++;
                min++;
                min = min%60;
            }
            if(hour>=24){
                hour=hour%24;
            }
            
            if(hour == maxHour && maxMin - min == 10){
                msg.reply('돌주먹 약 10분 남았습니다.');
                voice.channel.join().then((connection) => {
                    connection.play('./voice/돌주먹10.mp3');
                })

            }else if(timeCountMax-timeCount == 10){
                msg.reply('돌주먹 약 10분 남았습니다.');
                voice.channel.join().then((connection) => {
                    connection.play('./voice/돌주먹10.mp3');
                })
            }

            if(hour == maxHour && maxMin - min == 5){
                msg.reply('돌주먹 약 5분 남았습니다.');
                voice.channel.join().then((connection) => {
                    connection.play('./voice/돌주먹5.mp3');
                })

            }else if(timeCountMax-timeCount == 5){
                msg.reply('돌주먹 약 5분 남았습니다.');
                voice.channel.join().then((connection) => {
                    connection.play('./voice/돌주먹5.mp3');
                })
            }

            if(hour == maxHour && maxMin - min == 2){
                msg.reply('돌주먹 약 2분 남았습니다. 해당 장소로 모여주세요');
                voice.channel.join().then((connection) => {
                    connection.play('./voice/돌주먹2.mp3');
                })

            }else if(timeCountMax-timeCount == 2){
                msg.reply('돌주먹 약 2분 남았습니다. 해당 장소로 모여주세요');
                voice.channel.join().then((connection) => {
                    connection.play('./voice/돌주먹2.mp3');
                })
            }

            if(hour == maxHour && min == maxMin){
                msg.reply('돌주먹출현');
                clearTimeout(timer);
            }
        }, 60000)
    })
    
    }

    //타이머 초기화
    if(msg.content === '!타이머초기화'){

        msg.channel.send('```타이머 초기화 완료! 다시 타이머를 실행시켜 주세요.```');
        
        var Timer = setInterval(() => {
            process.exit();
        },3000);
        
    }

    //설명서
    if(msg.content === '!사용법'){

        const embed = new Discord.MessageEmbed().setTitle('보스타이머 사용방법')
                                                .setColor(0xE56D29)
                                                .setDescription('```'+`※ !(보스이름)컷 시간 -> 보스를 잡은 시간을 입력하세요. ex)!홍매화컷 6:0

                                                ※ !타이머초기화 -> 보스 컷 시간을 ''잘못 입력'' 했을 때 사용해 주세요.초기화 하신 경우 다시 !타이머 입력하셔야 됩니다.

                                                ※ !타이머 -> 다음 보스 남은 시간을 알려줍니다(보스 출현 10분, 5분, 2분 전에 알려줌).

                                                ※ !보탐 -> 모든 보스의 다음 젠 타임을 확인 할 수 있습니다.

                                                ※ 현재 등록된 보스 -> 홍매화, 모순학, 거곤, 굴락, 녹력대귀, 백화렴, 대인면충, 돌주먹
                                                
                                                ※ 명령어 앞에 '느낌표' 꼭 붙이셔야 됩니다! 불편한 점 있으시면 '보스타이머-피드백' 방에 글 올려주세용`+'```')

        msg.channel.send(embed);
    }
})

client.login('ODgyMzIwMjUwMjYyMTQzMDI2.YS5qxA.qtQtQHdnUEx_AqLcMz6rUwZk1HM');