function toggleDropdown(imageElement) {
    const card = imageElement.closest('.card');
    const dropdownContent = card.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}
