function toggleUniversityDropdown(event) {
    // Only handle click events on mobile (less than 768px)
    if (window.innerWidth < 768) {
        event.preventDefault();
        event.stopPropagation();
        
        const toggle = event.currentTarget;
        const submenu = toggle.nextElementSibling;
        
        // Close other dropdowns if any
        document.querySelectorAll('.university-submenu').forEach(menu => {
            if (menu !== submenu) {
                menu.classList.remove('show');
            }
        });
        
        document.querySelectorAll('.university-toggle').forEach(btn => {
            if (btn !== toggle) {
                btn.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        submenu.classList.toggle('show');
        toggle.classList.toggle('active');
    }
    // On desktop, let CSS hover handle the dropdown
}

// Close dropdown when clicking outside (mobile only)
document.addEventListener('click', function(event) {
    if (window.innerWidth < 768) {
        if (!event.target.closest('.university-dropdown')) {
            document.querySelectorAll('.university-submenu').forEach(menu => {
                menu.classList.remove('show');
            });
            document.querySelectorAll('.university-toggle').forEach(btn => {
                btn.classList.remove('active');
            });
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile dropdowns when switching to desktop
    if (window.innerWidth >= 768) {
        document.querySelectorAll('.university-submenu').forEach(menu => {
            menu.classList.remove('show');
        });
        document.querySelectorAll('.university-toggle').forEach(btn => {
            btn.classList.remove('active');
        });
    }
});