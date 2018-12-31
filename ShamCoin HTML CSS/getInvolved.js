colors = ["red","blue","green","yellow","orange","purple","white"];
submit1 = false;
submit2 = false;
submit3 = false;

function setBackground(line) {
	if (line.type == "focus") {
		line.target.style.backgroundColor = colors[parseInt(Math.random() * (colors.length + 1))];
	}
	else if (line.type == "blur") {
		line.target.style.backgroundColor = "white";
	}
}

function signUp(event) {
	event.preventDefault();
}

function donate(event) {
	event.preventDefault();
}

function attendEvent(event) {
	event.preventDefault();
}

window.addEventListener("load", function() {
	var cssSelector = "input[type=text],input[type=email],input[type=tel]";
	var fields = document.querySelectorAll(cssSelector);
	for (i = 0; i < fields.length; i++) {
		fields[i].addEventListener("focus",setBackground);
		fields[i].addEventListener("blur",setBackground);
	}
});

function becomeMember(event) {
	event.preventDefault();
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phoneNumber").value;
	
	var required = document.getElementById("required1");
	
	if (firstName == "" || lastName == "" || email == "" || phone == "") {
		required.innerHTML = "Please put in all the contents";
	}
	else if (submit1 == false) {
		required.innerHTML = "";
		submit1 = true;
		addNewMember(firstName, lastName, email, phone);
	}
}

function addNewMember(first, last, email, phone) {
	var div = document.createElement("div");
	
	var name = document.createElement("p");
	name.append("Welcome " + first + " " + last);
	
	var info = document.createElement("p");
	info.append("You're email is " + email + " and you're phone is " + phone);
	
	div.appendChild(name);
	div.appendChild(info);
	
	var getInvolved = document.getElementById("getInvolved");
	getInvolved.appendChild(div);
}

function donateMoney(event) {
	event.preventDefault();
	var amount = document.getElementById("amount").value;
	
	if (document.getElementById("val1").checked) {
		var radButton = document.getElementById("val1").value;
	}
	else if (document.getElementById("val2").checked) {
		var radButton = document.getElementById("val2").value;
	}
	else if (document.getElementById("val3").checked) {
		var radButton = document.getElementById("val3").value;
	}
	else if (document.getElementById("val4").checked) {
		var radButton = document.getElementById("val4").value;
	}
	else {
		var radButton = "";
	}
	
	var card = document.getElementById("card").value;
	
	var required = document.getElementById("required2");
	
	if (amount == "" || radButton == "" || card == "") {
		required.innerHTML = "Please put in all the contents";
	}
	else if (submit2 == false) {
		required.innerHTML = "";
		submit2 = true;
		addThankYou(amount, radButton, card);
	}
}

function addThankYou(amount, radButton, card) {
	var div = document.createElement("div");
	
	var moneyInfo = document.createElement("p");
	moneyInfo.append("Thank you for donating $" + amount + " with " + radButton);
	
	var cardInfo = document.createElement("p");
	cardInfo.append("You used the card: " + card);
	
	div.appendChild(moneyInfo);
	div.appendChild(cardInfo);
	
	var donations = document.getElementById("donations");
	donations.appendChild(div);
}

function attendAnEvent(event) {
	event.preventDefault();
	var day = document.querySelector("select").value;
	var firstName2 = document.getElementById("firstName2").value;
	var lastName2 = document.getElementById("lastName2").value;
	var email2 = document.getElementById("email2").value;
	var feedback = document.getElementById("feedback").value;
	
	var required = document.getElementById("required3");
	
	if (day == "" || firstName2 == "" || lastName2 == "" || email2 == "" || feedback == "") {
		required.innerHTML = "Please put in all the contents";
	}
	else if (submit3 == false) {
		required.innerHTML = "";
		submit3 = true;
		addNewEvent(day, firstName2, lastName2, email2, feedback);
	}
}

function addNewEvent(day, first, last, email, feedback) {
	var div = document.createElement("div");
	
	var name = document.createElement("p");
	name.append("Welcome " + first + " " + last);
	
	var info = document.createElement("p");
	info.append("You signed up on " + day + " with " + email);
	
	var comments = document.createElement("p");
	comments.append("Thank you for the feedback!");
	
	div.appendChild(name);
	div.appendChild(info);
	div.append(comments);
	
	var events = document.getElementById("events");
	events.appendChild(div);
}

window.addEventListener("load", function() {
	var member = document.getElementById("member");
	var donate = document.getElementById("donate");
	var attendEvent = document.getElementById("attendEvent");

	member.addEventListener("click", becomeMember);
	donate.addEventListener("click", donateMoney);
	attendEvent.addEventListener("click", attendAnEvent);
});