// < Password cimfirm message >

const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const confirm = document.querySelector('.password-confirm')

const handlePassword = () => {
  if (`${password.value}` === `${password2.value}`) {
    confirm.innerText = 'matched'
    confirm.style.color = '#3498db'
    setTimeout(() => {
      confirm.innerText = ''
    }, 3000)
  }
  if (`${password.value}` !== `${password2.value}`) {
    confirm.innerText = 'mismatched'
    confirm.style.color = '#f39c12'
  }
}

password.addEventListener('input', handlePassword)
password2.addEventListener('input', handlePassword)
