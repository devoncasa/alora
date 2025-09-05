
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SustainabilitySection: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="sustainability" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div 
                    ref={ref}
                    className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
                >
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full transform -rotate-12"></div>
                            <img src="https://picsum.photos/seed/plantation/600/600" alt="alora plantation" className="relative rounded-2xl shadow-2xl w-full" />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">A Commitment to the Planet</h2>
                        <p className="text-lg text-gray-600 mb-6">Sustainability is not an afterthought; it's our foundation. From responsibly managed aloe farms to our zero-waste production process, every step is designed to nurture and protect our planet. Our products close the loop, returning to the earth as harmlessly as they came from it.</p>
                        <a href="#contact" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Learn About Our Process</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SustainabilitySection;
