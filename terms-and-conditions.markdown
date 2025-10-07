---
layout: default
title: Terms and Conditions
permalink: /terms-and-conditions/
---

<style>
    /* Terms & Conditions Page Styles */
.terms-page {
    padding: 100px 0 60px;
    background: #f8f9fa;
    min-height: 100vh;
}

.terms-header {
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid #e9ecef;
}

.terms-header h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.last-updated {
    color: #6c757d;
    font-style: italic;
    font-size: 1rem;
}

.terms-content {
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

.terms-section {
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e9ecef;
}

.terms-section:last-of-type {
    border-bottom: none;
}

.terms-section h2 {
    color: #2c5aa0;
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    padding-left: 1rem;
    border-left: 4px solid #2c5aa0;
}

.terms-section p {
    color: #555;
    line-height: 1.7;
    margin-bottom: 1.2rem;
    font-size: 1.05rem;
}

.terms-list {
    list-style: none;
    padding-left: 0;
    margin: 1.5rem 0;
}

.terms-list li {
    padding: 0.8rem 0;
    padding-left: 2.5rem;
    position: relative;
    color: #555;
    line-height: 1.6;
    border-bottom: 1px solid #f8f9fa;
}

.terms-list li:last-child {
    border-bottom: none;
}

.terms-list li::before {
    content: "▸";
    position: absolute;
    left: 1rem;
    color: #2c5aa0;
    font-weight: bold;
    font-size: 1.1rem;
}

.contact-section {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    margin: 2.5rem 0;
    border-left: 4px solid #28a745;
}

.contact-section h2 {
    color: #28a745;
    margin-bottom: 1rem;
    font-size: 1.4rem;
}

.contact-details {
    margin-top: 1rem;
}

.contact-details p {
    margin-bottom: 0.5rem;
    color: #495057;
}

.contact-details strong {
    color: #2c3e50;
}

.acceptance-section {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 10px;
    padding: 1.5rem;
    margin-top: 2rem;
    text-align: center;
}

.acceptance-section p {
    color: #856404;
    font-weight: 600;
    margin: 0;
    font-size: 1.1rem;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .terms-page {
        padding: 80px 0 40px;
    }
    
    .terms-header h1 {
        font-size: 2rem;
    }
    
    .terms-content {
        padding: 2rem;
        margin: 0 1rem;
    }
    
    .terms-section h2 {
        font-size: 1.2rem;
        padding-left: 0.8rem;
    }
    
    .terms-list li {
        padding-left: 2rem;
    }
    
    .terms-list li::before {
        left: 0.5rem;
    }
    
    .intro-section {
        padding: 1.2rem;
    }
}

@media (max-width: 480px) {
    .terms-page {
        padding: 70px 0 30px;
    }
    
    .terms-header h1 {
        font-size: 1.8rem;
    }
    
    .terms-content {
        padding: 1.5rem;
    }
    
    .terms-section {
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
    }
    
    .contact-section {
        padding: 1.5rem;
    }
    
    .acceptance-section {
        padding: 1.2rem;
    }
    
    .last-updated {
        font-size: 0.9rem;
    }
}
</style>


<section class="terms-page">
    <div class="container">
        <div class="terms-header">
            <h1>Terms & Conditions</h1>
            <p class="last-updated">Last updated: {{ site.time | date: '%B %d, %Y' }}</p>
        </div>
        
        <div class="terms-content">
            <div class="intro-section">
                <p>Welcome to {{ site.title }}. By accessing and purchasing from our website, you accept and agree to be bound by the terms and conditions outlined below.</p>
            </div>

            <div class="terms-section">
                <h2>1. Digital Product License</h2>
                <p>All ebooks sold on this platform are licensed, not sold. When you purchase an ebook, you receive:</p>
                <ul class="terms-list">
                    <li>A non-exclusive, non-transferable license to use the ebook</li>
                    <li>Personal use rights only</li>
                    <li>Lifetime access to the purchased content</li>
                </ul>
            </div>

            <div class="terms-section">
                <h2>2. Usage Restrictions</h2>
                <p>You agree not to:</p>
                <ul class="terms-list">
                    <li>Distribute, share, or resell the ebook content</li>
                    <li>Reverse engineer, decompile, or disassemble any content</li>
                    <li>Use the content for commercial purposes without permission</li>
                    <li>Create derivative works based on the ebook content</li>
                </ul>
            </div>

            <div class="terms-section">
                <h2>3. Purchase and Payment</h2>
                <p>All ebook purchases are subject to:</p>
                <ul class="terms-list">
                    <li>Immediate digital delivery upon successful payment</li>
                    <li>Secure payment processing through Razorpay</li>
                    <li>Currency displayed in USD (or your local currency)</li>
                    <li>No physical shipment - products are digital only</li>
                </ul>
            </div>

            <div class="terms-section">
                <h2>4. Refund Policy</h2>
                <p>Due to the digital nature of our products:</p>
                <ul class="terms-list">
                    <li>All sales are final once download is initiated</li>
                    <li>No refunds for change of mind or accidental purchases</li>
                    <li>Refunds only considered for technical issues preventing access</li>
                    <li>Refund requests must be made within 7 days of purchase</li>
                </ul>
            </div>

            <div class="terms-section">
                <h2>5. Account Responsibility</h2>
                <p>You are responsible for:</p>
                <ul class="terms-list">
                    <li>Maintaining the confidentiality of your account information</li>
                    <li>All activities that occur under your account</li>
                    <li>Providing accurate and complete information during purchase</li>
                    <li>Ensuring your device meets technical requirements for ebook access</li>
                </ul>
            </div>

            <div class="terms-section">
                <h2>6. Intellectual Property</h2>
                <p>All content on this website, including ebooks, images, and text, is protected by copyright and intellectual property laws. Unauthorized use may violate these laws.</p>
            </div>

            <div class="terms-section">
                <h2>7. Limitation of Liability</h2>
                <p>{{ site.title }} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our ebooks.</p>
            </div>

            <div class="terms-section">
                <h2>8. Changes to Terms</h2>
                <p>We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>
            </div>

            <div class="terms-section">
                <h2>9. Governing Law</h2>
                <p>These terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.</p>
            </div>

            <div class="contact-section">
                <h2>Contact Information</h2>
                <p>If you have any questions about these Terms & Conditions, please contact us:</p>
                <div class="contact-details">
                     <p><strong>Facebook Chat:</strong> https://www.facebook.com/paramgyandarshan</p>
                    <p><strong>Response Time:</strong> 2-3 business days</p>
                </div>
            </div>

            <div class="acceptance-section">
                <p>By purchasing from our store, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.</p>
            </div>
        </div>
    </div>
</section>