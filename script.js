document.addEventListener('DOMContentLoaded', () => {

    // 1. Real-time clock
    function updateTime() {
        const timeElement = document.getElementById('local-time');
        if (timeElement) {
            const now = new Date();
            timeElement.textContent = now.toLocaleTimeString('en-GB', {
                hour: '2-digit', minute: '2-digit', hour12: false
            });
        }
    }
    setInterval(updateTime, 1000);
    updateTime();

    // 2. Modal Pro (Popup window)
    const modal = document.getElementById('pro-modal');
    const openBtn = document.getElementById('open-pro-modal');
    const closeBtn = document.getElementById('close-modal');

    if (modal && openBtn && closeBtn) {
        openBtn.addEventListener('click', () => modal.showModal());
        closeBtn.addEventListener('click', () => modal.close());
        modal.addEventListener('click', (e) => {
            const rect = modal.getBoundingClientRect();
            if (e.clientX < rect.left || e.clientX > rect.right ||
                e.clientY < rect.top || e.clientY > rect.bottom) {
                modal.close();
            }
        });
    }

    // 3. Form Submission (AJAX, no page reload)
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            status.textContent = "Sending...";
            status.className = "form-status";

            const data = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    status.textContent = 'Message sent successfully!';
                    status.classList.add('success');
                    form.reset();
                } else {
                    status.textContent = 'There was an error. Please try again.';
                    status.classList.add('error');
                }
            } catch (error) {
                status.textContent = 'There was an error. Please try again.';
                status.classList.add('error');
            }
        });
    }

    // 4. 3D Tilt Effect (Desktop only)
    if (window.matchMedia("(min-width: 1024px)").matches) {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                // Calculate rotation based on mouse position
                const rotateX = ((y - rect.height / 2) / rect.height / 2) * -1.5;
                const rotateY = ((x - rect.width / 2) / rect.width / 2) * 1.5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
            });

            card.addEventListener('mouseleave', () => {
                // Restore original position on mouse leave
                card.style.transform = 'translateY(0)';
            });
        });
    }
});