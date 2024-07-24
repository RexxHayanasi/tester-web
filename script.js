// Select all section elements
const sections = document.querySelectorAll('section');

// Add event listener to each section
sections.forEach((section) => {
  // Select the download link within the section
  const downloadLink = section.querySelector('a[download]');

  // Add event listener to the download link
  downloadLink.addEventListener('click', (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the href attribute of the link
    const url = downloadLink.href;

    // Create a new anchor element to trigger the download
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = true;

    // Trigger the download
    anchor.click();
  });
});

// Add event listener to the navigation menu
const nav = document.querySelector('nav');
nav.addEventListener('click', (e) => {
  // Get the target element
  const target = e.target;

  // Check if the target is a navigation link
  if (target.tagName === 'A') {
    // Prevent default link behavior
    e.preventDefault();

    // Get the href attribute of the link
    const url = target.href;

    // Scroll to the corresponding section
    const section = document.querySelector(`section[id="${url.split('#')[1]}"]`);
    section.scrollIntoView({ behavior: 'mooth' });
  }
});
