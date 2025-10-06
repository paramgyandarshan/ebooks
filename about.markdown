---
layout: default
title: About
permalink: /about/
---

<style>
    /* Simple About Section */
.simple-about {
    padding: 100px 0;
    background: #f8f9fa;
    min-height: 100vh;
}

.simple-about h1 {
    text-align: center;
    font-size: 2.5rem;
    color: #2c5aa0;
    margin-bottom: 1.5rem;
}

.about-intro {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 3rem;
    line-height: 1.6;
}

.about-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 800px;
    margin: 0 auto;
}

.about-block h2 {
    color: #333;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}

.benefits-list,
.audience-list-simple {
    list-style: none;
}

.benefits-list li,
.audience-list-simple li {
    padding: 0.8rem 0;
    font-size: 1.1rem;
    color: #555;
    border-bottom: 1px solid #eee;
}

.benefits-list li:last-child,
.audience-list-simple li:last-child {
    border-bottom: none;
}

/* Mobile Responsive for Simple About */
@media (max-width: 768px) {
    .about-details {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .simple-about h1 {
        font-size: 2rem;
    }
    
    .about-intro {
        font-size: 1.1rem;
        padding: 0 1rem;
    }
}
</style>

<!-- Simple About Section -->
<section class="simple-about">
    <div class="container">
        <h1>About Our Spiritual Ebook Store</h1>
        <p class="about-intro">Welcome to Param Gyaan Darshan, your gateway to timeless spiritual wisdom and philosophical insights in easy-to-read ebooks.</p>
        
        <div class="about-details">
            <div class="about-block">
                <h2>Why Choose Our Ebooks?</h2>
                <ul class="benefits-list">
                    <li>🕉️ Deep Spiritual Knowledge for inner growth</li>
                    <li>📖 Insights from ancient scriptures and modern interpretations</li>
                    <li>💡 Practical guidance for mindful living</li>
                    <li>🌱 Access anytime, learn at your own pace</li>
                </ul>
            </div>
            
            <div class="about-block">
                <h2>Perfect For</h2>
                <ul class="audience-list-simple">
                    <li>🙏 Seekers of spiritual wisdom</li>
                    <li>🧘 Individuals exploring meditation & mindfulness</li>
                    <li>📜 Students of philosophy and sacred texts</li>
                    <li>🌟 Anyone striving for self-improvement and inner peace</li>
                </ul>
            </div>
        </div>
    </div>
</section>
