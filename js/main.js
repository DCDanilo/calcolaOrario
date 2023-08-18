let orario_ingresso = document.getElementById('ingresso');
let messageBox = document.getElementById('message');     
let orario_uscita = document.getElementById('uscita');
let calcolaBtn = document.getElementById('calcolaOrario');
let flexCheckbox = document.getElementById('flessibilita'); 

calcolaBtn.addEventListener('click', orarioUscita);
flexCheckbox.addEventListener('change', orarioUscita);

function orarioUscita(e){
    e.preventDefault();

    if(ingresso.value!=''){
        
        let getOraIngresso = parseInt(ingresso.value.split(":")[0]);
        let getMinutiIngresso = parseInt(ingresso.value.split(":")[1]);
       
        let ora_uscita = '';
        let minuti_uscita = '';

        let time = new Date('', '', '', getOraIngresso, getMinutiIngresso);
        time.setHours(time.getHours()+7);
        time.setMinutes(time.getMinutes()+42);
        
        if(flexCheckbox.checked==true){
            time.setMinutes(time.getMinutes()-29);
        }

        ora_uscita = time.getHours();    
        minuti_uscita = time.getMinutes(); 

        uscita = `${ora_uscita} : ${minuti_uscita<10 ? "0"+minuti_uscita : minuti_uscita}`;

        return orario_uscita.value=uscita;
    }
    else{
        let message = "inserire un orario";
        let messageElem = document.createElement("p");
        messageElem.setAttribute('id', 'message_text');
        messageElem.innerText=message;
        messageBox.appendChild(messageElem);
        
        setTimeout(cancellaMessaggio, 2000);
    }             
    
}

function cancellaMessaggio(){
    messageBox.firstChild.remove();
}
