
document.querySelector('form').addEventListener('submit', (e) => {
    const amount = document.getElementById('donation-amount').value;
    if (amount <= 0) {
        alert("Please enter a valid donation amount.");
        e.preventDefault();
    } else {
        alert("Thank you for your donation!");
    }
});

function showThankYouPopup() {
    document.getElementById('thankYouPopup').style.display = 'flex';
}


function closePopup() {
    document.getElementById('thankYouPopup').style.display = 'none';
}


document.getElementById('donateForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const amount = document.getElementById('amount').value;

    
    if (amount && amount > 0) {
        
        showThankYouPopup();
    } else {
        alert("Please enter a valid donation amount.");
    }
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    let isValid = true;

    
    form.querySelectorAll("input, textarea").forEach((input) => {
        const errorMessage = input.nextElementSibling;

        if (!input.value.trim()) {
            isValid = false;
            errorMessage.style.display = "block"; 
        } else {
            errorMessage.style.display = "none"; 
        }
    });

    
    if (isValid) {
        alert("Thank you for your message! We'll get back to you soon.");
        form.reset(); 
    }
});
