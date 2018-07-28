function myFistApp(name, age) {

	alert("Привет! Меня зовут " + name + " и это моя первая программа.");

	function showSkills() {
		let skills = ["HTML5 ", "CSS3 ", "JS ", "PS"];
		for(let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + "<br>" )
			//я владею html <br>
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			document.write("Поздравляю, " + name + "! Ты уже совсем взрослый человек, ведь тебе " + age + "!")
		} else {
			document.write("Ты еще такой юный!")
		}
	}

	checkAge();

	function calcPow(num) {
		console.log("Квадрат числа " + num + " равен " + num*num)
	}

	calcPow(5);
	calcPow(114);
	calcPow(15764);
	calcPow(999);







}

myFistApp ("Дарья", 23);