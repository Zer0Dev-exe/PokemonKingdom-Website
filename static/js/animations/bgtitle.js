const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.addEventListener('DOMContentLoaded', () => {
  const bgTitle = document.getElementById('bgtitle');
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    bgTitle.innerText = bgTitle.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return bgTitle.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    iteration += 1 / 3;
    
    // check if the animation is complete and clear the interval
    if(iteration >= bgTitle.dataset.value.length) { 
      clearInterval(interval);
    }
    
  }, 30);
});