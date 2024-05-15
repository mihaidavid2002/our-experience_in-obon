document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mouseover', function () {
            section.style.backgroundColor = '#e0f7fa';
        });

        section.addEventListener('mouseout', function () {
            section.style.backgroundColor = '#fff';
        });
    });
});
