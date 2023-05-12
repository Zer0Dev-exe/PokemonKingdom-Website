const navletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let navinterval = null;

document.addEventListener('DOMContentLoaded', () => {
  const bgTitle = document.getElementById('navtitle');
  let naviteration = 0;
  
  clearInterval(navinterval);
  
  navinterval = setInterval(() => {
    bgTitle.innerText = bgTitle.innerText
      .split("")
      .map((navletter, navindex) => {
        if(navindex < naviteration) {
          return bgTitle.dataset.value[navindex];
        }
        return navletters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    naviteration += 1 / 3;
    
    // check if the animation is complete and clear the interval
    if(naviteration >= bgTitle.dataset.value.length) { 
      clearInterval(navinterval);
    }
    
  }, 30);
});