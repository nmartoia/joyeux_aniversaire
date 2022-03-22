import { v4 as uuidv4 } from 'uuid';
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let hobby=['foot','jeux video','basket','code','echec','Jardinage','Randonnee','Jouer de la guitard','pêcher','tatouage','musculation','danser','astronomie','cuisine','camping','cyclisme','plombier','grillades','calligraphie','photographie']
function hobbyhasard(nrandom){
    let t=[];
    for(let i=0;i<nrandom;i++){
        t.push(hobby[getRandomInt(19)])
    }
    return t;
}
let a=[]
for(let i=1;i<=1000;i++){
    
    
    a.push({
        id:uuidv4(),
        unsername:'username_'+i,
        hobbys:hobbyhasard(getRandomInt(8)+3),
    })
}
console.log(a)