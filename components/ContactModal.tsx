import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const { contactModal } = t;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        document.body.style.overflow = isOpen ? 'hidden' : 'auto';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    // Focus trapping useEffect
    useEffect(() => {
        if (!isOpen) return;

        const modalElement = modalRef.current;
        if (!modalElement || submitStatus === 'success') return;

        const focusableElements = modalElement.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        // Set initial focus on the close button
        firstElement?.focus();

        const handleTabKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) { // Shift+Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        };

        modalElement.addEventListener('keydown', handleTabKeyPress);
        return () => {
            modalElement.removeEventListener('keydown', handleTabKeyPress);
        };
    }, [isOpen, submitStatus]);

    useEffect(() => {
        if(isOpen) {
            // Reset form on open
            setName('');
            setEmail('');
            setMessage('');
            setErrors({ name: '', email: '', message: '' });
            setSubmitStatus(null);
            setIsSubmitting(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const validate = (): boolean => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!name.trim()) {
            newErrors.name = contactModal.errors.nameRequired;
            isValid = false;
        }

        if (!email.trim()) {
            newErrors.email = contactModal.errors.emailRequired;
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = contactModal.errors.emailInvalid;
            isValid = false;
        }

        if (!message.trim()) {
            newErrors.message = contactModal.errors.messageRequired;
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus(null);
        // Simulate API call
        setTimeout(() => {
            console.log({ name, email, message });
            setSubmitStatus('success');
            setIsSubmitting(false);
            setTimeout(() => {
                onClose();
            }, 2500); // Give user time to read success message
        }, 1000);
    };

    return (
        <div 
            ref={modalRef}
            className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
        >
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scale-up {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
                .animate-scale-up { animation: scale-up 0.3s ease-out forwards; }
            `}</style>
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 relative transform animate-scale-up"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={contactModal.closeAlt}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {submitStatus === 'success' ? (
                     <div className="text-center py-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <h2 className="text-2xl font-bold text-emerald-800 mb-2">{contactModal.successTitle}</h2>
                        <p className="text-gray-600">{contactModal.successMessage}</p>
                    </div>
                ) : (
                    <>
                        <h2 id="contact-modal-title" className="text-2xl font-bold text-emerald-800/90 mb-2">{contactModal.title}</h2>
                        <p className="text-gray-600/90 mb-6">{contactModal.subtitle}</p>

                        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{contactModal.nameLabel}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={e => {
                                        setName(e.target.value);
                                        if (errors.name) setErrors({ ...errors, name: '' });
                                    }}
                                    required
                                    className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition-colors ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'}`}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                />
                                {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{contactModal.emailLabel}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={e => {
                                        setEmail(e.target.value);
                                        if (errors.email) setErrors({ ...errors, email: '' });
                                    }}
                                    required
                                    className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition-colors ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'}`}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                />
                                {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{contactModal.messageLabel}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={message}
                                    onChange={e => {
                                        setMessage(e.target.value);
                                        if (errors.message) setErrors({ ...errors, message: '' });
                                    }}
                                    required
                                    className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition-colors ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'}`}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                ></textarea>
                                {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>}
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-emerald-400 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isSubmitting ? contactModal.submittingButton : contactModal.submitButton}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ContactModal;