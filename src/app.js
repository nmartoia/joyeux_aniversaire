import { v4 as uuidv4 } from 'uuid';
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let hobby=['foot','jeux video','basket','code','echec','Jardinage','Randonnee','Jouer de la guitard','pêcher','tatouage','musculation','danser','astronomie','cuisine','camping','cyclisme','plombier','grillades','calligraphie','photographie']
function hobbyhasard(nrandom){
    let t=[];
    let i=0
    while(i<nrandom){
        let rhobby = hobby[getRandomInt(20)];
        if(t.includes(rhobby)){
            rhobby = hobby[getRandomInt(20)];
        }
        else{
        t.push(rhobby)
        i++
        }
    }
    return t;
}
let a=[]
for(let i=1;i<=1000;i++){
    a.push({
        id:uuidv4(),
        unsername:'username_'+i,
        //doi:d,
        hobbys:hobbyhasard(getRandomInt(8)+3),
    })
}
console.log(a)