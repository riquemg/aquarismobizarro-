function calcular(){
	
	// constants, fertilizer per liter
	const FLOURISH = 0.02;
	const IRON = 0.025;
	const POTASSIUM = 0.04;
	const NITROGEN = 0.015;
	const PHOSPHORUS = 0.031;
	const EXCEL = 0.025;
	const TRACE = 0.062;
	const ADVANCE = 0.062;

	// user inputs
	var litragem = document.getElementById('litragem').value;
	var demanda = document.getElementById('demanda').value;
	var massa = document.getElementById('massa').value;

	// others variables
	var tabela = document.getElementById('tabela_segunda');
	var tabela = document.getElementById('tabela_terça');
	var tabela = document.getElementById('tabela_quarta');
	var tabela = document.getElementById('tabela_quinta');
	var tabela = document.getElementById('tabela_sexta');
	var tabela = document.getElementById('tabela_sabado');
	var tabela = document.getElementById('tabela_domingo');

	var flourish_dose = 0;
	var iron_dose = 0;
	var potassium_dose = 0;
	var nitrogen_dose = 0;
	var phosphorus_dose = 0;
	var excel_dose = 0;
	var trace_dose = 0;
	var advance_dose = 0;

	if(massa == "poucas"){
		switch (demanda) {
			case 'baixa':
				// flourish dose diaria
				flourish_dose = (((FLOURISH*litragem)/3)/3).toFixed(2);
				iron_dose = (((IRON*litragem)/3)/3).toFixed(2);
				potassium_dose = ((((POTASSIUM*litragem)*2)/3)/3).toFixed(2);
				nitrogen_dose = (((NITROGEN*litragem)/3)/3).toFixed(2);
				phosphorus_dose = (((PHOSPHORUS*litragem)/3)/3).toFixed(2);
				excel_dose = ((EXCEL*litragem)/2).toFixed(2);
				trace_dose = (((TRACE*litragem)/3)/3).toFixed(2);
				advance_dose = (((ADVANCE*litragem)/3)/3).toFixed(2);
				break;
			case 'media':
				// flourish dose diaria
				flourish_dose = (((FLOURISH*litragem)/2)/3).toFixed(2);
				iron_dose = (((IRON*litragem)/2)/3).toFixed(2);
				potassium_dose = ((((POTASSIUM*litragem)*2)/2)/3).toFixed(2);
				nitrogen_dose = (((NITROGEN*litragem)/2)/3).toFixed(2);
				phosphorus_dose = (((PHOSPHORUS*litragem)/2)/3).toFixed(2);
				excel_dose = ((EXCEL*litragem)/2).toFixed(2);
				trace_dose = (((TRACE*litragem)/2)/3).toFixed(2);
				advance_dose = (((ADVANCE*litragem)/2)/3).toFixed(2);
				break;
			case 'alta':
				// flourish dose diaria
				flourish_dose = ((FLOURISH*litragem)/3).toFixed(2);
				iron_dose = (((IRON*litragem)/2)/3).toFixed(2);
				potassium_dose = ((((POTASSIUM*litragem)*2)/2)/3).toFixed(2);
				nitrogen_dose = (((NITROGEN*litragem)/2)/3).toFixed(2);
				phosphorus_dose = (((PHOSPHORUS*litragem)/2)/3).toFixed(2);
				excel_dose = (EXCEL*litragem).toFixed(2);
				trace_dose = ((TRACE*litragem)/3).toFixed(2);
				advance_dose = ((ADVANCE*litragem)/3).toFixed(2);
				break;
		}
	} else if(massa == "muitas"){
		switch (demanda) {
			case 'baixa':
				// flourish dose diaria
				flourish_dose = ((((FLOURISH*litragem)*2)/3)/3).toFixed(2);
				iron_dose = (((IRON*litragem)/2)/3).toFixed(2);
				potassium_dose = ((((POTASSIUM*litragem)*3)/2)/3).toFixed(2);
				nitrogen_dose = ((((NITROGEN*litragem)*2)/2)/3).toFixed(2);
				phosphorus_dose = ((((PHOSPHORUS*litragem)*2)/2)/3).toFixed(2);
				excel_dose = ((EXCEL*litragem)/2).toFixed(2);
				trace_dose = (((TRACE*litragem)/2)/3).toFixed(2);
				advance_dose = (((ADVANCE*litragem)/2)/3).toFixed(2);
				break;
			case 'media':
				// flourish dose diaria
				flourish_dose = ((((FLOURISH*litragem)*2)/2)/3).toFixed(2);
				iron_dose = (((IRON*litragem)/2)/3).toFixed(2);
				potassium_dose = ((((POTASSIUM*litragem)*3)/2)/3).toFixed(2);
				nitrogen_dose = ((((NITROGEN*litragem)*2)/2)/3).toFixed(2);
				phosphorus_dose = ((((PHOSPHORUS*litragem)*2)/2)/3).toFixed(2);
				excel_dose = (EXCEL*litragem).toFixed(2);
				trace_dose = (((TRACE*litragem)/2)/3).toFixed(2);
				advance_dose = (((ADVANCE*litragem)/2)/3).toFixed(2);
				break;
			case 'alta':
				// flourish dose diaria
				flourish_dose = (((FLOURISH*litragem)*2)/3).toFixed(2);
				iron_dose = ((IRON*litragem)/3).toFixed(2);
				potassium_dose = (((POTASSIUM*litragem)*2)/3).toFixed(2);
				nitrogen_dose = (((NITROGEN*litragem)*2)/3).toFixed(2);
				phosphorus_dose = (((PHOSPHORUS*litragem)*2)/3).toFixed(2);
				excel_dose = (EXCEL*litragem).toFixed(2);
				trace_dose = ((TRACE*litragem)/3).toFixed(2);
				advance_dose = ((ADVANCE*litragem)/3).toFixed(2);
				break;
		}
	}

	//flourish
	document.getElementById('tabela_segunda').rows[1].cells[1].innerHTML = flourish_dose + " ml";
	document.getElementById('tabela_quarta').rows[1].cells[1].innerHTML = flourish_dose + " ml";
	document.getElementById('tabela_sexta').rows[1].cells[1].innerHTML = flourish_dose + " ml";

	//iron
	document.getElementById('tabela_terca').rows[1].cells[1].innerHTML = iron_dose + " ml";
	document.getElementById('tabela_quinta').rows[1].cells[1].innerHTML = iron_dose + " ml";
	document.getElementById('tabela_sabado').rows[1].cells[1].innerHTML = iron_dose + " ml";

	//potassium
	document.getElementById('tabela_terca').rows[2].cells[1].innerHTML = potassium_dose + " ml";
	document.getElementById('tabela_quinta').rows[2].cells[1].innerHTML = potassium_dose + " ml";
	document.getElementById('tabela_sabado').rows[2].cells[1].innerHTML = potassium_dose + " ml";

	//nitrogen
	document.getElementById('tabela_terca').rows[3].cells[1].innerHTML = nitrogen_dose + " ml";
	document.getElementById('tabela_quinta').rows[3].cells[1].innerHTML = nitrogen_dose + " ml";
	document.getElementById('tabela_sabado').rows[3].cells[1].innerHTML = nitrogen_dose + " ml";

	//phosphorus
	document.getElementById('tabela_segunda').rows[2].cells[1].innerHTML = phosphorus_dose + " ml";
	document.getElementById('tabela_quarta').rows[2].cells[1].innerHTML = phosphorus_dose + " ml";
	document.getElementById('tabela_sexta').rows[2].cells[1].innerHTML = phosphorus_dose + " ml";

	//excel
	document.getElementById('tabela_segunda').rows[3].cells[1].innerHTML = excel_dose + " ml";
	document.getElementById('tabela_terca').rows[4].cells[1].innerHTML = excel_dose + " ml";
	document.getElementById('tabela_quarta').rows[3].cells[1].innerHTML = excel_dose + " ml";
	document.getElementById('tabela_quinta').rows[4].cells[1].innerHTML = excel_dose + " ml";
	document.getElementById('tabela_sexta').rows[3].cells[1].innerHTML = excel_dose + " ml";
	document.getElementById('tabela_sabado').rows[4].cells[1].innerHTML = excel_dose + " ml";
	document.getElementById('tabela_domingo').rows[1].cells[1].innerHTML = excel_dose + " ml";

	//trace
	document.getElementById('tabela_terca').rows[5].cells[1].innerHTML = trace_dose + " ml";
	document.getElementById('tabela_quinta').rows[5].cells[1].innerHTML = trace_dose + " ml";
	document.getElementById('tabela_sabado').rows[5].cells[1].innerHTML = trace_dose + " ml";

	//advance
	document.getElementById('tabela_terca').rows[6].cells[1].innerHTML = advance_dose + " ml";
	document.getElementById('tabela_quinta').rows[6].cells[1].innerHTML = advance_dose + " ml";
	document.getElementById('tabela_domingo').rows[2].cells[1].innerHTML = advance_dose + " ml";

}