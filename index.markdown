---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
---

<style>
/* Hero Section */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 120px 0 80px;
    margin-top: 60px;
    position: relative;
    overflow: hidden;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    min-height: 500px;
}

.hero-text {
    padding-right: 2rem;
}

.hero-text h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    font-weight: 700;
}

.hero-text p {
    font-size: 1.3rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
    line-height: 1.6;
}

/* Hero Slider */
.hero-slider {
    position: relative;
    width: 100%;
    height: 400px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.slider-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.slider-track {
    display: flex;
    width: 400%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
}

.slide {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.slide img {
    width: auto;
    height: 100%;
    max-width: 100%;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease;
}

.slide img:hover {
    transform: scale(1.05);
}

/* Slider Controls */
.slider-controls {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    z-index: 10;
}

.slider-btn {
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.5);
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.slider-btn:hover {
    background: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.1);
}

.slider-dots {
    display: flex;
    gap: 0.5rem;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: all 0.3s ease;
}

.dot.active {
    background: white;
    transform: scale(1.2);
}

.dot:hover {
    background: rgba(255, 255, 255, 0.7);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 15px 35px;
    border: none;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1.1rem;
    text-align: center;
}

.btn-primary {
    background: #ff6b6b;
    color: white;
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
}

.btn-primary:hover {
    background: #ff5252;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.6);
}

/* Auto-slide animation */
@keyframes slide {
    0%, 20% { transform: translateX(0%); }
    25%, 45% { transform: translateX(-25%); }
    50%, 70% { transform: translateX(-50%); }
    75%, 95% { transform: translateX(-75%); }
    100% { transform: translateX(0%); }
}

.slider-track {
    animation: slide 20s infinite;
}

/* Pause animation on hover */
.hero-slider:hover .slider-track {
    animation-play-state: paused;
}

/* Ebooks Section */
.ebooks-section {
    padding: 80px 0;
    background: #f8f9fa;
}

.ebooks-section h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: #333;
}

.ebooks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.ebook-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.ebook-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

/* Ebook Cover Container */
.ebook-cover {
    width: 100%;
    height: 250px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.ebook-cover img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
}

.ebook-card:hover .ebook-cover img {
    transform: scale(1.05);
}

/* Ebook Info */
.ebook-info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.ebook-info h3 {
    margin-bottom: 0.8rem;
    color: #2c3e50;
    font-size: 1.3rem;
    line-height: 1.4;
    min-height: 3.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c5aa0;
    margin-bottom: 1rem;
}

.description {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    flex-grow: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.btn-buy {
    background: linear-gradient(135deg, #2c5aa0, #1e3d72);
    color: white;
    width: 100%;
    text-align: center;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: block;
}

.btn-buy:hover {
    background: linear-gradient(135deg, #1e3d72, #152a4d);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(44, 90, 160, 0.4);
}

/* Alternative Cover Styles for Different Aspect Ratios */
.ebook-cover.portrait img {
    max-width: 60%;
    max-height: 90%;
}

.ebook-cover.landscape img {
    max-width: 90%;
    max-height: 80%;
}

.ebook-cover.square img {
    max-width: 70%;
    max-height: 70%;
}

/* Fallback for older browsers */
.ebook-cover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255,255,255,0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.ebook-card:hover .ebook-cover::before {
    opacity: 1;
}

/* Search Box Styles */
.search-container {
    margin: 0 2rem;
    flex: 0 1 300px;
}

.search-form {
    display: flex;
    background: white;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    border: 2px solid #e9ecef;
    transition: all 0.3s ease;
}

.search-form:focus-within {
    border-color: #2c5aa0;
    box-shadow: 0 4px 15px rgba(44, 90, 160, 0.2);
}

.search-input {
    flex: 1;
    padding: 12px 20px;
    border: none;
    outline: none;
    font-size: 1rem;
    background: transparent;
}

.search-input::placeholder {
    color: #6c757d;
}

.search-btn {
    padding: 12px 20px;
    background: #2c5aa0;
    color: white;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    font-size: 1.1rem;
}

.search-btn:hover {
    background: #1e3d72;
}

/* Search Section Styles */
.search-section {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 3rem 0;
    text-align: center;
}

.search-box {
    max-width: 600px;
    margin: 0 auto;
}

.search-box h3 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}

.search-box .search-form {
    max-width: 500px;
    margin: 0 auto;
}

/* Inline Search Box */
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.search-box-inline {
    flex: 0 1 350px;
}

.search-box-inline .search-form {
    border-radius: 8px;
}

/* Search Results */
.search-results {
    margin-top: 2rem;
}

.search-result-count {
    color: #666;
    margin-bottom: 1rem;
    font-style: italic;
}

.no-results {
    text-align: center;
    color: #666;
    padding: 2rem;
    font-style: italic;
    grid-column: 1 / -1;
}

/* Pagination Styles */
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    gap: 1rem;
}

.pagination-btn {
    padding: 8px 16px;
    background: #2c5aa0;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.pagination-btn:hover:not(:disabled) {
    background: #1e3d72;
    transform: translateY(-2px);
}

.pagination-btn:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
}

