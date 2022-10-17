'use strict';
let details = document.querySelector('.details');
let imgContainer = document.querySelector('.img-container');
let getUserBtn = document.querySelector('#get-user-btn');

let url = 'https://random-data-api.com/api/v2/users?response_type=json';

function getUser() {
	//fetching data from the URL.
	fetch(url)
		//Extracting the JSON content from the response with 'json()' method
		.then((response) => response.json())
		.then((data) => {
			imgContainer.innerHTML = `<img src=${data.avatar}>`;
			console.log(data);
			details.innerHTML = `<h1>${data.first_name} ${data.last_name}</h1>
            <h3>${data.employment.title}
            <h3><i class="fa fa-map-marker"></i> ${data.address.city}</h3>`;

			let randomColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
			document.documentElement.style.setProperty('--theme-color', randomColor);
            console.log(randomColor);
		});
}

window.addEventListener('load', getUser);
getUserBtn.addEventListener('click', getUser);
