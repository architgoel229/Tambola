let ticket1 = [[], [], []];
let ticket2 = [[], [], []];
let ticket3 = [[], [], []];
let ticket4 = [[], [], []];
let getNumberOfTicketElement;

function createTicket(ticket) {
    let selectedNumbers = [];
    
    for (let row = 0; row < 3; row++) {
        let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        
        for (let j = 0; j < 5; j++) {
            let selectedColumnIndex = Math.floor(Math.random() * columns.length);
            let column = columns[selectedColumnIndex];
            
            let randNum;
            do {
                randNum = Math.ceil(Math.random() * 10) + column * 10; 
            } while (selectedNumbers.includes(randNum));
            
            selectedNumbers.push(randNum);
            ticket[row][column] = randNum; 
            columns.splice(selectedColumnIndex, 1); 
        }
    }
}

function numberOfTickets(){
    ticket1 = [[], [], []];
    ticket2 = [[], [], []];
    ticket3 = [[], [], []];
    ticket4 = [[], [], []];
    getNumberOfTicketElement=parseInt(document.querySelector('select#numberOfTickets').value);
    if(getNumberOfTicketElement==1){
        createTicket(ticket1);
    }else
    if(getNumberOfTicketElement==2){
        createTicket(ticket1);
        createTicket(ticket2);
    }else
    if(getNumberOfTicketElement==3){
        createTicket(ticket1);
        createTicket(ticket2);
        createTicket(ticket3);
    }else{
        createTicket(ticket1);
        createTicket(ticket2);
        createTicket(ticket3);
        createTicket(ticket4);
    }
    displayP();
    document.querySelector(`.ticketCountContainer`).style.display='flex';
}

function displayP() {
    document.querySelector('.tickets').style.display='flex ';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 9; j++) {
            let element1 = document.querySelector(`.ticket1 .ticketNumber${i+1}${j}`);
            element1.style.cursor=`default`;
            if(element1){
                element1.innerText = (ticket1[i][j] === undefined) ? ` ` : `${ticket1[i][j]}`;
                if(ticket1[i][j]!=undefined){
                    element1.style.cursor=`pointer`;
                    element1.onclick = function(){
                        markingFunctionality(element1);
                    }
                }
            }
        }
    }
    
    document.querySelector('.tickets').style.display='flex ';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 9; j++) {
            let element2 = document.querySelector(`.ticket2 .ticketNumber${i+1}${j}`);
            element2.style.cursor=`default`;
            if(element2){
                element2.innerText = (ticket2[i][j] === undefined) ? ` ` : `${ticket2[i][j]}`;
                if(ticket2[i][j]!=undefined){
                    element2.style.cursor=`pointer`;
                    element2.onclick = function(){
                        markingFunctionality(element2);
                    }
                }
            }
        }
    }
    
    document.querySelector('.tickets').style.display='flex ';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 9; j++) {
            let element3 = document.querySelector(`.ticket3 .ticketNumber${i+1}${j}`);
            element3.style.cursor=`default`;
            if(element3){
                element3.innerText = (ticket3[i][j] === undefined) ? ` ` : `${ticket3[i][j]}`;
                if(ticket3[i][j]!=undefined){
                    element3.style.cursor=`pointer`;
                    element3.onclick = function(){
                        markingFunctionality(element3);
                    }
                }
            }
        }
    }
    
    document.querySelector('.tickets').style.display='flex ';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 9; j++) {
            let element4 = document.querySelector(`.ticket4 .ticketNumber${i+1}${j}`);
            element4.style.cursor=`default`;
            if(element4){
                element4.innerText = (ticket4[i][j] === undefined) ? ` ` : `${ticket4[i][j]}`;
                if(ticket4[i][j]!=undefined){
                    element4.style.cursor=`pointer`;
                    element4.onclick = function(){
                        markingFunctionality(element4);
                    }
                }
            }
        }
    }
    
}

function markingFunctionality(element) {
    if (element.style.opacity == "" || element.style.opacity == 1) {
        element.style.opacity = 0.1;
    } else {
        element.style.opacity = 1;
    }
}
