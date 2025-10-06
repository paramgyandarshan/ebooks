
/* JavaScript for Mobile Menu */
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.site-nav ul');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});


// Pagination configuration
const ebooksPerPage = 6;
let currentPage = 1;
let totalPages = 1;

// Initialize pagination
document.addEventListener('DOMContentLoaded', function() {
    const ebooks = document.querySelectorAll('.ebook-card');
    totalPages = Math.ceil(ebooks.length / ebooksPerPage);
    
    // Update page counters
    document.getElementById('totalPages').textContent = totalPages;
    document.getElementById('totalPagesBottom').textContent = totalPages;
    
    updatePagination();
});

function changePage(direction) {
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        updatePagination();
    }
}

function updatePagination() {
    const ebooks = document.querySelectorAll('.ebook-card');
    const startIndex = (currentPage - 1) * ebooksPerPage;
    const endIndex = startIndex + ebooksPerPage;
    
    // Show/hide ebooks based on current page
    ebooks.forEach((ebook, index) => {
        ebook.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
    });
    
    // Update page numbers
    document.getElementById('currentPage').textContent = currentPage;
    document.getElementById('currentPageBottom').textContent = currentPage;
    
    // Update button states
    const prevButtons = document.querySelectorAll('.pagination-btn.prev');
    const nextButtons = document.querySelectorAll('.pagination-btn.next');
    
    prevButtons.forEach(btn => {
        btn.disabled = currentPage === 1;
    });
    
    nextButtons.forEach(btn => {
        btn.disabled = currentPage === totalPages;
    });
}