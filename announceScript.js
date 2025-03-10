let number = [];
let players = {};
let rolledNumber, randomNumber;
let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;
let playerName;
let quotes = [`	1️⃣ Single stick, lucky quick!	`,
  `	2️⃣ Ek ke baad do, pet mein machi dhoom-dho!	`,
  `	3️⃣ Teen ka jadoo, sabko bitha do!	`,
  `	4️⃣ Chaar pe chaar, bas karo yaar!	`,
  `	5️⃣ Paanch rupay ka chips, jale mat tips!	`,
  `	6️⃣ Chhakka lag gaya, tension bhag gaya!	`,
  `	7️⃣ Saat baje alarm, phir bhi hum soye calm!	`,
  `	8️⃣ Aath baj gaye, nashta kidhar haye?	`,
  `	9️⃣ Nau nau chutney, samosa bhi satth me!	`,
  `	🔟 Dus ka score, lagao zor!	`,
  `	1️⃣1️⃣ Gyarah baj gaye, aankh phir bhi soye!	`,
  `	1️⃣2️⃣ Barah baje, bhoot bhage!	`,
  `	1️⃣3️⃣ Tera toh lag gaya, ab tu kya karega!	`,
  `	1️⃣4️⃣ Chaudah tareekh, aaya love weak!	`,
  `	1️⃣5️⃣ Pandra minute late, mummy ka gussa great!	`,
  `	1️⃣6️⃣ Solah ka shola, ghar pe aaya gola!	`,
  `	1️⃣7️⃣ Satra ka gyaan, sab bekaar ka plan!	`,
  `	1️⃣8️⃣ Atharah ki umar, masti ka shor!	`,
  `	1️⃣9️⃣ Unnis bees, bhookh lagi hai please!	`,
  `	2️⃣0️⃣ Bees minute break, ab mood fake!	`,
  `	2️⃣1️⃣ Ikkis ka magic, par chai bina tragic!	`,
  `	2️⃣2️⃣ Baais rupay ka juice, taste ka loose!	`,
  `	2️⃣3️⃣ Teis ka tevar, golgappa ka flavor!	`,
  `	2️⃣4️⃣ Chaubis ghante bhookh, fridge mein sirf dhoop!	`,
  `	2️⃣5️⃣ Pachis ka shock, salary hai rock!	`,
  `	2️⃣6️⃣ Chhabbis January ka din, masti kare bin!	`,
  `	2️⃣7️⃣ Sattais ka fun, bhaag Milkha run!	`,
  `	2️⃣8️⃣ Atthais ka fate, par yeh plate kaate late!	`,
  `	2️⃣9️⃣ Untees ka sign, ab toh so ja online!	`,
  `	3️⃣0️⃣ Tees ka maza, pizza khao zyada!	`,
  `	3️⃣1️⃣ Ikattis ka scene, chai aur caffeine!	`,
  `	3️⃣2️⃣ Battiis ka daant, chikki se taqraant!	`,
  `	3️⃣3️⃣ Teintis ka fashion, mummy ka reaction!	`,
  `	3️⃣4️⃣ Chautis ka chamatkar, bas padho ek baar!	`,
  `	3️⃣5️⃣ Paintis ka plan, par gharwale shaitan!	`,
  `	3️⃣6️⃣ Chhattis ka dukh, plate mein sirf sukha fook!	`,
  `	3️⃣7️⃣ Saintis ka daur, phone chala rahi chhoti bahu shor!	`,
  `	3️⃣8️⃣ Adhtis ka swag, lekin budget hai lag!	`,
  `	3️⃣9️⃣ Untalis ka faisla, bhookh lagi faasla!	`,
  `	4️⃣0️⃣ Chalis ki gaadi, late ho gayi bhaari!	`,
  `	4️⃣1️⃣ Iktalis ka maamla, bhookh lagi shaam ka!	`,
  `	4️⃣2️⃣ Bayalis ka chakkar, khatam ho gaya snacker!	`,
  `	4️⃣3️⃣ Taintalis ka dukh, fridge ka freezer bhi sukh!	`,
  `	4️⃣4️⃣ Chauvan ki line, mummy bole no online!	`,
  `	4️⃣5️⃣ Paintalis ka fun, bas naach le tu sun!	`,
  `	4️⃣6️⃣ Chhiyalis ki baat, pakode ka swaad!	`,
  `	4️⃣7️⃣ Saintalis ka plan, chhup gaya shaitan!	`,
  `	4️⃣8️⃣ Adhtalis ka magic, but budget hai tragic!	`,
  `	4️⃣9️⃣ Unchaas ka sign, ab toh khol pepsi wine!	`,
  `	5️⃣0️⃣ Pachaas ka half century, samosa kha entry!	`,
  `	5️⃣1️⃣ Ikkavan ka gyaan, par dimaag hai befikar insan!	`,
  `	5️⃣2️⃣ Bawan ka chakkar, pizza khao sab akkar!	`,
  `	5️⃣3️⃣ Tirpan ka plan, par mummy boli ban!	`,
  `	5️⃣4️⃣ Chauvan ka dhamal, bhook lagi kamaal!	`,
  `	5️⃣5️⃣ Double five, energy high!	`,
  `	5️⃣6️⃣ Chhappan ka swaad, lekin pet ho gaya bad!	`,
  `	5️⃣7️⃣ Sattavan ka bhau, sabko mil raha vau!	`,
  `	5️⃣8️⃣ Athavan ka pressure, bas khatam ho lecture!	`,
  `	5️⃣9️⃣ Unsath ka fun, bas khatam ho gun!	`,
  `	6️⃣0️⃣ Saatth ke saath, masti ka haath!	`,
  `	6️⃣1️⃣ Iksath ka test, bas pass ho ja best!	`,
  `	6️⃣2️⃣ Basath ka load, ab pakda phone mode!	`,
  `	6️⃣3️⃣ Tirsath ka style, mummy bole no mobile!	`,
  `	6️⃣4️⃣ Chonsath ka mood, ab chahiye kuch food!	`,
  `	6️⃣5️⃣ Painsath ka game, par koi na bole name!	`,
  `	6️⃣6️⃣ Double six, lucky mix!	`,
  `	6️⃣7️⃣ Sarsath ka tension, bas ho gaya pension!	`,
  `	6️⃣8️⃣ Arsath ka fate, ab milna late!	`,
  `	6️⃣9️⃣ Chhiyaanve ka scene, mast wala dream!	`,
  `	7️⃣0️⃣ Sattar ki chhoti chhoti baatein, par golgappa khaate khaate!	`,
  `	7️⃣1️⃣ Ikhatthar ka fun, lekin phone pe gun!	`,
  `	7️⃣2️⃣ Baihattar ka jadoo, bas cricket ka bhidu!	`,
  `	7️⃣3️⃣ Tihattar ka plan, lekin sab bekaar ka gyaan!	`,
  `	7️⃣4️⃣ Chaurhattar ka dukh, fridge bhi hai sukh!	`,
  `	7️⃣5️⃣ Pachhattar ka fashion, par mummy ka reaction!	`,
  `	7️⃣6️⃣ Chhiyyattar ka game, TV pe full fame!	`,
  `	7️⃣7️⃣ Double seven, life ka heaven!	`,
  `	7️⃣8️⃣ Athhattar ka plan, bas masti har ek din!	`,
  `	7️⃣9️⃣ Unhattar ka dose, chhodo tension close!	`,
  `	8️⃣0️⃣ Assi ka style, ab toh karlo smile!	`,
  `	8️⃣1️⃣ Ikkyasi ka soch, chhodo sab tension poch!	`,
  `	8️⃣2️⃣ Bayasi ka fear, par baith ke kha rahe pear!	`,
  `	8️⃣3️⃣ Tirasi ka swag, but paise ka lag!	`,
  `	8️⃣4️⃣ Chaurasi ka chamatkar, ab bas karo intekaam!	`,
  `	8️⃣5️⃣ Pachasi ka fun, lekin ab sona sun!	`,
  `	8️⃣6️⃣ Chhiyasi ka song, DJ wale Babu play kar rhe wrong!	`,
  `	8️⃣7️⃣ Sattasi ka shor, ab mach gya shor!	`,
  `	8️⃣8️⃣ Double eight, kha lo cake!	`,
  `	8️⃣9️⃣ Unnavasi ka tension, bas chhodo ye pension!	`,
  `	9️⃣0️⃣ Poori tambola, ab bolo hola!	`]