.page-number {
    font-weight: bold;
    color: #333;
}

/* Testimonials Section */
.testimonials {
    padding: 80px 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.testimonials h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: #333;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.testimonial {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    text-align: center;
}

.testimonial p {
    font-style: italic;
    margin-bottom: 1.5rem;
    color: #555;
    line-height: 1.6;
}

.testimonial cite {
    font-weight: bold;
    color: #2c5aa0;
}

/* Mobile Responsive Search */
@media (max-width: 768px) {
    .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
        min-height: auto;
    }
    
    .hero-text {
        padding-right: 0;
        order: 2;
    }
    
    .hero-slider {
        order: 1;
        height: 300px;
    }
    
    .hero-text h1 {
        font-size: 2.2rem;
    }
    
    .hero-text p {
        font-size: 1.1rem;
    }
    
    .slider-controls {
        bottom: 10px;
    }
    
    .slider-btn {
        width: 35px;
        height: 35px;
        font-size: 1.2rem;
    }
    .hero-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 400px;
    }
   .ebooks-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
    }
    
    .ebook-cover {
        height: 220px;
        padding: 15px;
    }
    
    .ebook-info {
        padding: 1.2rem;
    }
    
    .ebook-info h3 {
        font-size: 1.2rem;
        min-height: 3.2rem;
    }
    
    .price {
        font-size: 1.4rem;
    }
 .search-container {
        order: 3;
        flex: 1 1 100%;
        margin: 1rem 0 0 0;
    }
    
    .section-header {
        flex-direction: column;
        align-items: stretch;
    }
    
    .search-box-inline {
        flex: 1 1 100%;
    }
    
    .search-form {
        border-radius: 8px;
    }
    
    .pagination {
        flex-wrap: wrap;
    }
}

@media (max-width: 480px) {
    .hero {
        padding: 100px 0 60px;
    }
    
    .hero-text h1 {
        font-size: 1.8rem;
    }
    
    .hero-slider {
        height: 250px;
    }
    
    .slide {
        padding: 1rem;
    }
    
    .btn {
        padding: 12px 25px;
        font-size: 1rem;
    }
  .ebooks-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .ebook-cover {
        height: 200px;
        padding: 10px;
    }
    
    .ebook-info h3 {
        font-size: 1.1rem;
        min-height: auto;
        -webkit-line-clamp: 3;
    }
    
    .description {
        -webkit-line-clamp: 2;
    }
    .search-input {
        padding: 10px 15px;
        font-size: 0.9rem;
    }
    
    .search-btn {
        padding: 10px 15px;
        font-size: 1rem;
    }
}
</style>

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <h1>Unlock the Secrets of the Soul</h1>
                <p>Explore our curated collection of spiritual and philosophical ebooks to elevate your mind and soul.</p>
                <a href="#ebooks" class="btn btn-primary">Explore Ebooks</a>
            </div>
            <div class="hero-slider">
                <div class="slider-container">
                    <div class="slider-track">
                        <div class="slide active">
                            <img src="/assets/images/ribhu-gita-ঋভু-গীতা-Sri-Ramana-Maharshi.png" alt="Ribhu Gita" width="300">
                        </div>
                        <div class="slide">
                            <img src="/assets/images/spiritual-book-2.jpg" alt="Spiritual Wisdom" width="300">
                        </div>
                        <div class="slide">
                            <img src="/assets/images/philosophy-book-3.jpg" alt="Philosophy Guide" width="300">
                        </div>
                        <div class="slide">
                            <img src="/assets/images/meditation-book-4.jpg" alt="Meditation Techniques" width="300">
                        </div>
                    </div>
                </div>
                <div class="slider-controls">
                    <button class="slider-btn prev-btn">‹</button>
                    <div class="slider-dots">
                        <span class="dot active" data-slide="0"></span>
                        <span class="dot" data-slide="1"></span>
                        <span class="dot" data-slide="2"></span>
                        <span class="dot" data-slide="3"></span>
                    </div>
                    <button class="slider-btn next-btn">›</button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Ebook Showcase -->
