//your JS code here. If required.
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Helper function to strip leading 'a', 'an', or 'the' (case-insensitive)
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

// Sort comparing the stripped versions while preserving the original name
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Render each band inside the <ul>
document.querySelector('#bands').innerHTML = sortedBands
  .map(band => `<li>${band}</li>`)
  .join('');