function reset() {
  createNumberList();
  for (i = 1; i <= 90; i++) {
    document.querySelector(`.number${i}`).style.backgroundColor = `var(--tertBgC)`;
  }
  c1=0;
  c2=0;
  c3=0;
  c4=0;
  c5=0;
  c6=0;
  document.querySelector(`p.announcedNumber`).innerText = `XX`;
  document.querySelector(`p.quote`).innerText = `the announced number teasing quote will go here`;
  playersList = Object.keys(players);
  for (j = 0; j < playersList.length; j++) {
    for (k = 1; k <= 6; k++) {
      players[`${playersList[j]}`][`pc${k}`] += players[`${playersList[j]}`][`c${k}`];
      players[`${playersList[j]}`][`c${k}`] = 0;
      display(playersList[j]);
    }
    // players[playersList[j]][pc1]+=players[playersList[j]][c1];
    // players[playersList[j]][pc2]+=players[playersList[j]][c2];
    // players[playersList[j]][pc3]+=players[playersList[j]][c3];
    // players[playersList[j]][pc4]+=players[playersList[j]][c4];
    // players[playersList[j]][pc5]+=players[playersList[j]][c5];
    // players[playersList[j]][pc6]+=players[playersList[j]][c6];
    // players[playersList[j]][c1]=0;
    // players[playersList[j]][c2]=0;
    // players[playersList[j]][c3]=0;
    // players[playersList[j]][c4]=0;
    // players[playersList[j]][c5]=0;
    // players[playersList[j]][c6]=0;
  }
  displayAll();
}

