// script.js
grecaptcha.ready(function() {
  grecaptcha.execute('your-recaptcha-site-key', {action: 'submit'})
  .then(function(token) {
    document.getElementById("submit-button").style.display = "block";
  });
});
