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