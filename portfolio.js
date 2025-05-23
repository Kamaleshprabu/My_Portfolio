document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    console.log(sections)
    sections.forEach(section => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting)
                    entry.target.classList.add("smoothin");
                else
                    entry.target.classList.remove("smoothin");
            });
        }, { threshold: 0.3 });
        observer.observe(section);
    });
});

const bgMusic = document.getElementById("bg-music");
const musicBtn = document.querySelector(".music_btn");

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
  } else {
    bgMusic.pause();
    musicBtn.innerHTML = `<i class="fa-solid fa-music"></i>`;
  }
}

const imagesToPreload = [
  "./project1.png",
  "./project2.png",
  "./project3.png",
  "./project4.png",
  "./project5.png",
  "./projects_back.png"
];

imagesToPreload.forEach(src => {
  const img = new Image();
  img.src = src;
});


const project = document.getElementById('project_img');
document.getElementById('radio1').addEventListener("change", function(){
  if(this.checked){
    project.src = "./project1.png";
    project.classList.add("blurin");
  }else{
    project.src = "./projects_back.png";
    project.classList.add("blurin");
  }
  setTimeout(() => {
    project.classList.remove("blurin")
  }, 600)
})

document.getElementById('radio2').addEventListener("change", function(){
  if(this.checked){
    project.src = "./project2.png";
    project.classList.add("blurin");
  }else{
    project.src = "./projects_back.png";
    project.classList.add("blurin");
  }
  setTimeout(() => {
    project.classList.remove("blurin")
  }, 600)
})

document.getElementById('radio3').addEventListener("change", function(){
  if(this.checked){
    project.src = "./project3.png";
    project.classList.add("blurin");
  }else{
    project.src = "./projects_back.png";
    project.classList.add("blurin");
  }
  setTimeout(() => {
    project.classList.remove("blurin")
  }, 600)
})

document.getElementById('radio4').addEventListener("change", function(){
  if(this.checked){
    project.src = "./project4.png";
    project.classList.add("blurin");
  }else{
    project.src = "./projects_back.png";
    project.classList.add("blurin");
  }
  setTimeout(() => {
    project.classList.remove("blurin")
  }, 600)
})

document.getElementById('radio5').addEventListener("change", function(){
  if(this.checked){
    project.src = "./project5.png";
    project.classList.add("blurin");
  }else{
    project.src = "./projects_back.png";
    project.classList.add("blurin");
  }
  setTimeout(() => {
    project.classList.remove("blurin")
  }, 600)
})

const skills = document.querySelector(".skills")
window.addEventListener("scroll", function() {
  let distance = window.innerHeight;
  let top = skills.getBoundingClientRect().top;
  if(top < 0)
    document.querySelector(".scroll_btn").classList.add("inword");
  else
    document.querySelector(".scroll_btn").classList.remove("inword");
})

function sendMail(event) {
    event.preventDefault(); // Prevent form from reloading the page

    let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_96vc842", "template_m62u7rd", params)
      .then(function(response) {
        alert("Email Sent!");
      }, function(error) {
        alert("Failed to send email. Please try again.");
        console.error(error);
      });
  }