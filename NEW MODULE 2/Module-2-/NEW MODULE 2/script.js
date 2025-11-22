function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
    // Restore body scroll when menu is closed
    document.body.style.overflow = "";
}

// Close menu when clicking outside of it
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('mobile-menu');
    const modalContent = modal.querySelector('.modal__content');
    
    // Close menu when clicking on the backdrop (but not the content)
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeMenu();
        }
    });
    
    // Prevent clicks inside modal content from closing the menu
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.body.classList.contains('menu--open')) {
            closeMenu();
        }
    });
});