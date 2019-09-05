/*var d0 = [[0,6,Infinity,4,7],[9,0,7,Infinity,Infinity],[Infinity,5,0,Infinity,14],[8,1,Infinity,0,15],[2,Infinity,2,19,0]];
var p =  [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
Floyd([d0], 5, p)*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function genRandomValue(){
	var values = [getRandomInt(1, 25),Infinity, getRandomInt(26, 50)];
	return values[getRandomInt(0, 2)];
}

function genMatrix(m){
	var table = Array.from(Array(m),()=> new Array(m));
	for(var i = 0; i < m; i++){
		for(var j = 0; j < m; j++){
			if(i===j){
				table[i][j] = 0;
			}
			else{
				table[i][j] = genRandomValue();
			}
		}
	}
	return table;
}

function genTableP(m){
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

function testFloyd(){
	var m = getRandomInt(5, 10);
	var tableP =  [genTableP(m)];
	var d0 = [genMatrix(m)];

	var start = new Date().getMilliseconds();
	console.log(Floyd(d0, m, tableP));
	var finish = new Date().getMilliseconds();
	return finish - start;
}

function runTest(){
	var value =  getRandomInt(30, 100)
	console.log(value);
	var promedio = 0;
	for(var it = 0; it <= value; it++){
		promedio += testFloyd();
	}
	promedio = promedio/value;
	console.log(promedio);
}

runTest();