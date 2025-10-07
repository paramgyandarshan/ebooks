---
layout: default
title: Privacy
permalink: /privacy/
---

<style>
/* Privacy Policy Page Styles */
.privacy-page {
    padding: 100px 0 60px;
    background: #f8f9fa;
    min-height: 100vh;
}

.privacy-header {
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid #e9ecef;
}

.privacy-header h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.last-updated {
    color: #6c757d;
    font-style: italic;
    font-size: 1rem;
}

.privacy-content {
    max-width: 900px;
    margin: 0 auto;
    background: white;
    padding: 3rem;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.intro-section {
    background: #e8f4fd;
    border-left: 4px solid #2c5aa0;
    padding: 1.5rem;
    margin-bottom: 2.5rem;
    border-radius: 0 8px 8px 0;
}

.intro-section p {
    color: #2c5aa0;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
    line-height: 1.6;
}

.privacy-section {
    margin-bottom: 3rem;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid #e9ecef;
}

.privacy-section:last-of-type {
    border-bottom: none;
}

.privacy-section h2 {
    color: #2c5aa0;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    padding-left: 1rem;
    border-left: 4px solid #2c5aa0;
}

.info-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
}

.info-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid #e9ecef;
}

.info-card h3 {
    color: #495057;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.info-card ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

.info-card li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    color: #666;
}

.info-card li::before {
    content: "•";
    position: absolute;
    left: 0.5rem;
    color: #2c5aa0;
    font-weight: bold;
}

.usage-list {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
}

.usage-list li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #f1f3f4;
}

.usage-list li:last-child {
    border-bottom: none;
}

.usage-icon {
    font-size: 1.3rem;
    width: 30px;
    flex-shrink: 0;
    margin-top: 0.2rem;
}

.usage-text {
    color: #555;
    font-size: 1.05rem;
    line-height: 1.5;
}

.security-features {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.security-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #28a745;
}

.security-icon {
    font-size: 2rem;
    flex-shrink: 0;
}

.security-content h3 {
    color: #28a745;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.security-content p {
    color: #666;
    margin: 0;
    line-height: 1.5;
}

.third-party-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.service-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    border: 2px solid #e9ecef;
    text-align: center;
    transition: transform 0.3s;
}

.service-card:hover {
    transform: translateY(-3px);
    border-color: #2c5aa0;
}

.service-card h4 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.service-card p {
    color: #666;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.service-type {
    background: #6c757d;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
}

.rights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.right-card {
    background: #fff3cd;
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid #ffc107;
}

.right-card h3 {
    color: #856404;
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
}

.right-card p {
    color: #856404;
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
}

.cookie-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.cookie-type {
    background: #e2e3e5;
    padding: 1.5rem;
    border-radius: 8px;
}

.cookie-type h4 {
    color: #383d41;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.cookie-type p {
    color: #383d41;
    margin: 0;
    font-size: 0.95rem;
}

.retention-list {
    list-style: none;
    padding-left: 0;
    margin: 1.5rem 0;
}

.retention-list li {
    padding: 0.8rem 0;
    padding-left: 2rem;
    position: relative;
    color: #555;
}

.retention-list li::before {
    content: "✓";
    position: absolute;
    left: 0.5rem;
    color: #28a745;
    font-weight: bold;
}

.contact-section {
    background: #d4edda;
    border: 1px solid #c3e6cb;
    border-radius: 10px;
    padding: 2rem;
    margin: 2.5rem 0;
}

.contact-section h2 {
    color: #155724;
    margin-bottom: 1rem;
    text-align: center;
}

.contact-section p {
    color: #155724;
    text-align: center;
    margin-bottom: 1.5rem;
}