<section id="ebooks" class="ebooks-section">
    <div class="container">
        <div class="section-header">
            <h2>Our Ebook Collection</h2>
            <!-- Search Box -->
            <div class="search-box-inline">
                <form class="search-form" id="searchForm">
                    <input type="text" placeholder="Search ebooks..." class="search-input" id="searchInput">
                    <button type="submit" class="search-btn">🔍 Search</button>
                </form>
            </div>
        </div>
        
        <!-- Search Results Info -->
        <div class="search-results">
            <div class="search-result-count" id="searchResultCount"></div>
        </div>
            
        <!-- Pagination - Top -->
        <div class="pagination">
            <button class="pagination-btn prev" onclick="changePage(-1)" disabled>← Previous</button>
            <span class="page-number">Page <span id="currentPage">1</span> of <span id="totalPages">1</span></span>
            <button class="pagination-btn next" onclick="changePage(1)">Next →</button>
        </div>

        <div class="ebooks-grid" id="ebooksGrid">
            {% for ebook in site.data.ebooks %}
            <div class="ebook-card" data-title="{{ ebook.title | downcase }}" data-description="{{ ebook.description | downcase }}">
                <div class="ebook-cover">
                    <img src="{{ ebook.cover }}" alt="{{ ebook.title }}" width="300">
                </div>
                <div class="ebook-info">
                    <h3>{{ ebook.title }}</h3>
                    <p class="price">{{ ebook.price }}</p>
                    <p class="description">{{ ebook.description }}</p>
                    <a href="{{ ebook.razorpay_link }}" class="btn btn-buy" target="_blank">Buy Now</a>
                </div>
            </div>
            {% endfor %}
        </div>

        <!-- Pagination - Bottom -->
        <div class="pagination">
            <button class="pagination-btn prev" onclick="changePage(-1)" disabled>← Previous</button>
            <span class="page-number">Page <span id="currentPageBottom">1</span> of <span id="totalPagesBottom">1</span></span>
            <button class="pagination-btn next" onclick="changePage(1)">Next →</button>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="testimonials">
    <div class="container">
        <h2>What Readers Say</h2>
        <div class="testimonials-grid">
            <div class="testimonial">
                <p>"Easy to read and implement. The practical tips saved me hours of research!"</p>
                <cite>- Sarah J.</cite>
            </div>
            <div class="testimonial">
                <p>"Comprehensive content that's worth every penny. Highly recommended!"</p>
                <cite>- Michael T.</cite>
            </div>
            <div class="testimonial">
                <p>"Transformed my approach to digital marketing. The results speak for themselves."</p>
                <cite>- Priya K.</cite>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Update slider position
    function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 25}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Update slides
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Dot click event
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentSlide = parseInt(this.getAttribute('data-slide'));
            updateSlider();
        });
    });

    // Button events
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-slide
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause auto-slide on hover
    const slider = document.querySelector('.hero-slider');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Search functionality
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const ebookCards = document.querySelectorAll('.ebook-card');
    const searchResultCount = document.getElementById('searchResultCount');
    
    // Pagination variables
    let currentPage = 1;
    const itemsPerPage = 6;
    let filteredEbooks = Array.from(ebookCards);
    
    // Initialize pagination
    updatePagination();
    
    // Search form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        performSearch();
    });
    
    // Real-time search as user types
    searchInput.addEventListener('input', function() {
        performSearch();
    });
    
    // Perform search function
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm === '') {
            // If search is empty, show all ebooks
            filteredEbooks = Array.from(ebookCards);
            searchResultCount.textContent = '';
        } else {
            // Filter ebooks based on search term
            filteredEbooks = Array.from(ebookCards).filter(card => {
                const title = card.getAttribute('data-title');
                const description = card.getAttribute('data-description');
                
                return title.includes(searchTerm) || description.includes(searchTerm);
            });
            
            // Update search result count
            const resultText = filteredEbooks.length === 1 ? 'result' : 'results';
            searchResultCount.textContent = `Found ${filteredEbooks.length} ${resultText} for "${searchTerm}"`;
        }
        
        // Reset to first page after search
        currentPage = 1;
        updatePagination();
        displayCurrentPage();
    }
    
    // Update pagination controls
    function updatePagination() {
        const totalPages = Math.ceil(filteredEbooks.length / itemsPerPage);
        
        // Update page numbers
        document.getElementById('totalPages').textContent = totalPages;
        document.getElementById('currentPage').textContent = currentPage;
        document.getElementById('totalPagesBottom').textContent = totalPages;
        document.getElementById('currentPageBottom').textContent = currentPage;
        
        // Update button states
        const prevButtons = document.querySelectorAll('.pagination-btn.prev');
        const nextButtons = document.querySelectorAll('.pagination-btn.next');
        
        prevButtons.forEach(btn => {
            btn.disabled = currentPage === 1;
        });
        
        nextButtons.forEach(btn => {
            btn.disabled = currentPage === totalPages || totalPages === 0;
        });
    }
    
    // Display current page of ebooks
    function displayCurrentPage() {
        // Hide all ebooks first
        ebookCards.forEach(card => {
            card.style.display = 'none';
        });
        
        // Calculate start and end index for current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        // Display ebooks for current page
        const ebooksToShow = filteredEbooks.slice(startIndex, endIndex);
        
        if (ebooksToShow.length === 0) {
            // Show no results message
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'No ebooks found matching your search criteria.';
            
            // Clear grid and add no results message
            const grid = document.getElementById('ebooksGrid');
            grid.innerHTML = '';
            grid.appendChild(noResults);
        } else {
            ebooksToShow.forEach(card => {
                card.style.display = 'flex';
            });
        }
    }
    
    // Image aspect ratio handling
    const ebookCovers = document.querySelectorAll('.ebook-cover img');
    
    ebookCovers.forEach(img => {
        // Wait for image to load
        if (img.complete) {
            applyCoverStyle(img);
        } else {
            img.addEventListener('load', function() {
                applyCoverStyle(this);
            });
        }
    });
    
    function applyCoverStyle(img) {
        const container = img.parentElement;
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        const aspectRatio = width / height;
        
        // Remove existing classes
        container.classList.remove('portrait', 'landscape', 'square');
        
        // Apply appropriate class based on aspect ratio
        if (aspectRatio > 1.2) {
            container.classList.add('landscape');
        } else if (aspectRatio < 0.8) {
            container.classList.add('portrait');
        } else {
            container.classList.add('square');
        }
    }
});

