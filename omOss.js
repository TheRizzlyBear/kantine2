//Viser ansatte-tabellen når nettsiden lastes inn
function ansatte() {
	fetch("ansatte.json")
	.then(function(response){
		return response.json();
	})
	.then(function(ansatte){
		let placeholder = document.querySelector("#data-output");
		let out = "";
		for(let product of ansatte){
			out += `
				<tr>
					<td> <img src='${product.image}'> </td>
					<td>${product.name}</td>
                    <td>${product.role}</td>
				</tr>
			`;
		}

		placeholder.innerHTML = out;
	});
}
ansatte();