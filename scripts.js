const profileShare = document.getElementById('js-profile-share');
const popUpShare = document.getElementById('js-share-pop-up');
const profileContainer = document.getElementById('js-profile-container');
const mobileSvg = document.getElementById('mobile-share-svg');

let shrBtn = false;

document.addEventListener("DOMContentLoaded", () => {
  shareButton();
})

function shareButton() {
  profileShare.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!shrBtn) {
      popUpShare.classList.add('active');
      profileShare.classList.add('active');
      mobileSvg.classList.add('mobile');
      shrBtn = true;
    } else {
      popUpShare.classList.remove('active');
      profileShare.classList.remove('active');
      mobileSvg.classList.remove('mobile');
      shrBtn = false;
    }
  })
  popUpShare.addEventListener('click', (event) => {
    event.stopPropagation();
  });
}

document.addEventListener('click', () => {
  if (shrBtn) {
    popUpShare.classList.remove('active');
    shrBtn = false;
  }
})/*  */
