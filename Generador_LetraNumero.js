
function GetRandom(dataLength){
	return Math.floor((Math.random()*dataLength-1)+1);
}

function CardSelect(){
	$("#TopCard").text("");
	$("#BotCard").text("");
	var dataLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var dataNumber = ["1","2","3","4","5","6","7","8","9"];
	var x = [1,2,3,4,5,6,7,8,9,10];
	var txtTopLetter = dataLetter[GetRandom(dataLetter.length)];
	var txtTopNumber = dataNumber[GetRandom(dataNumber.length)];
	var txtTop = txtTopLetter.concat(txtTopNumber);
	var txtBot = txtTopNumber.concat(txtTopLetter);	
	var x1 = x[GetRandom(x.length)];
	var x2 = x[GetRandom(x.length)];

	if (x1 % 2 == 0) {
		if (x2 % 2 == 0) {
			$("#TopCard").text(txtTop);
		}
		else
			$("#TopCard").text(txtBot);
	}	
	else if (x2 % 2 != 0) {
			$("#BotCard").text(txtBot);
			}	else {	
			$("#BotCard").text(txtTop);
				}
}

function CheckAnwswer(userAnswer) {
	var correctAnswer = userAnswer;
	var totalScore = parseFloat($("#total").text());
	var result = 0;
	if ($("#TopCard").text() != ""){ 
		result = CheckNumber($("#TopCard").text());
	}
	else
		result = CheckVocal($("#BotCard").text());

	if (correctAnswer == result) {
		totalScore += 10; 
	}
	$("#total").text(totalScore.toString());
	CardSelect();
}

function CheckNumber (TCard){
	var aNumber = Array.from(TCard);
	var result = 0;
	var numSent = 0;	
	if (isNaN(aNumber[0]) == false) {
		//numSent = parseFloat(aNumber[0]);
		result = evenNumber(parseFloat(aNumber[0]));
	}
	else
		//numSent = parseFloat(aNumber[1]);
		result = evenNumber(parseFloat(aNumber[1]));
	return result;
}

function CheckVocal(BCard) {
	var aVocal = Array.from(BCard);
	var result = 0;
	if (isNaN(aVocal[0]) == true) {
		result = evenVocal(aVocal[0]);
	}
	else
		result = evenVocal(aVocal[1]);
	return result;
}

function evenVocal(xletter) {
	var vocals = ["A","E","I","O","U"];
	var	result = 0;
	for (var i = vocals.length - 1; i >= 0; i--) {
		if (vocals[i] == xletter) {
			result = 1;
		}
	}
	return result;
}

function evenNumber(xnumber) {
	var result = 0;
	if(xnumber % 2 == 0){
		result = 1;
	}
	return result;
}



function conteo(){
var timer = new Timer();
timer.start({countdown: true, startValues: {seconds: 45}});
$('#countdownExample .values').html(timer.getTimeValues().toString());
timer.addEventListener('secondsUpdated', function (e) {
    $('#countdownExample .values').html(timer.getTimeValues().toString());
});
timer.addEventListener('targetAchieved', function (e) {
    alert("Score: " + $("#total").text());
	window.location = "index.html";    
});

}

function Init() {
	conteo();
	CardSelect();
}
Init();
