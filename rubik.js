// range mp változtatás
const rangeInput = document.getElementById(`time`);
const rangeValueDisplay = document.getElementById(`rangeValue`);

function seconds(){
    rangeValueDisplay.textContent = rangeInput.value;
};

rangeInput.addEventListener(`input`, seconds);


// pontozás
document.getElementById(`mybutton`).addEventListener(`click`, pontozas)

function pontozas(){
    let i = 0

    if(document.getElementById(`color`).value == `nem_szamit`){
        i++;
    }
    if(document.getElementById(`squares`).value == `9`){
        i++;
    }
    if(document.getElementById(`hungary`).checked){
        i++;
    }
    if(document.getElementById(`inventor`).value == `Rubik Ernő`){
        i++;
    }
    if((document.getElementById(`year`).value.startsWith(`1974`)) &&
        ((document.getElementById(`year`).value.endsWith(`03`)) ||
        (document.getElementById(`year`).value.endsWith(`04`)) ||
        (document.getElementById(`year`).value.endsWith(`05`)))){
        i++;
    }
    if(document.getElementById(`time`).value == `3`){
        i++;
    }
    if(document.getElementById(`green`).checked &&
        document.getElementById(`blue`).checked &&
        document.getElementById(`yellow`).checked &&
        document.getElementById(`red`).checked){
        if(document.getElementById(`purple`).checked ||
            document.getElementById(`black`).checked){}
        else{i++;}
    }

    alert(`Összesen ${i} pontot értél el a 7-ből!`)
    if(i==7){
        alert(`Gratulálok!`)
    }
}