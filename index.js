const input = document.querySelector('input');
const btn = document.querySelector('.button');
const attention = document.querySelector('.attention');

function attentionStyle() {
    attention.textContent = 'Please provide a valid email';
    attention.style.color = 'red';
    attention.style.fontSize = '12px';
    attention.style.lineHeight = '100%';
    attention.style.marginLeft = '30px';
    paragraph.appendChild(attention);
}

function ValidateEmail(input) {

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      document.form1.text1.focus();
      attentionStyle();  
      return false;
  
    }
}

btn.addEventListener('click', function() {
    ValidateEmail()
})