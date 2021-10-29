const config = require("../config.json");
const { Client, Intents } = require('discord.js');
const fs = require('fs');
const discordTTS = require('discord-tts');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('msg', msg => {
    if(msg.author.bot) return;// 무한반복 방지 코드
    if(msg.author.id === client.user.id) return;//로그인한 봇으로 채팅입력 방지

    //각 보스 젠 타임
    const bossName_1_genTime = 9; 
    const bossName_2_genTime = 6;
    const bossName_3_genTime = 4;
    const bossName_4_genTime = 5;
    const bossName_5_genTime = 6;
    const bossName_6_genTime = 9;
    const bossName_7_genTime = 7;
    const bossName_8_genTime = 4;

    //version1.홍매화,모순학,거곤,굴락,녹력대귀,백화렴
    //version2.대인면충, 돌주먹
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
        msg.reply('불러오는중~잠시만 기다려주세요!');
        msg.channel.send('...');
        const PATH ='./datas';
        fs.readFile(`${PATH}/boss1.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);

            msg.channel.send(`${bossData.bossName_1} -> ${bossData.bossName_1_afterTime}`);
        });
        fs.readFile(`${PATH}/boss2.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);

            msg.channel.send(`${bossData.bossName_2} -> ${bossData.bossName_2_afterTime}`);
        });
        fs.readFile(`${PATH}/boss3.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);

            msg.channel.send(`${bossData.bossName_3} -> ${bossData.bossName_3_afterTime}`);
        });
        fs.readFile(`${PATH}/boss4.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);

            msg.channel.send(`${bossData.bossName_4} -> ${bossData.bossName_4_afterTime}`);
        });
        fs.readFile(`${PATH}/boss5.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);

            msg.channel.send(`${bossData.bossName_5} -> ${bossData.bossName_5_afterTime}`);
        });
        fs.readFile(`${PATH}/boss6.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);

            msg.channel.send(`${bossData.bossName_6} -> ${bossData.bossName_6_afterTime}`);
        });
        fs.readFile(`${PATH}/boss7.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);

            msg.channel.send(`${bossData.bossName_7} -> ${bossData.bossName_7_afterTime}`);
        });
        fs.readFile(`${PATH}/boss8.json`,'utf-8',(err,data) => {
            if(err) throw err;
            const bossDataJSON = data.toString();
            const bossData = JSON.parse(bossDataJSON);

            msg.channel.send(`${bossData.bossName_8} -> ${bossData.bossName_8_afterTime}`);
        });

    }
    //!(보스이름)컷 기능
    //홍매화
})

client.login('ODgyMzIwMjUwMjYyMTQzMDI2.YS5qxA.qtQtQHdnUEx_AqLcMz6rUwZk1HM');