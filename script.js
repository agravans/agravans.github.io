function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        setTimeout(() => element.style.opacity = 1, 10);
    } else {
        element.style.opacity = 0;
        setTimeout(() => element.classList.add('hidden'), 500);
    }
} 