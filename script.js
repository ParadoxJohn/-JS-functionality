document.getElementById("acceptButton").addEventListener("click", function() { 
    var additionalInfoPanel = document.getElementById("additionalInfoPanel"); 
    var acceptButton = document.getElementById("acceptButton"); 
    var accepted = confirm("Чи бажаєте продовжити і ввести додаткову інформацію?"); 
    var confirmButton = document.getElementById("confirmButton"); 
    if (accepted) { 
        additionalInfoPanel.style.display = "block"; 
        acceptButton.style.display = "none"; 
        confirmButton.style.display = "block";
    } else { 
        additionalInfoPanel.style.display = "none";
    } 
}); 

const form = document.querySelector('form'); 
confirmButton.addEventListener('click', (event) => { 
    event.preventDefault();  

    const fullName = document.querySelector('input[placeholder="Enter your name"]').value; 
    const username = document.querySelector('input[placeholder="Enter your username"]').value; 
    const email = document.querySelector('input[placeholder="Enter your email"]').value; 
    const phoneNumber = document.querySelector('input[placeholder="Enter your number"]').value; 
    const password = document.querySelector('input[placeholder="Enter your password"]').value; 
    const age = document.querySelector('input[placeholder="Enter your age"]').value; 
    const interests = document.querySelector('input[placeholder="Enter your interests"]').value; 
    const job = document.querySelector('input[placeholder="Enter your job"]').value; 
    
    const userData = { 
        fullName, 
        username, 
        email, 
        phoneNumber, 
        password, 
        age, 
        interests, 
        job 
    }; 
    
    const jsonData = JSON.stringify(userData, null, 2); 
    alert(jsonData); 
}); 

const passwordInput = document.querySelector('input[placeholder="Enter your password"]'); 
const confirmPasswordInput = document.querySelector('input[placeholder="Confirm your password"]'); 

confirmPasswordInput.addEventListener('input', () => { 
    if (passwordInput.value === confirmPasswordInput.value) { 
        acceptButton.style.display = 'block'; 
    } else { 
        acceptButton.style.display = 'none'; 
    } 
    
    if (confirmPasswordInput.value === passwordInput.value) { 
        acceptButton.style.display = 'block'; 
    } else { 
        acceptButton.style.display = 'none'; 
    } 
});
