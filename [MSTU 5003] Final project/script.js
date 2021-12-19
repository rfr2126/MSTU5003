let boroughs = [
	{
		boroughId: "b1",
		boroughName: "Brooklyn",
		boroughBestDays: "Mondays and Thursdays",
		boroughFindings: ["Herman Miller chair"]
	},
	{
		boroughId: "b2",
		boroughName: "The Bronx",
		boroughBestDays: "Mondays and Fridays",
		boroughFindings: ["Ashley Centiar table"]
	}
];

let nycmap = [
	1
];

let boroughsListEl = document.querySelector("#boroughsList");

function printBoroughs(boroughsList) {
	let myBoroughsList;

	if (boroughsList) {
		myBoroughsList = boroughsList;
	} else {
		myBoroughsList = boroughs;
	}

	let boroughsHTML = "";

	for (let borough of myBoroughsList) {
		console.log(borough.boroughName);
		boroughsHTML += `<div id="${borough.boroughId}" class="borough">
		<h6><b>Borough: </b>${borough.boroughName}</p>
		<p><h6>Best days to stoop: ${borough.boroughBestDays} </p>
		<p>What people found:
		<ul>
		<li>${borough.boroughFindings}</li>
		</h6>
		</div>`;
	}
	boroughsListEl.innerHTML = boroughsHTML;
}

printBoroughs();

function filterBoroughs(ev) {
	let viewChoice = ev.currentTarget.value;

	let boroughsList;
	if (viewChoice === "The Bronx") {
		
		boroughsList = boroughs.filter(function (borough) {
			return borough.boroughName === "The Bronx";
		});
	} else if (viewChoice === "Brooklyn") {
		boroughsList = boroughs.filter(function (borough) {
			return borough.boroughName === "Brooklyn";
		});
	} else {
		return newArray[0];
	}

	printBoroughs(boroughsList);
}

function subscriptionAlert() {
  alert("Thanks for your interest in the film. We'll let you know when it's out and how to watch it!");
}
//function filterBoroughs(ev) {
	//let viewChoice = ev.currentTarget.value;

	//let boroughsList;
	//if viewChoice == None {
		//boroughsList = [];
	//}
	//else if (viewChoice === "The Bronx") {
		//boroughsList = boroughs.filter(function (borough) {
			//return borough.boroughName === "The Bronx";
		//});
	//} else if (viewChoice === "Brooklyn") {
		//boroughsList = boroughs.filter(function (borough) {
			//return borough.boroughName === "Brooklyn";
		//});
	//} else {
		//boroughsList = boroughs;
	//}

//	printBoroughs(boroughsList);
//}