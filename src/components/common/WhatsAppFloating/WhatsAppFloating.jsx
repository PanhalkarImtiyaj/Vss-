import React from 'react';
import './WhatsAppFloating.css';

const WhatsAppFloating = () => {
    const phoneNumber = "7517005494";
    const message = "Hi VSS Team, I'm interested in your services and would like to discuss a project.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            className="whatsapp-floating"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
        >
            <div className="whatsapp-tooltip">Chat with us</div>
            <div className="whatsapp-icon-wrapper">
                <i className='bx bxl-whatsapp'></i>
                <span className="pulse-ring"></span>
            </div>
        </a>
    );
};

export default WhatsAppFloating;
