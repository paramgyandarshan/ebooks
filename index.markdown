---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <h1>Unlock the Secrets of the Soul</h1>
                <p>Explore our curated collection of spiritual and philosophical ebooks to elevate your mind and soul.</p>
                <a href="#ebooks" class="btn btn-primary">Explore Ebooks</a>
            </div>
            <div class="hero-image">
                <img src="/assets/images/hero-ebook.png" alt="Ebook Collection">
            </div>
        </div>
    </div>
</section>

<!-- Ebook Showcase -->
<section id="ebooks" class="ebooks-section">
    <div class="container">
        <h2>Our Ebook Collection</h2>
        
        <!-- Pagination - Top -->
        <div class="pagination">
            <button class="pagination-btn prev" onclick="changePage(-1)" disabled>← Previous</button>
            <span class="page-number">Page <span id="currentPage">1</span> of <span id="totalPages">1</span></span>
            <button class="pagination-btn next" onclick="changePage(1)">Next →</button>
        </div>

        <div class="ebooks-grid" id="ebooksGrid">
            {% for ebook in site.data.ebooks %}
            <div class="ebook-card" data-page="{% increment page_counter %}" style="display: {% if forloop.index0 < 6 %}block{% else %}none{% endif %};">
                <div class="ebook-cover">
                    <img src="{{ ebook.cover }}" alt="{{ ebook.title }}">
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
---