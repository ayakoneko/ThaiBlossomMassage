/* ===============================
   HEADER INITIALIZATION FUNCTION
   =============================== */
function initHeader() {
    const hamburger = document.querySelector('.hamburger');
    const navi = document.querySelector('#navi');
    const header = document.querySelector('#header');

    if (!hamburger || !navi || !header) return; 

    // Toggle menu open/close
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navi.classList.toggle('active');
        header.classList.toggle('active'); 
    });

    // Close menu when clicking nav links
    const naviMenu = document.querySelectorAll('#navi .menu a');

    naviMenu.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navi.classList.remove('active');
            header.classList.remove('active');
        });
    });
}

/* ===============================
   LOAD SHARED HEADER (header.html)
   =============================== */
document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById("header-placeholder");

    if (placeholder) {
        fetch("header.html")
            .then(res => res.text())
            .then(html => {
                placeholder.innerHTML = html;

                initHeader();
            })
            .catch(err => console.error("Header load error:", err));
    }
});