const form = document.getElementById('valid-form');

let formvalid = false;

function numbervalid(valor1, valor2) {
    return valor1 > valor2;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valor1 = parseFloat(document.getElementById('v1').value);
    let valor2 = parseFloat(document.getElementById('v2').value);

    if (numbervalid(valor1, valor2)){
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';
        valor1.value = '';
        valor2.value = '';
    } 
    else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        
    }
});