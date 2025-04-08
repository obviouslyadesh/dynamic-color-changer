const colorBox = document.getElementById('colorBox');
const colorPicker = document.getElementById('colorPicker');
const resetBtn = document.getElementById('resetBtn');
const defaultColor = '#f0f0f0';


const savedColor = localStorage.getItem('savedColor');
if (savedColor) {
  colorBox.style.backgroundColor = savedColor;
  colorPicker.value = savedColor;
}


colorPicker.addEventListener('input', function () {
  const selectedColor = colorPicker.value;
  colorBox.style.backgroundColor = selectedColor;
  localStorage.setItem('savedColor', selectedColor);
});


resetBtn.addEventListener('click', function () {
  colorBox.style.backgroundColor = defaultColor;
  colorPicker.value = defaultColor;
  localStorage.removeItem('savedColor');
});
