import React from 'react';

const HeroSection: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
    return (
        <section id="hero" className="relative flex items-center justify-center min-h-[70vh] bg-green-50 text-center text-emerald-900 pt-32 pb-16">
            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-emerald-900 brand-font">
                        Clinical & Skincare Portfolio — Alora × Pectin Synergy
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
                        Bioactive Aloe vera films merged with pectin delivery science for faster healing, deeper hydration, and controlled release.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="#products" className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
                            Explore Products
                        </a>
                        <button onClick={() => setPage('science')} className="bg-white text-emerald-700 px-8 py-3 rounded-md font-semibold hover:bg-emerald-50 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto border border-emerald-200">
                            See the Science
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
