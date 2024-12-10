const developerText = document.getElementById('developerRole');
const roles = ['Frontend Developer', 'Backend Developer','Java Full Stack Developer'];
let currentRoleIndex = 0;

setInterval(() => {
  let currentRole = roles[currentRoleIndex];
  let currentIndex = 0;
  
  let interval = setInterval(() => {
    developerText.textContent = currentRole.substring(0, currentIndex);
    currentIndex++;
    
    if (currentIndex > currentRole.length) {
      clearInterval(interval);
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    }
  }, 70);
}, 2500); 
//////////////////////////////////////////////////////////////////////////////////////////


 
const circles =document.querySelectorAll(`.circle`);
circles.forEach(elem=>{
  var dots =elem.getAttribute("data-dots");
  var marked =elem.getAttribute("data-percent");
  var percent=Math.floor(dots*marked/100);
  var points = "";
  var rotate=360/dots;

  for(let i=0;i < dots;i++){
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML=points;
  
  const pointsMarked =elem.querySelectorAll(`.points`);
  for(let i=0; i<percent; i++){
    pointsMarked[i].classList.add('marked')
  }

})