function show(){
  document.querySelector(`.addPlayers`).style.display=`flex`;
  document.querySelector(`.claims`).style.display=`none`;
  
}

function hide(){
  document.querySelector(`.addPlayers`).style.display=`none`;
  document.querySelector(`.claims`).style.display=`flex`;
}

function createNumberList() {
  for (i = 1; i <= 90; i++) {
    number[i - 1] = i;
  }
}
createNumberList();
console.log(number);

function displayAll(){
  playerList=Object.keys(players);
  for(i=0;i<playerList.length;i++){
    display(playerList[i]);
  }
  
}

function display(playerName) {
  document.querySelector(`.${playerName} .pc1`).innerHTML = players[`${playerName}`]["pc1"];
  document.querySelector(`.${playerName} .pc2`).innerHTML = players[`${playerName}`]["pc2"];
  document.querySelector(`.${playerName} .pc3`).innerHTML = players[`${playerName}`]["pc3"];
  document.querySelector(`.${playerName} .pc4`).innerHTML = players[`${playerName}`]["pc4"];
  document.querySelector(`.${playerName} .pc5`).innerHTML = players[`${playerName}`]["pc5"];
  document.querySelector(`.${playerName} .pc6`).innerHTML = players[`${playerName}`]["pc6"];
  document.querySelector(`.${playerName} .c1 .count`).innerHTML = players[`${playerName}`]["c1"];
  document.querySelector(`.${playerName} .c2 .count`).innerHTML = players[`${playerName}`]["c2"];
  document.querySelector(`.${playerName} .c3 .count`).innerHTML = players[`${playerName}`]["c3"];
  document.querySelector(`.${playerName} .c4 .count`).innerHTML = players[`${playerName}`]["c4"];
  document.querySelector(`.${playerName} .c5 .count`).innerHTML = players[`${playerName}`]["c5"];
  document.querySelector(`.${playerName} .c6 .count`).innerHTML = players[`${playerName}`]["c6"];
}

function rollANumber() {
  randomNumber = Math.floor(Math.random() * number.length);
  rolledNumber = number[randomNumber];
  console.log(rolledNumber)
  number.splice(randomNumber, 1);
  document.querySelector(`.announcedNumber`).innerText = `${rolledNumber}`;
  console.log(document.querySelector(`.number${rolledNumber}`).style.backgroundColor = `#00ab8380`);
  if (number.length == 0) {
    createNumberList();
    document.querySelectorAll(`.number`).style.backgroundColor = `var(--tertBgc)`;
  }
  document.querySelector("p.quote").innerHTML = quotes[rolledNumber - 1];

}

function removePlayer(playerName) {
  delete players[playerName];
  const playerElement = document.querySelector(`.${playerName}`);
  playerElement.remove();
  console.log(players);
}

