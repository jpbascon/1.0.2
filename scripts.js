const btnSubscribe = document.getElementById('js-btn-subscribe');
const formContainer = document.getElementById('js-form');
const successFormDesktop = document.getElementById('js-desktop-form-success');
const successFormMobile = document.getElementById('js-mobile-form-success');

const errorMessage = document.getElementById('js-error-message');
const inputEmail = document.getElementById('js-email-validator');
const btnDismiss = document.querySelectorAll('.js-btn-dismiss');
const emailInput = document.querySelectorAll('.js-email');

let active = true;
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
    const emailValue = inputEmail.value.trim();
    if (!isValidEmail(emailValue)) {
      errorMessage.style.display = 'block';
      inputEmail.classList.add('active');
      return;
    } else {
      errorMessage.style.display = 'none';
      inputEmail.classList.remove('active');
      active = false;
    }
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

inputEmail.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    btnSubscribe.click();
  }
})

function btnDismissFtn() {
  btnDismiss.forEach(btn => {
    btn.addEventListener('click', () => {
      if (active) {
        if (mobile) {
          formContainer.style.display = 'none'
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

function isValidEmail(email) {
  // Simple email regex for demonstration
  emailInput.forEach((e) => {
    e.innerHTML = email;
  })

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

window.addEventListener('resize', updateMobileFlag);