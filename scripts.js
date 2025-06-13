const btnSubscribe = document.getElementById('js-btn-subscribe');
const btnDismiss = document.querySelectorAll('.js-btn-dismiss');
const formContainer = document.getElementById('form');
const successFormDesktop = document.getElementById('desktop-form-success');
const successFormMobile = document.getElementById('mobile-form-success');

let active = false;
let mobileDismiss = false;

function updateMobileFlag() {
  mobile = window.innerWidth <= 600;
}

document.addEventListener("DOMContentLoaded", () => {
  updateMobileFlag();
  btnSubscribeFtn();
  btnDismissFtn();
});

function btnSubscribeFtn() {
  btnSubscribe.addEventListener('click', () => {
    if (!active) {
      formContainer.style.display = 'none';
      successFormDesktop.style.display = 'flex';
      active = true;
    }

    if (mobile) {
      formContainer.style.display = 'none'
      successFormDesktop.style.display = 'none';
      successFormMobile.style.display = 'flex';
      mobileDismiss = true;
    }
  })
}

function btnDismissFtn() {
  btnDismiss.forEach(btn => {
    btn.addEventListener('click', () => {
      if (active) {
        if (mobile) {
          formContainer.style.display = 'flex'
          if (mobileDismiss) {
            successFormMobile.style.display = 'none'
            mobileDismiss = false;
          }
        }
        successFormDesktop.style.display = 'none';
        formContainer.style.display = 'flex';
        active = false;
      }
    });
  });
}

window.addEventListener('resize', updateMobileFlag);