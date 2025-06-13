const footer = document.getElementById("foot");
const footerImg = footer.querySelector('img');
const footerP = footer.querySelector('p');
const button = footer.querySelector('button');

button.addEventListener("click", function(e) {
    const test = footer.classList.toggle('activefooter');
    // Toggle the footer class to switch between states
    if (test){   
        footer.innerHTML = `
           <p> SHARE </p>
           <div class='social-icons'>
            <img src = './images/icon-facebook.svg' alt = 'facebook'>
            <img src = './images/icon-twitter.svg' alt = 'facebook'>
            <img src = './images/icon-pinterest.svg' alt = 'facebook'>
           </div>
        `;
        footer.appendChild(button)
    }else{
        footer.innerHTML = `
            <img src="./images/avatar-michelle.jpg" alt="Michelle Appleton" class="avatar" id="avatar">
            <p><strong>Michelle Appleton</strong>  <br>28 Jun 2020</p>

        `
        footer.appendChild(button)
    };
})