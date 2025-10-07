---
layout: default
title: Shipping
permalink: /shipping/
---


<style>
/* Shipping Policy Page Styles */
.shipping-page {
    padding: 100px 0 60px;
    background: #f8f9fa;
    min-height: 100vh;
}

.shipping-header {
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid #e9ecef;
}

.shipping-header h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
}

.digital-badge {
    display: inline-block;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 0.6rem 2rem;
    border-radius: 25px;
    font-weight: 600;
    font-size: 1rem;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.shipping-content {
    max-width: 900px;
    margin: 0 auto;
    background: white;
    padding: 3rem;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.delivery-notice {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.notice-icon {
    font-size: 3rem;
    flex-shrink: 0;
}

.notice-content h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
}

.notice-content p {
    margin: 0;
    opacity: 0.9;
    font-size: 1.1rem;
}

.shipping-section {
    margin-bottom: 3rem;
}

.shipping-section h2 {
    color: #2c5aa0;
    font-size: 1.6rem;
    margin-bottom: 2rem;
    text-align: center;
}

.process-steps {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.process-step {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid #2c5aa0;
}

.step-number {
    background: #2c5aa0;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    flex-shrink: 0;
}

.step-content h3 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.step-content p {
    color: #666;
    margin: 0;
    line-height: 1.6;
}

.timeframe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.timeframe-card {
    background: white;
    padding: 2rem 1.5rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 3px 15px rgba(0,0,0,0.1);
    border: 1px solid #e9ecef;
    transition: transform 0.3s;
}

.timeframe-card:hover {
    transform: translateY(-5px);
}

.timeframe-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.timeframe-card h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.timeframe-card p {
    color: #666;
    margin: 0;
    line-height: 1.5;
}

.feature-list {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
}

.feature-list li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #f1f3f4;
}

.feature-list li:last-child {
    border-bottom: none;
}

.feature-icon {
    font-size: 1.5rem;
    width: 40px;
    flex-shrink: 0;
}

.feature-text {
    color: #555;
    font-size: 1.05rem;
}

.troubleshooting-tips {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 1.5rem;
}

.tip-card {
    background: #fff3cd;
    padding: 1.5rem;
    border-radius: 10px;
    border-left: 4px solid #ffc107;
}

.tip-card h3 {
    color: #856404;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.tip-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.tip-card li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    color: #856404;
}

.tip-card li::before {
    content: "•";
    position: absolute;
    left: 0.5rem;
    color: #856404;
    font-weight: bold;
}

.no-shipping-notice {
    background: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
}

.no-shipping-notice p {
    color: #721c24;
    margin: 0;
    font-size: 1.1rem;
}

.support-section {
    background: #d1ecf1;
    border: 1px solid #bee5eb;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    margin-top: 2rem;
}

.support-section h2 {
    color: #0c5460;
    margin-bottom: 1rem;
}

.support-section p {
    color: #0c5460;
    margin-bottom: 1.5rem;
}

.support-contact {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.contact-method {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #0c5460;
    font-weight: 500;
}

.contact-icon {
    font-size: 1.2rem;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .shipping-page {
        padding: 80px 0 40px;
    }
    
    .shipping-header h1 {
        font-size: 2rem;
    }
    
    .shipping-content {
        padding: 2rem;
        margin: 0 1rem;
    }
    
    .delivery-notice {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
        padding: 1.5rem;
    }
    
    .process-step {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .timeframe-grid {
        grid-template-columns: 1fr;
    }
    
    .troubleshooting-tips {
        grid-template-columns: 1fr;
    }
    
    .support-contact {
        flex-direction: column;
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .shipping-page {
        padding: 70px 0 30px;
    }
    
    .shipping-header h1 {
        font-size: 1.8rem;
    }
    
    .shipping-content {
        padding: 1.5rem;
    }
    
    .digital-badge {
        font-size: 0.9rem;
        padding: 0.5rem 1.5rem;
    }
    
    .feature-list li {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
    }
}

    </style>


<section class="shipping-page">
    <div class="container">
        <div class="shipping-header">
            <h1>Shipping & Delivery Policy</h1>
            <div class="digital-badge">Instant Digital Delivery</div>
        </div>
        
        <div class="shipping-content">
            <div class="delivery-notice">
                <div class="notice-icon">⚡</div>
                <div class="notice-content">
                    <h2>Instant Access</h2>
                    <p>All our ebooks are delivered digitally - no waiting, no shipping fees!</p>
                </div>
            </div>

            <div class="shipping-section">
                <h2>Digital Delivery Process</h2>
                <div class="process-steps">
                    <div class="process-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h3>Complete Purchase</h3>
                            <p>Select your ebook and complete the secure payment process through Razorpay.</p>
                        </div>
                    </div>
                    
                    <div class="process-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h3>Instant Email Delivery</h3>
                            <p>Immediately after payment confirmation, you'll receive an email with your download links.</p>
                        </div>
                    </div>
                    
                    <div class="process-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h3>Download & Access</h3>
                            <p>Click the download link in your email to access your ebook on any device.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shipping-section">
                <h2>Delivery Timeframe</h2>
                <div class="timeframe-grid">
                    <div class="timeframe-card">
                        <div class="timeframe-icon">📧</div>
                        <h3>Email Delivery</h3>
                        <p>Instant - within minutes of payment confirmation</p>
                    </div>
                    
                    <div class="timeframe-card">
                        <div class="timeframe-icon">⏰</div>
                        <h3>Maximum Wait Time</h3>
                        <p>Up to 1 hour in rare cases of system delays</p>
                    </div>
                    
                    <div class="timeframe-card">
                        <div class="timeframe-icon">🌐</div>
                        <h3>24/7 Availability</h3>
                        <p>Purchase and download anytime, anywhere</p>
                    </div>
                </div>
            </div>

            <div class="shipping-section">
                <h2>What You'll Receive</h2>
                <ul class="feature-list">
                    <li>
                        <span class="feature-icon">📥</span>
                        <span class="feature-text">Download link for your ebook (PDF/EPUB format)</span>
                    </li>
                    <li>
                        <span class="feature-icon">📧</span>
                        <span class="feature-text">Order confirmation email with purchase details</span>
                    </li>
                    <li>
                        <span class="feature-icon">📱</span>
                        <span class="feature-text">Compatible with all devices - phone, tablet, computer</span>
                    </li>
                    <li>
                        <span class="feature-icon">🔄</span>
                        <span class="feature-text">Lifetime access - download multiple times</span>
                    </li>
                </ul>
            </div>

            <div class="shipping-section">
                <h2>Troubleshooting Delivery Issues</h2>
                <div class="troubleshooting-tips">
                    <div class="tip-card">
                        <h3>Didn't Receive Email?</h3>
                        <ul>
                            <li>Check your spam/junk folder</li>
                            <li>Verify your email address during checkout</li>
                            <li>Wait up to 1 hour for system processing</li>
                        </ul>
                    </div>
                    
                    <div class="tip-card">
                        <h3>Download Problems?</h3>
                        <ul>
                            <li>Ensure stable internet connection</li>
                            <li>Try different web browser</li>
                            <li>Check device storage space</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="shipping-section">
                <h2>No Physical Shipping</h2>
                <div class="no-shipping-notice">
                    <p>Please note that we <strong>do not offer physical shipping</strong> for any products. All our ebooks are digital downloads only. No physical copies, CDs, or printed materials are available.</p>
                </div>
            </div>

            <div class="support-section">
                <h2>Need Help?</h2>
                <p>If you experience any issues with ebook delivery or download, our support team is here to help:</p>
                <div class="support-contact">
                    <div class="contact-method">
                        <span class="contact-icon">📧</span>
                         <p><strong>Facebook Chat:</strong> https://www.facebook.com/paramgyandarshan</p>
                    </div>
                    <div class="contact-method">
                        <span class="contact-icon">⏰</span>
                        <span>Response within 12 hours</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>