document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.querySelector('.slider');
  const body = document.querySelector('body');
  
  const slider = document.querySelector('.d2l');
  const linkList = document.links;
  
  slider.addEventListener('click', () => {
    if (slider.classList.contains('off')) {
      slider.classList.remove('off');
      slider.classList.add('on');
      body.classList.add('dark');
      for (let link of linkList) {
        link.classList.remove('lightLink');
        link.classList.add('darkLink');
      }
    } else {
      slider.classList.remove('on');
      slider.classList.add('off');
      body.classList.remove('dark');
      for (let link of linkList) {
        link.classList.remove('darkLink');
        link.classList.add('lightLink');
      }
    }
  })
});