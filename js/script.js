// menu forms
const kelilingLink = document.getElementById('keliling-link');
const luasLink = document.getElementById('luas-link');
const kelilingForm = document.getElementById('keliling-form');
const luasForm = document.getElementById('luas-form');

kelilingLink.addEventListener('click', () => {
  kelilingLink.classList.add('active');
  luasLink.classList.remove('active');
  kelilingForm.classList.add('active');
  luasForm.classList.remove('active');
  resetForm('keliling');
});

luasLink.addEventListener('click', () => {
  luasLink.classList.add('active');
  kelilingLink.classList.remove('active');
  luasForm.classList.add('active');
  kelilingForm.classList.remove('active');
  resetForm('luas');
});

// Validasi input
function validateInput(id) {
  const input = document.getElementById(id);
  const value = input.value.trim();
  const error = document.getElementById(`${id}-error`);

  if (!value || isNaN(value) || value <= 0) {
    input.classList.add('invalid');
    error.textContent = 'nilai tidak boleh kosong';
    error.classList.add('active');
    return false;
  }

  input.classList.remove('invalid');
  error.classList.remove('active');
  return true;
}

// perhitungan functions
function hitungKeliling(e) {
  e.preventDefault();
  const validS1 = validateInput('s1');
  const validS2 = validateInput('s2');
  const validS3 = validateInput('s3');

  if (!validS1 || !validS2 || !validS3) return;

  const s1 = parseFloat(document.getElementById('s1').value);
  const s2 = parseFloat(document.getElementById('s2').value);
  const s3 = parseFloat(document.getElementById('s3').value);

  const keliling = s1 + s2 + s3;

  document.getElementById('keliling-value').textContent = keliling;
  document.getElementById('keliling-perhitungan').textContent = `Perhitungan: ${s1} + ${s2} + ${s3} = ${keliling}`;

  document.getElementById('keliling-result').classList.add('active');
  document.getElementById('show-perhitungan-btn').style.display = 'flex';
  document.getElementById('keliling-rumus-box').classList.remove('active');
  document.getElementById('keliling-perhitungan').classList.remove('active');
}

function hitungLuas(e) {
  e.preventDefault();
  const validAlas = validateInput('alas');
  const validTinggi = validateInput('tinggi');

  if (!validAlas || !validTinggi) return;
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);

  const luas = (1 / 2) * alas * tinggi;

  document.getElementById('luas-value').textContent = luas;
  document.getElementById('luas-perhitungan').textContent = `Perhitungan: 1/2 × ${alas} × ${tinggi} = ${luas}`;

  document.getElementById('luas-result').classList.add('active');
  document.getElementById('show-perhitungan-btn-luas').style.display = 'flex';
  document.getElementById('luas-rumus-box').classList.remove('active');
  document.getElementById('luas-perhitungan').classList.remove('active');
}
// validasi input untuk mencegah karakter yang tidak valid secara realtime
function preventInvalidCharacters(inputId) {
  const input = document.getElementById(inputId);
  input.addEventListener('keydown', function (e) {
    if (['e', 'E', '+', '-'].includes(e.key)) {
      e.preventDefault();
    }
  });
}
// lihat perhitungan keseluruhan
function showCalculation(type) {
  if (type === 'keliling') {
    document.getElementById('keliling-rumus-box').classList.add('active');
    document.getElementById('keliling-perhitungan').classList.add('active');
    document.getElementById('show-perhitungan-btn').style.display = 'none';
  } else {
    document.getElementById('luas-rumus-box').classList.add('active');
    document.getElementById('luas-perhitungan').classList.add('active');
    document.getElementById('show-perhitungan-btn-luas').style.display = 'none';
  }
}

// Reset form function
function resetForm(type) {
  if (type === 'keliling') {
    ['s1', 's2', 's3'].forEach(id => {
      document.getElementById(id).value = '';
      document.getElementById(id).classList.remove('invalid');
      document.getElementById(`${id}-error`).classList.remove('active');
    });
    document.getElementById('keliling-result').classList.remove('active');
    document.getElementById('keliling-rumus-box').classList.remove('active');
    document.getElementById('keliling-perhitungan').classList.remove('active');
    document.getElementById('show-perhitungan-btn').style.display = 'none';
  } else {
    ['alas', 'tinggi'].forEach(id => {
      document.getElementById(id).value = '';
      document.getElementById(id).classList.remove('invalid');
      document.getElementById(`${id}-error`).classList.remove('active');
    });
    document.getElementById('luas-result').classList.remove('active');
    document.getElementById('luas-rumus-box').classList.remove('active');
    document.getElementById('luas-perhitungan').classList.remove('active');
    document.getElementById('show-perhitungan-btn-luas').style.display = 'none';
  }
}

// event listener input
document.addEventListener('DOMContentLoaded', function () {
  ['s1', 's2', 's3'].forEach(id => {
    preventInvalidCharacters(id);
    document.getElementById(id).addEventListener('input', () => {
      validateInput(id);
    });
  });

  ['alas', 'tinggi'].forEach(id => {
    preventInvalidCharacters(id);
    document.getElementById(id).addEventListener('input', () => {
      validateInput(id);
    });
  });
});