.contact-details {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.contact-label {
    font-weight: 600;
    color: #155724;
    margin-bottom: 0.3rem;
}

.contact-value {
    color: #155724;
    font-weight: 500;
}

.consent-section {
    background: #d1ecf1;
    border: 1px solid #bee5eb;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    margin-top: 2rem;
}

.consent-section p {
    color: #0c5460;
    font-weight: 600;
    margin: 0;
    font-size: 1.1rem;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .privacy-page {
        padding: 80px 0 40px;
    }
    
    .privacy-header h1 {
        font-size: 2rem;
    }
    
    .privacy-content {
        padding: 2rem;
        margin: 0 1rem;
    }
    
    .info-types {
        grid-template-columns: 1fr;
    }
    
    .security-item {
        flex-direction: column;
        text-align: center;
        gap: 0.8rem;
    }
    
    .third-party-grid {
        grid-template-columns: 1fr;
    }
    
    .rights-grid {
        grid-template-columns: 1fr;
    }
    
    .cookie-types {
        grid-template-columns: 1fr;
    }
    
    .contact-details {
        flex-direction: column;
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .privacy-page {
        padding: 70px 0 30px;
    }
    
    .privacy-header h1 {
        font-size: 1.8rem;
    }
    
    .privacy-content {
        padding: 1.5rem;
    }
    
    .privacy-section h2 {
        font-size: 1.3rem;
        padding-left: 0.8rem;
    }
    
    .usage-list li {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
    }
    
    .usage-icon {
        align-self: center;
    }
}
    </style>




<section class="privacy-page">
    <div class="container">
        <div class="privacy-header">
            <h1>Privacy Policy</h1>
            <p class="last-updated">Last updated: {{ site.time | date: '%B %d, %Y' }}</p>
        </div>
        
        <div class="privacy-content">
            <div class="intro-section">
                <p>At {{ site.title }}, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our ebook store.</p>
            </div>

            <div class="privacy-section">
                <h2>1. Information We Collect</h2>
                <div class="info-types">
                    <div class="info-card">
                        <h3>Personal Information</h3>
                        <ul>
                            <li>Name and email address</li>
                            <li>Payment information (processed securely by Razorpay)</li>
                            <li>Purchase history and preferences</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <h3>Technical Information</h3>
                        <ul>
                            <li>IP address and browser type</li>
                            <li>Device information</li>
                            <li>Website usage statistics</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="privacy-section">
                <h2>2. How We Use Your Information</h2>
                <ul class="usage-list">
                    <li>
                        <span class="usage-icon">📧</span>
                        <span class="usage-text">To process your ebook purchases and deliver download links</span>
                    </li>
                    <li>
                        <span class="usage-icon">🔒</span>
                        <span class="usage-text">To provide customer support and respond to inquiries</span>
                    </li>
                    <li>
                        <span class="usage-icon">📊</span>
                        <span class="usage-text">To improve our website and ebook offerings</span>
                    </li>
                    <li>
                        <span class="usage-icon">📝</span>
                        <span class="usage-text">To send important updates about your purchases</span>
                    </li>
                    <li>
                        <span class="usage-icon">🎯</span>
                        <span class="usage-text">To personalize your experience (with your consent)</span>
                    </li>
                </ul>
            </div>

            <div class="privacy-section">
                <h2>3. Data Protection & Security</h2>
                <div class="security-features">
                    <div class="security-item">
                        <div class="security-icon">🔐</div>
                        <div class="security-content">
                            <h3>Secure Payments</h3>
                            <p>All payments are processed through Razorpay's secure payment gateway. We never store your credit card details.</p>
                        </div>
                    </div>
                    
                    <div class="security-item">
                        <div class="security-icon">📁</div>
                        <div class="security-content">
                            <h3>Data Encryption</h3>
                            <p>Your personal information is encrypted during transmission using SSL technology.</p>
                        </div>
                    </div>
                    
                    <div class="security-item">
                        <div class="security-icon">🚫</div>
                        <div class="security-content">
                            <h3>Limited Access</h3>
                            <p>Only authorized personnel have access to your information for specific business purposes.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="privacy-section">
                <h2>4. Third-Party Services</h2>
                <p>We use trusted third-party services to operate our business:</p>
                <div class="third-party-grid">
                    <div class="service-card">
                        <h4>Razorpay</h4>
                        <p>Payment processing</p>
                        <span class="service-type">Payment Gateway</span>
                    </div>
                    <div class="service-card">
                        <h4>Email Service</h4>
                        <p>Order confirmations and downloads</p>
                        <span class="service-type">Communication</span>
                    </div>
                    <div class="service-card">
                        <h4>Web Analytics</h4>
                        <p>Website performance tracking</p>
                        <span class="service-type">Analytics</span>
                    </div>
                </div>
            </div>

            <div class="privacy-section">
                <h2>5. Your Rights & Choices</h2>
                <div class="rights-grid">
                    <div class="right-card">
                        <h3>Access & Correction</h3>
                        <p>You can request access to your personal data and correct any inaccuracies.</p>
                    </div>
                    <div class="right-card">
                        <h3>Data Deletion</h3>
                        <p>You can request deletion of your personal data, subject to legal requirements.</p>
                    </div>
                    <div class="right-card">
                        <h3>Marketing Preferences</h3>
                        <p>You can opt-out of marketing communications at any time.</p>
                    </div>
                    <div class="right-card">
                        <h3>Download Your Data</h3>
                        <p>Request a copy of the personal data we hold about you.</p>
                    </div>
                </div>
            </div>

            <div class="privacy-section">
                <h2>6. Cookies & Tracking</h2>
                <p>We use cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.</p>
                <div class="cookie-types">
                    <div class="cookie-type">
                        <h4>Essential Cookies</h4>
                        <p>Required for basic website functionality and purchases</p>
                    </div>
                    <div class="cookie-type">
                        <h4>Analytical Cookies</h4>
                        <p>Help us understand how visitors interact with our website</p>
                    </div>
                </div>
            </div>

            <div class="privacy-section">
                <h2>7. Data Retention</h2>
                <p>We retain your personal information only for as long as necessary to:</p>
                <ul class="retention-list">
                    <li>Fulfill your ebook purchases and provide access</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes and enforce our agreements</li>
                    <li>Maintain business records as required by law</li>
                </ul>
            </div>

            <div class="privacy-section">
                <h2>8. Children's Privacy</h2>
                <p>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children without parental consent.</p>
            </div>

            <div class="privacy-section">
                <h2>9. Policy Updates</h2>
                <p>We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date.</p>
            </div>

            <div class="contact-section">
                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or your personal data, please contact us:</p>
                <div class="contact-details">
                    <div class="contact-item">
                        <span class="contact-label">Facebook Chat:</span>
                        <span class="contact-value">https://www.facebook.com/paramgyandarshan</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-label">Response Time:</span>
                        <span class="contact-value">Within 48 hours</span>
                    </div>
                </div>
            </div>

            <div class="consent-section">
                <p>By using our website and purchasing our ebooks, you consent to the terms of this Privacy Policy.</p>
            </div>
        </div>
    </div>
</section>