function increaseScoreC1(playerName) {
  if(c1<Math.ceil(Object.keys(players).length/3)){
  players[`${playerName}`][`c1`]+=1;
  c1+=1;
  }else{
    element2=document.querySelector(`.universalWarning`)
  element2.style.top=`20%`;
  element=document.querySelector(`.universalWarningText`);
  element.innerText=`This value can't go above desired value`;
  setTimeout(() => {
    console.log('wait');
    element2.style.top=`-100px`;
  }, 5000);
  }
  display(playerName);
}
function increaseScoreC2(playerName) {
  if(c2<Math.ceil(Object.keys(players).length/3)){
  players[`${playerName}`][`c2`]+=1;
  c2+=1;
  }else{
    element2=document.querySelector(`.universalWarning`)
  element2.style.top=`20%`;
  element=document.querySelector(`.universalWarningText`);
  element.innerText=`This value can't go above desired value`;
  setTimeout(() => {
    console.log('wait');
    element2.style.top=`-100px`;
  }, 5000);
  }
  display(playerName);
}
function increaseScoreC3(playerName) {
  if(c3<Math.ceil(Object.keys(players).length/3)){
  players[`${playerName}`][`c3`]+=1;
  c3+=1;
  }else{
    element2=document.querySelector(`.universalWarning`)
  element2.style.top=`20%`;
  element=document.querySelector(`.universalWarningText`);
  element.innerText=`This value can't go above desired value`;
  setTimeout(() => {
    console.log('wait');
    element2.style.top=`-100px`;
  }, 5000);
  }
  display(playerName);
}
function increaseScoreC4(playerName) {
  if(c4<Math.ceil(Object.keys(players).length/3)){
  players[`${playerName}`][`c4`]+=1;
  c4+=1;
  }else{
    element2=document.querySelector(`.universalWarning`)
  element2.style.top=`20%`;
  element=document.querySelector(`.universalWarningText`);
  element.innerText=`This value can't go above desired value`;
  setTimeout(() => {
    console.log('wait');
    element2.style.top=`-100px`;
  }, 5000);
  }
  display(playerName);
}
function increaseScoreC5(playerName) {
  if(c5<Math.ceil(Object.keys(players).length/3)){
  players[`${playerName}`][`c5`]+=1;
  c5+=1;
  }else{
    element2=document.querySelector(`.universalWarning`)
  element2.style.top=`20%`;
  element=document.querySelector(`.universalWarningText`);
  element.innerText=`This value can't go above desired value`;
  setTimeout(() => {
    console.log('wait');
    element2.style.top=`-100px`;
  }, 5000);
  }
  display(playerName);
}
function increaseScoreC6(playerName) {
  if(c6<Math.ceil(Object.keys(players).length/3)){
  players[`${playerName}`][`c6`]+=1;
  c6+=1;
  }else{
  element2=document.querySelector(`.universalWarning`)
  element2.style.top=`20%`;
  element=document.querySelector(`.universalWarningText`);
  element.innerText=`This value can't go above desired value`;
  setTimeout(() => {
    console.log('wait');
    element2.style.top=`-100px`;
  }, 5000);
  }
  display(playerName);
}
function decreaseScoreC1(playerName) {
  if(c1<=0){
  element2=document.querySelector(`.universalWarning`)
  element2.style.top=`20%`;
  element=document.querySelector(`.universalWarningText`);
  element.innerText=`This value can't go below 0`;
  setTimeout(() => {
    console.log('wait');
    element2.style.top=`-100px`;
  }, 5000);
  }else{
    players[`${playerName}`][`c1`]--;
  c1--;
  }
  display(playerName);
}
function decreaseScoreC2(playerName) {
  if(c2<=0){
  element2=document.querySelector(`.universalWarning`)
  element2.style.top=`20%`;
  element=document.querySelector(`.universalWarningText`);
  element.innerText=`This value can't go below 0`;
  setTimeout(() => {
    console.log('wait');
    element2.style.top=`-100px`;
  }, 5000);
  }else{
    players[`${playerName}`][`c2`]--;
  c2--;
  }
  display(playerName);
}
function decreaseScoreC3(playerName) {
  if(c3<=0){
  element2=document.querySelector(`.universalWarning`)
  element2.style.top=`20%`;
  element=document.querySelector(`.universalWarningText`);
  element.innerText=`This value can't go below 0`;
  setTimeout(() => {
    console.log('wait');
    element2.style.top=`-100px`;
  }, 5000);
  }else{
    players[`${playerName}`][`c3`]--;
  c3--;
  }
  display(playerName);
}
function decreaseScoreC4(playerName) {
  if(c4<=0){
  element2=document.querySelector(`.universalWarning`)
  element2.style.top=`20%`;
  element=document.querySelector(`.universalWarningText`);
  element.innerText=`This value can't go below 0`;
  setTimeout(() => {
    console.log('wait');
    element2.style.top=`-100px`;
  }, 5000);
  }else{
    players[`${playerName}`][`c4`]--;
  c4--;
  }
  display(playerName);
}
function decreaseScoreC5(playerName) {
  if(c5<=0){
  element2=document.querySelector(`.universalWarning`)
  element2.style.top=`20%`;
  element=document.querySelector(`.universalWarningText`);
  element.innerText=`This value can't go below 0`;
  setTimeout(() => {
    console.log('wait');
    element2.style.top=`-100px`;
  }, 5000);
  }else{
    players[`${playerName}`][`c5`]--;
  c5--;
  }
  display(playerName);
}
function decreaseScoreC6(playerName) {
  if(c6<=0){
  element2=document.querySelector(`.universalWarning`)
  element2.style.top=`20%`;
  element=document.querySelector(`.universalWarningText`);
  element.innerText=`This value can't go below 0`;
  setTimeout(() => {
    console.log('wait');
    element2.style.top=`-100px`;
  }, 5000);
  }else{
    players[`${playerName}`][`c6`]--;
  c6--;
  }
  display(playerName);
}

