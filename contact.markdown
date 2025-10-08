---
layout: default
title: Contact
permalink: /contact/
---

<style>
/* আপনার existing CSS styles এখানে থাকবে */
/* Contact Section */
.contact-section {
    padding: 80px 0;
    background: #f8f9fa;
    min-height: 100vh;
}

.contact-section h1 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: #333;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

/* Contact Info */
.contact-info h2 {
    color: #2c5aa0;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
}

.contact-info > p {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-method {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.contact-method:hover {
    transform: translateY(-3px);
}

.method-icon {
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f4ff;
    border-radius: 50%;
}

.method-details h3 {
    color: #333;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.method-details p {
    color: #666;
    margin: 0;
}

.contact-link {
    color: #2c5aa0;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
}

.contact-link:hover {
    color: #1e3d72;
    text-decoration: underline;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-link {
    color: #2c5aa0;
    text-decoration: none;
    font-weight: 600;
    padding: 5px 15px;
    border: 2px solid #2c5aa0;
    border-radius: 5px;
    transition: all 0.3s;
}

.social-link:hover {
    background: #2c5aa0;
    color: white;
}

/* Contact Form */
.contact-form {
    background: white;
    padding: 2.5rem;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.contact-form h2 {
    color: #2c5aa0;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    text-align: center;
}

.contact-form .form-group {
    margin-bottom: 1.5rem;
}

.contact-form .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #333;
}

.contact-form .form-group input,
.contact-form .form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.contact-form .form-group input:focus,
.contact-form .form-group textarea:focus {
    outline: none;
    border-color: #2c5aa0;
}

.contact-form .btn {
    width: 100%;
    padding: 15px;
    font-size: 1.1rem;
    margin-top: 1rem;
}

/* Success Message Styles */
.form-success {
    background: #d4edda;
    border: 1px solid #c3e6cb;
    color: #155724;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    text-align: center;
}

.form-error {
    background: #f8d7da;
    border: 1px solid #f5c6cb;
    color: #721c24;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    text-align: center;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .contact-section {
        padding: 60px 0;
    }
    
    .contact-section h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .contact-form {
        padding: 2rem;
    }
    
    .contact-method {
        padding: 1rem;
    }
    
    .method-icon {
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
    }
    
    .social-links {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .social-link {
        text-align: center;
        padding: 8px 15px;
    }
}

@media (max-width: 480px) {
    .contact-section {
        padding: 40px 0;
    }
    
    .contact-section h1 {
        font-size: 1.8rem;
    }
    
    .contact-form {
        padding: 1.5rem;
    }
    
    .contact-method {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
    }
    
    .method-icon {
        align-self: center;
    }
}
</style>

<section id="contact" class="contact-section">
    <div class="container">
        <h1>Get In Touch</h1>
        
        <div class="contact-content">
            <div class="contact-info">
                <h2>Contact Information</h2>
                <p>We'd love to hear from you! Reach out through any of these channels:</p>
                
                <div class="contact-methods">
                    <div class="contact-method">
                        <div class="method-icon">📧</div>
                        <div class="method-details">
                            <h3>Email</h3>
                            <p>paramgyandarshanchat@gmail.com</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="method-icon">🌐</div>
                        <div class="method-details">
                            <h3>Social Media</h3>
                            <div class="social-links">
                                <a href="https://www.facebook.com/paramgyandarshan" class="social-link">Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="contact-form">
                <h2>Send Us a Message</h2>
                <form id="contactForm" action="https://formspree.io/f/xanpdbgb" method="POST">
                    <!-- Success/Error Messages -->
                    <div id="formMessages"></div>
                    
                    <div class="form-group">
                        <label for="name">Name *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject">
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    
                    <!-- Honeypot field for spam protection -->
                    <input type="text" name="_gotcha" style="display:none">
                    
                    <button type="submit" class="btn btn-primary">
                        <span id="submitText">Send Message</span>
                        <span id="loadingText" style="display:none">Sending...</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessages = document.getElementById('formMessages');
    const submitText = document.getElementById('submitText');
    const loadingText = document.getElementById('loadingText');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        submitText.style.display = 'none';
        loadingText.style.display = 'inline';
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Send form data to Formspree
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Show success message
                formMessages.innerHTML = `
                    <div class="form-success">
                        <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.
                    </div>
                `;
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            // Show error message
            formMessages.innerHTML = `
                <div class="form-error">
                    <strong>Sorry!</strong> There was an error sending your message. Please try again or email us directly.
                </div>
            `;
        })
        .finally(() => {
            // Reset button state
            submitText.style.display = 'inline';
            loadingText.style.display = 'none';
        });
    });
});
</script>