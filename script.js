//Soal Nomer 6
function handleGetFormData() {
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;

  return {
    name: name,
    city: city,
    email: email,
    zipCode: zipCode,
    status: status,
  };
}
//soal nomer 7
function isNumber(inputString) {
  return !isNaN(inputString);
}
//soal Nomer 8
function checkboxIsChecked() {
  var checkbox = document.getElementById('status');
  return checkbox.checked;
}
//soal Nomer 9
function validateFormData(formData) {
  if (formData !== null) {
    if (isNumber(formData.zipCode) && checkboxIsChecked(formData.status)) {
      return true;
    }
  }
  return false;
}
// soal Nomer 10
function submit() {
  event.preventDefault();
  if (!validateFormData(handleGetFormData())) {
    document.getElementById('warning').textContent = 'Periksa form anda sekali lagi';
  } else {
    document.getElementById('warning').textContent = '';
  }
}

document.querySelector('form').addEventListener('submit', submit);
