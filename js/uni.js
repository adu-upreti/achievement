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


    document.addEventListener("DOMContentLoaded", function () {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxNvwk_vj5SiZe05KS6oNnPlzbKO1OYL2lW2E5N0BP6cB8sjp-SpFplvToHKhuiyXQ/exec";

    function handleFormSubmit(formId) {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener("submit", async function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            body: formData,
            });

            const result = await response.text();
            console.log(formId + " response:", result);

            // JS popup success
            alert("✅ Successfully sent!");

            // Reset form
            form.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            // JS popup failure
            alert("❌ Something went wrong. Please try again.");
        }
        });
    }

    // Attach to both forms
    handleFormSubmit("queryForm");
    handleFormSubmit("contactForm");
    });
