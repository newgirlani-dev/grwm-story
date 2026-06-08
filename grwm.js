function toHome(){
	window.location.href="home.html";
}
// function toAbout(){
// 	window.location.href="about.html";
// }
function toStories(){
	window.location.href="stories.html";
}
// function toGallery(){
// 	window.location.href="gallery.html";
// }

function toSubmit(button){
	window.open('https://jobanana-amba.notion.site/my-grwm-story-377de4b2114a80349ad1fa51bbc75d9f?source=copy_link', '_blank');
	if(button) button.blur();
}

function goInsta(button){
	window.open('https://instagram.com/newgirlani_', '_blank');
	if(button) button.blur();
}

function goTikTok(button){
	window.open('https://tiktok.com/@newgirlani', '_blank');
	if(button) button.blur();
}

function goFb(button){
	window.open('https://facebook.com/newgirlani', '_blank');
	if(button) button.blur();
}

function toggle(){
	const navMenu = document.getElementById('nav-menu');
	if (navMenu) {
		navMenu.classList.toggle('active');
	}
}

function showText(imageElement, textToDisplay) {
    const popup = imageElement.nextElementSibling;
    if (popup) {
        popup.innerText = textToDisplay;
        popup.style.opacity = "1";
        popup.style.visibility = "visible";
    }
}

function hideText(imageElement) {
    const popup = imageElement.nextElementSibling;
    if (popup) {
        popup.style.opacity = "0";
        popup.style.visibility = "hidden";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const words = ["INCLUSIVE", "INTENTIONAL", "GRACEFUL"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const targetSpan = document.getElementById("changing-text");

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            targetSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            targetSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 1500; 
            isDeleting = true;
        } 
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; 
            typeSpeed = 500; 
        }

        setTimeout(typeEffect, typeSpeed);
    }

    if (targetSpan) {
        typeEffect();
    }
});

	const vids = document.querySelectorAll('.gal-img');
	const vidlinks = {
		"gga": "https://www.tiktok.com/@newgirlani/video/7646635860753927431",
		"lcfav": "https://www.tiktok.com/@newgirlani/video/7647745498681560327",
		"lc": "https://www.tiktok.com/@newgirlani/video/7644055665756982535",
		"aud": "https://www.tiktok.com/@newgirlani/video/7640702730364882183",
		"paw": "https://www.tiktok.com/@newgirlani/video/7639609246966926599",
		"cons": "https://www.tiktok.com/@newgirlani/video/7641068318001990920",
		"cream": "https://www.tiktok.com/@newgirlani/video/7620656478218636562",
		"haul": "https://www.tiktok.com/@newgirlani/video/7615167918195674376",
		"full": "https://www.tiktok.com/@newgirlani/video/7619161406029434120",
		"cebu": "https://www.tiktok.com/@newgirlani/video/7612531875608792338"
	};

	vids.forEach(vids => {
    vids.addEventListener('click', () => {
        const clickedId = vids.id; 
        const destinationUrl = vidlinks[clickedId];
        if (destinationUrl) {
            window.open(destinationUrl, '_blank');
        }
    	});
	});






