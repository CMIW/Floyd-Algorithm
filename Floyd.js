/*

*/
function Floyd(tables, m, p){
	for(var k = 0; k < m; k++){
		var table = Array.from(Array(m),()=> new Array(m));
		for(var i = 0; i < m; i++){
			table[i][k] = tables[k][i][k];
			for(var j = 0; j < m; j++){
				if(i==k){
					table[k][j] = tables[k][k][j];
				}
				else if (j != k){
					var num1 = tables[k][i][j];
					var num2 = tables[k][i][k] + tables[k][k][j];
					table[i][j] = min(num1,num2);
					if(hasChanged(num1,num2)){
						p[i][j]=k+1;
					}
				}
			}
		}
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

var d0 = [[0,6,Infinity,4,7],[9,0,7,Infinity,Infinity],[Infinity,5,0,Infinity,14],[8,1,Infinity,0,15],[2,Infinity,2,19,0]];
var p =  [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];

console.log(Floyd([d0], 5, p));