function addPlayer() {
  document.querySelector(`p.redWarning`).innerText = "";
  playerNameRaw = document.querySelector(`.addPlayers>input`).value;
  playersList = Object.keys(players);
  if (playerNameRaw == "") {
    document.querySelector(`p.redWarning`).innerText = "This field can't be empty";
  }
  else if (playersList.includes(playerNameRaw)) {
    document.querySelector(`p.redWarning`).innerText = "The names of the players can't be same. Please add some suffix or prefix";
  }
  else {
    playerName = playerNameRaw.replace(/ /g, " ")
    document.querySelector(`.addPlayers>input`).value = "";

    players[playerName] = {
      c1: 0,
      c2: 0,
      c3: 0,
      c4: 0,
      c5: 0,
      c6: 0,
      pc1: 0,
      pc2: 0,
      pc3: 0,
      pc4: 0,
      pc5: 0,
      pc6: 0,
    }
    document.querySelector(`.players`).innerHTML += `<details class="${playerName}">
    <summary>${playerName} <button class="removeBtn" onclick="removePlayer('${playerName}')">Remove</button></summary>
    <div class="claims">
      <div class="c1 claimContainer">
        <p class=pc1>0</p> 
        <div class="count">
        ${players[`${playerName}`]["c1"]}
        </div>
        <button class="claim" onclick="increaseScoreC1('${playerName}')">Early Five</button>
        <button class="playerRemoveBtn"  onclick="decreaseScoreC1('${playerName}')">-1</button>
      </div>
      <div class="c2 claimContainer">
        <p class=pc2>0</p> <div class="count">
        ${players[`${playerName}`]["c2"]}
        </div>
        <button class="claim" onclick="increaseScoreC2('${playerName}')">Four Corners</button>
        <button class="playerRemoveBtn"  onclick="decreaseScoreC2('${playerName}')">-1</button>
      </div>
      <div class="c3 claimContainer">
        <p class=pc3>0</p> <div class="count">
        ${players[`${playerName}`]["c3"]}
        </div>
        <button class="claim" onclick="increaseScoreC3('${playerName}')">Top Line</button>
        <button class="playerRemoveBtn"  onclick="decreaseScoreC3('${playerName}')">-1</button>
      </div>
      <div class="c4 claimContainer">
        <p class=pc4>0</p> <div class="count">
        ${players[`${playerName}`]["c4"]}
        </div>
        <button class="claim" onclick="increaseScoreC4('${playerName}')">Middle Line</button>
        <button class="playerRemoveBtn" onclick="decreaseScoreC4('${playerName}')">-1</button>
      </div>
      <div class="c5 claimContainer">
        <p class=pc5>0</p> <div class="count">
        ${players[`${playerName}`]["c5"]}
        </div>
        <button class="claim" onclick="increaseScoreC5('${playerName}')">Bottom Line</button>
        <button class="playerRemoveBtn" onclick="decreaseScoreC5('${playerName}')">-1</button>
      </div>
      <div class="c6 claimContainer">
        <p class=pc6>0</p> <div class="count">
        ${players[`${playerName}`]["c6"]}
        </div>
        <button class="claim" onclick="increaseScoreC6('${playerName}')">Full House</button>
        <button class="playerRemoveBtn" onclick="decreaseScoreC6('${playerName}')">-1</button>
      </div>
    </div>
  </details>`;
    document.querySelector(`.addPlayers>input`).focus();
    display(playerName);
  }
}



console.log(number);