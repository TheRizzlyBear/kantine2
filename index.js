//Viser frokost-tabellen når nettsiden lastes inn
function frokostStart() {
	fetch("frokost.json")
	.then(function(response){
		return response.json();
	})
	.then(function(frokost){
		let placeholder = document.querySelector("#data-output");
		let out = "";
		for(let product of frokost){
			out += `
				<tr>
					<td> <img src='${product.image}'> </td>
					<td>${product.name}</td>
					<td>${product.price}</td>
				</tr>
			`;
		}

		placeholder.innerHTML = out;
	});
}
frokostStart();

//Viser tabellen for drikker
function drikkeClick() {
		fetch("drikker.json")
		.then(function(response){
			return response.json();
		})
		.then(function(drikker){
			let placeholder = document.querySelector("#data-output");
			let out = "";
			for(let product of drikker){
				out += `
					<tr>
						<td> <img src='${product.image}'> </td>
						<td>${product.name}</td>
						<td>${product.price}</td>
					</tr>
				`;
			}
		
			placeholder.innerHTML = out;
		});
}



//Viser tabellen for frokost
function frokostClick() {
		fetch("frokost.json")
		.then(function(response){
			return response.json();
		})
		.then(function(frokost){
			let placeholder = document.querySelector("#data-output");
			let out = "";
			for(let product of frokost){
				out += `
					<tr>
						<td> <img src='${product.image}'> </td>
						<td>${product.name}</td>
						<td>${product.price}</td>
					</tr>
				`;
			}

			placeholder.innerHTML = out;
		});
}


//Viser tabellen for middag
function middagClick() {
		fetch("middag.json")
		.then(function(response){
			return response.json();
		})
		.then(function(middag){
			let placeholder = document.querySelector("#data-output");
			let out = "";
			for(let product of middag){
				out += `
					<tr>
						<td> <img src='${product.image}'> </td>
						<td>${product.name}</td>
						<td>${product.price}</td>
					</tr>
				`;
			}

			placeholder.innerHTML = out;
		});
}


//Viser tabellen for annet
function annetClick() {
		fetch("annet.json")
		.then(function(response){
			return response.json();
		})
		.then(function(annet){
			let placeholder = document.querySelector("#data-output");
			let out = "";
			for(let product of annet){
				out += `
					<tr>
						<td> <img src='${product.image}'> </td>
						<td>${product.name}</td>
						<td>${product.price}</td>
					</tr>
				`;
			}

			placeholder.innerHTML = out;
		});
}