// Global function for pagination buttons
function changePage(direction) {
    const totalPages = Math.ceil(document.querySelectorAll('.ebook-card[style*="display: flex"]').length / 6);
    
    // Update current page
    window.currentPage += direction;
    
    // Ensure page is within bounds
    if (window.currentPage < 1) window.currentPage = 1;
    if (window.currentPage > totalPages) window.currentPage = totalPages;
    
    // Update pagination and display
    updatePagination();
    displayCurrentPage();
}

// These functions need to be accessible globally
function updatePagination() {
    const totalPages = Math.ceil(window.filteredEbooks.length / 6);
    
    // Update page numbers
    document.getElementById('totalPages').textContent = totalPages;
    document.getElementById('currentPage').textContent = window.currentPage;
    document.getElementById('totalPagesBottom').textContent = totalPages;
    document.getElementById('currentPageBottom').textContent = window.currentPage;
    
    // Update button states
    const prevButtons = document.querySelectorAll('.pagination-btn.prev');
    const nextButtons = document.querySelectorAll('.pagination-btn.next');
    
    prevButtons.forEach(btn => {
        btn.disabled = window.currentPage === 1;
    });
    
    nextButtons.forEach(btn => {
        btn.disabled = window.currentPage === totalPages || totalPages === 0;
    });
}

function displayCurrentPage() {
    const ebookCards = document.querySelectorAll('.ebook-card');
    const itemsPerPage = 6;
    
    // Hide all ebooks first
    ebookCards.forEach(card => {
        card.style.display = 'none';
    });
    
    // Calculate start and end index for current page
    const startIndex = (window.currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Display ebooks for current page
    const ebooksToShow = window.filteredEbooks.slice(startIndex, endIndex);
    
    if (ebooksToShow.length === 0 && window.filteredEbooks.length === 0) {
        // Show no results message
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'No ebooks found matching your search criteria.';
        
        // Clear grid and add no results message
        const grid = document.getElementById('ebooksGrid');
        grid.innerHTML = '';
        grid.appendChild(noResults);
    } else {
        ebooksToShow.forEach(card => {
            card.style.display = 'flex';
        });
    }
}
</script>