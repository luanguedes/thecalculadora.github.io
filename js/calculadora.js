var Acumm = 0;
var FlagNewNum = false;
var PendingOp = "";

function botao(num) 
{
	if (FlagNewNum){
		document.calc.visor.value = num ;
		FlagNewNum = false;
	}
	else{
		if (document.calc.visor.value == "0")
			document.calc.visor.value = num;
		else 
			document.calc.visor.value += num;
	}
	
}
function reset()
{	
}
function op(operador){
	if (document.calc.visor.value == "") {
		alert("O campo esta vazio, digite um calculo!");
		document.calc.visor.value = "0";
	}
	else{
		if (FlagNewNum && PendingOp != "=");
		else{
			FlagNewNum = true;
			if('+' == PendingOp){
				Accum += parseFloat(document.calc.visor.value);
			}
				else if ('*' == PendingOp){
					Accum *= parseFloat(document.calc.visor.value);
				}
			else
				Accum = parseFloat(document.calc.visor.value);
				document.calc.visor.value = Accum;
				PendingOp = operador;
		}
	}
}