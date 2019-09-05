/*

*/
function Floyd(tables, m, p){
	for(var k = 0; k < m; k++){
		var table = genTable0(m);
		const tableP = copyTable(p[k]);
		for(var i = 0; i < m; i++){
			table[i][k] = tables[k][i][k];
			for(var j = 0; j < m; j++){
				if(i===k){
					table[k][j] = tables[k][k][j];
				}
				else if (j != k){
					var num1 = tables[k][i][j];
					var num2 = tables[k][i][k] + tables[k][k][j];
					table[i][j] = min(num1,num2);
					if(hasChanged(num1,num2)){
						tableP[i][j] = k+1;
					}
				}
			}
		}
		p.push(tableP);
		tables.push(table);
	}
	return {"Tables": tables, "P":p};
}

function min(num1, num2){
	if(num2 < num1){
		return num2;
	}
	else{
		return num1;
	}

}

function hasChanged(num1, num2){
	return num2 < num1;
}

function genTable0(m){
	var table = [];
	for(var i = 0; i < m; i++){
		var row = [];
		for(var j = 0; j < m; j++){
			row.push(0);
		}
		table.push(row);
	}
	return table;
}

function copyTable(table){
	var copy = [];
	for(var i = 0; i < table.length; i++){
		var row = [];
		for(var j = 0; j < table.length; j++){
			row.push(table[i][j]);
		}
		copy.push(row);
	}
	return copy;
}