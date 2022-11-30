//Display
const Output = document.querySelector('#output');
const Input = document.querySelector('#input');
//Operators
const Plus = document.querySelector('#plus');
const Minus = document.querySelector('#minus');
const Multiply = document.querySelector('#multiply');
const Divide = document.querySelector('#divide');
const Equal = document.querySelector('#equal');
const PositiveNegative = document.querySelector('#positive-negative');
//Digits
const One = document.querySelector('#one');
const Two = document.querySelector('#two');
const Three = document.querySelector('#three');
const Four = document.querySelector('#four');
const Five = document.querySelector('#five');
const Six = document.querySelector('#six');
const Seven = document.querySelector('#seven');
const Eight = document.querySelector('#eight');
const Nine = document.querySelector('#nine');
const Zero = document.querySelector('#zero');
const DecimalPoint = document.querySelector('#decimal-point');

//Clear
const ClearEntry = document.querySelector('#clear-entry');
const Clear = document.querySelector('#clear');
const Delete = document.querySelector('#delete');

let hasOperand = false;
let Operator = null;


window.addEventListener('keydown', function(e){
    // console.log(e.keyCode);

    //Clear
    if(e.keyCode == 27){
        ClearEntry.classList.add('button-focus');
        Input.innerHTML = '0';
        Output.innerHTML = '';
        hasOperand = false;

        setTimeout(function(){
            ClearEntry.classList.remove('button-focus');
        },100);
    }

    //Delete Last Digit
    if(e.keyCode == 8){
        Delete.classList.add('button-focus');
        Input.innerHTML = Input.innerHTML.substring(0, Input.innerHTML.length - 1);
        setTimeout(function(){
            Delete.classList.remove('button-focus');
        },100);

        if(Input.innerHTML.length == 0) 
        {
            Input.innerHTML = '0';
        }
    }

    //Decimal Point
    if(e.keyCode == 110){
        if(Input.innerHTML.includes('.')) return
        DecimalPoint.classList.add('button-focus');
        Input.innerHTML += '.';
        setTimeout(function(){
            DecimalPoint.classList.remove('button-focus');
        },100);
    }

    //Zero
    if(e.keyCode == 96 || e.keyCode == 48 || e.keyCode == 45){
        if(parseFloat(Input.innerHTML) == 0 && !(Input.innerHTML.includes('.'))) return

        if(hasOperand == true) 
        {
            Input.innerHTML = '';
            hasOperand = false;

        }
        Zero.classList.add('button-focus');
        Input.innerHTML += '0';
        setTimeout(function(){
            Zero.classList.remove('button-focus');
        },100);
    }
    //One
    if(e.keyCode == 97 || e.keyCode == 49 || e.keyCode == 35){
        if(Input.innerHTML == '0') Input.innerHTML = '';

        if(hasOperand == true) 
        {
            Input.innerHTML = '';
            hasOperand = false;

        }

        One.classList.add('button-focus');
        Input.innerHTML += '1';


        setTimeout(function(){
            One.classList.remove('button-focus');
        },100);
    }

    //Two
    if(e.keyCode == 98 || e.keyCode == 50 || e.keyCode == 40){
        if(Input.innerHTML == '0') Input.innerHTML = '';

        if(hasOperand == true) 
        {
            Input.innerHTML = '';
            hasOperand = false;

        }

        Two.classList.add('button-focus');
        Input.innerHTML += '2';
        setTimeout(function(){
            Two.classList.remove('button-focus');
        },100);
    }

    //Three
    if(e.keyCode == 99 || e.keyCode == 51 || e.keyCode == 34){
        if(Input.innerHTML == '0') Input.innerHTML = '';

        if(hasOperand == true) 
        {
            Input.innerHTML = '';
            hasOperand = false;
        }

        Three.classList.add('button-focus');
        Input.innerHTML += '3';
        setTimeout(function(){
            Three.classList.remove('button-focus');
        },100);
    }       

    //Four
    if(e.keyCode == 100 || e.keyCode == 52 || e.keyCode == 37){
        if(Input.innerHTML == '0') Input.innerHTML = '';

        if(hasOperand == true) 
        {
            Input.innerHTML = '';
            hasOperand = false;
        }

        Four.classList.add('button-focus');
        Input.innerHTML += '4';
        setTimeout(function(){
            Four.classList.remove('button-focus');
        },100);
    } 

    //Five
    if(e.keyCode == 101 || e.keyCode == 53 || e.keyCode == 12){
        if(Input.innerHTML == '0') Input.innerHTML = '';

        if(hasOperand == true) 
        {
            Input.innerHTML = '';
            hasOperand = false;
        }

        Five.classList.add('button-focus');
        Input.innerHTML += '5';
        setTimeout(function(){
            Five.classList.remove('button-focus');
        },100);
    } 


    //Six
    if(e.keyCode == 102 || e.keyCode == 54 || e.keyCode == 39){
        if(Input.innerHTML == '0') Input.innerHTML = '';

        if(hasOperand == true) 
        {
            Input.innerHTML = '';
            hasOperand = false;
        }

        Six.classList.add('button-focus');
        Input.innerHTML += '6';
        setTimeout(function(){
            Six.classList.remove('button-focus');
        },100);
    } 



    //Seven
    if(e.keyCode == 103 || e.keyCode == 55 || e.keyCode == 36){
        if(Input.innerHTML == '0') Input.innerHTML = '';

        if(hasOperand == true) 
        {
            Input.innerHTML = '';
            hasOperand = false;
        }

        Seven.classList.add('button-focus');
        Input.innerHTML += '7';
        setTimeout(function(){
            Seven.classList.remove('button-focus');
        },100);
    }

    //Eight
    if(e.keyCode == 104 || e.keyCode == 56 || e.keyCode == 38){
        if(Input.innerHTML == '0') Input.innerHTML = '';

        if(hasOperand == true) 
        {
            Input.innerHTML = '';
            hasOperand = false;
        }

        Eight.classList.add('button-focus');
        Input.innerHTML += '8';
        setTimeout(function(){
            Eight.classList.remove('button-focus');
        },100);
    }

    //Nine
    if(e.keyCode == 105 || e.keyCode == 57 || e.keyCode == 33){
        if(Input.innerHTML == '0') Input.innerHTML = '';

        console.log(parseFloat(Input.innerHTML))
        if(parseFloat(Input.innerHTML) == 0) {
            Input.innerHTML = parseInt(Input.innerHTML);
            console.log(parseInt(Input.innerHTML));
        } 

        if(hasOperand == true) 
        {
            Input.innerHTML = '';
            hasOperand = false;
        }

        Nine.classList.add('button-focus');
        Input.innerHTML += '9';
        setTimeout(function(){
            Nine.classList.remove('button-focus');
        },100);
        console.log(parseInt(Input.innerHTML));

    }



    //Plus
    if(e.keyCode == 107){
        Plus.classList.add('button-focus');
        if(isNaN(parseFloat(Output.innerHTML)))
        {
            Output.innerHTML =  `${Input.innerHTML} +`;
        }else{
            if(Operator === Plus)
            {
                let compute = parseFloat(Output.innerHTML) + parseFloat(Input.innerHTML)
                Output.innerHTML = `${compute.toString()} +`;
            }else{
                Output.innerHTML =  `${Output.innerHTML.substring(0, Output.innerHTML.length - 1) } +`;
            }
        }
        Operator = Plus;
        hasOperand = true;

        setTimeout(function(){
            Plus.classList.remove('button-focus');
        },100);
    }

    //Minus
    if(e.keyCode == 109){
        Minus.classList.add('button-focus');
        if(isNaN(parseFloat(Output.innerHTML)))
        {
            Output.innerHTML =  `${Input.innerHTML} -`; 
        }else{
            if(Operator === Minus)
            {
                let compute = parseFloat(Output.innerHTML) - parseFloat(Input.innerHTML)
                Output.innerHTML = `${compute.toString()} -`;
            }else{
                Output.innerHTML =  `${Output.innerHTML.substring(0, Output.innerHTML.length - 1) } -`;
            }
        }
        Operator = Minus;
        hasOperand = true;

        setTimeout(function(){
            Minus.classList.remove('button-focus');
        },100);
    }
    //Multiply
    if(e.keyCode == 106){
        Multiply.classList.add('button-focus');
        if(isNaN(parseFloat(Output.innerHTML)))
        {
            Output.innerHTML =  `${Input.innerHTML} x`;

        }else{
            if(Operator === Multiply)
            {
                let compute = parseFloat(Output.innerHTML) * parseFloat(Input.innerHTML)
                Output.innerHTML = `${compute.toString()} x`;
            }else{
                Output.innerHTML =  `${Output.innerHTML.substring(0, Output.innerHTML.length - 1) } x`;
            }
        }
        Operator = Multiply;
        hasOperand = true;

        setTimeout(function(){
            Multiply.classList.remove('button-focus');
        },100);
    }

    //Divide
    if(e.keyCode == 111){
        Divide.classList.add('button-focus');
        if(isNaN(parseFloat(Output.innerHTML)))
        {
            Output.innerHTML =  `${Input.innerHTML} ÷`;

        }else{

            if(Operator === Divide)
            {
                let compute = parseFloat(Output.innerHTML) / parseFloat(Input.innerHTML)
                Output.innerHTML = `${compute.toString()} ÷`;
            }else{
                Output.innerHTML =  `${Output.innerHTML.substring(0, Output.innerHTML.length - 1) } ÷`;
            }
        }
        Operator = Divide;
        hasOperand = true;

        setTimeout(function(){
            Divide.classList.remove('button-focus');
        },100);
    }

    //Equal
    if(e.keyCode == 13){
        Equal.classList.add('button-focus');
        let compute = eval(Output.innerHTML.replace('x','*').replace('÷','/') + Input.innerHTML);
        Input.innerHTML = compute.toString();

        Output.innerHTML = '';


        hasOperand = true;

        setTimeout(function(){
            Equal.classList.remove('button-focus');
        },100);
    }

 

})





PositiveNegative.addEventListener('click', ()=> {
    let number = parseFloat(Input.innerHTML);
    number = number * -1;
    Input.innerHTML = number;
});


    
//Clear Entry
ClearEntry.addEventListener('click', ()=> {
    Input.innerHTML = '0';
});
