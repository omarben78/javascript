window.onload = function() {
	var formValid = document.getElementById('bouton_envoi');
            var nom = document.getElementById('nom');
            var missNom = document.getElementById('missNom');
            var nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

            var tel = document.getElementById('tel');
            var missTel = document.getElementById('missTel');
            var telValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

            var email = document.getElementById('email');
            var missEmail = document.getElementById('missEmail');
            var emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            
            formValid.addEventListener('click', validation);
            
            function validation(event){
                //Si le champ est vide
                if (nom.validity.valueMissing){
                    event.preventDefault();
                    missNom.textContent = 'Nom manquant';
                    missNom.style.color = 'red';
                }
                if (tel.validity.valueMissing){
                    event.preventDefault();
                    missTel.textContent = 'Telephone manquant';
                    missTel.style.color = 'red';
                }
                if (email.validity.valueMissing){
                    event.preventDefault();
                    missEmail.textContent = 'Email manquant';
                    missEmail.style.color = 'red';
                }
            }
}