import { v4 as uuidv4 } from 'uuid';
let moment = require('moment'); 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const hobby = [{id: 1, name: 'GAMING'}, {id: 2, name: 'GARDENING'}, {id: 3, name: 'COOKING'}, {id: 4, name: 'PUZZLING'}, {id: 5, name: 'PICKLING'}, {id: 6, name: 'CROCHETING'}, {id: 7, name: 'PAINTING'}, {id: 8, name: 'SONGWRITING'}, {id: 9, name: 'PILATES'}, {id: 10, name: 'MIXOLOGY'},{id: 11, name: 'MANICURING'}, {id: 12, name: 'PUNCH NEEDLING'}, {id: 13, name: 'CANDLE-MAKING'}, {id: 14, name: 'AQUASCAPING'}, {id: 15, name: 'CODING'}, {id: 16, name: 'BOWLING'}, {id: 17, name: 'SCRAPBOOKING'}, {id: 18, name: 'KUNG FU'}, {id: 19, name: 'MANGA'}, {id: 20, name: 'MAKEUP'}];
function hobbyhasard(nrandom){
    let t=[];
    let i=0
    while(i<nrandom){
        let rhobby = hobby[getRandomInt(hobby.length)];
        if(!t.includes(rhobby)){
            t.push(rhobby)
            i++
        }
    }
    return t;
}
const randomDates = (min, max) => {
    let minDay = parseInt(min.split('/')[0]);
    let maxDay = parseInt(max.split('/')[0]);
    let minMonth = parseInt(min.split('/')[1]);
    let maxMonth = parseInt(max.split('/')[1]);
    let minYear = parseInt(min.split('/')[2]);
    let maxYear = parseInt(max.split('/')[2]);

    let day = Math.floor(Math.random() * (maxDay - minDay + 1)) + minDay;
    if(day < 10){
        day = '0' + day;
    }
    let month = Math.floor(Math.random() * (maxMonth - minMonth + 1)) + minMonth;
    if(month < 10){
        month = '0' + month;
    }
    let year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
    let date = day + '/' + month + '/' + year;
    return date;
}
let a=[]
for(let i=1;i<=1000;i++){
    a.push({
        id:uuidv4(),
        unsername:'username_'+i,
        doi:randomDates('01/01/2020','31/12/2022'),
        hobbys:hobbyhasard(getRandomInt(8)+3),
        dob:randomDates('01/01/1960','31/12/1990'),
    })
}
console.log(a)