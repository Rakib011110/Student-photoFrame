// Get DOM elements
const nameInput = document.getElementById('student-name');
const courseInput = document.getElementById('course-name');
const dateInput = document.getElementById('completion-date');
const placeInput = document.getElementById('place');
const downloadBtn = document.getElementById('download-btn');
const nameDisplay = document.getElementById('name-display');
const courseDisplay = document.getElementById('course-display');
const dateDisplay = document.getElementById('date-display');
const placeDisplay = document.getElementById('place-display');
const preview = document.getElementById('preview');

// Update display when inputs change
nameInput.addEventListener('input', () => {
  nameDisplay.textContent = nameInput.value;
});

courseInput.addEventListener('input', () => {
  courseDisplay.textContent = courseInput.value;
});

dateInput.addEventListener('input', () => {
  dateDisplay.textContent = dateInput.value;
});

placeInput.addEventListener('input', () => {
  placeDisplay.textContent = placeInput.value;
});

// Handle download
downloadBtn.addEventListener('click', async () => {
  try {
    const canvas = await html2canvas(preview);
    const link = document.createElement('a');
    link.download = 'caddcore_certificate.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (error) {
    console.error('Error generating certificate:', error);
    alert('Error generating certificate. Please try again.');
  }
});
