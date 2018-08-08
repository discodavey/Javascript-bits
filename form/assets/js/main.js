var formValidation  = document.querySelector('#form');

formValidation.addEventListener('submit', function(e) {
	var nameField = document.form.name.value;
	var emailField = document.form.email.value;
	var phoneField = document.form.phone.value;
	var commentsField = document.form.comments.value;
	var ozy = document.querySelector(".errorMessage");
	if (!nameField) {
		console.log('Fill name field out');
		ozy.style.display = "block";
	}
	if (!emailField) {
		console.log('Fill email field out');
		ozy.style.display = "block";
	}
	if (!phoneField) {
		console.log('Fill phone field out');
		ozy.style.display = "block";
	}
	if (!commentsField) {
		console.log('Fill comments field out');
		ozy.style.display = "block";
	}
	e.preventDefault();
})