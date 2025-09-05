import React from 'react';
import { CheckCircleIcon } from '../constants';

const PersuasionSections: React.FC = () => {
    return (
        <section className="py-16 bg-green-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Section A — Clinical Confidence */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">Designed for Faster, Safer Healing</h2>
                        <p className="text-gray-700 mb-6">
                            Acemannan-rich Aloe supports fibroblast activity and a moist micro-environment; calcium-crosslinked pectin forms a stable scaffold that reduces TEWL and improves comfort. The result: quicker re-epithelialization, less irritation, and reliable wear across wound, oral, and ocular sites.
                        </p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start"><span className="flex-shrink-0 mr-2 mt-1"><CheckCircleIcon /></span>ISO 10993 biocompatibility</li>
                            <li className="flex items-start"><span className="flex-shrink-0 mr-2 mt-1"><CheckCircleIcon /></span>Moisture-balanced occlusion</li>
                            <li className="flex items-start"><span className="flex-shrink-0 mr-2 mt-1"><CheckCircleIcon /></span>Mucoadhesive options (oral/ocular)</li>
                            <li className="flex items-start"><span className="flex-shrink-0 mr-2 mt-1"><CheckCircleIcon /></span>24–72 h controlled release of actives</li>
                        </ul>
                        <a href="mailto:medical.affairs@alora.bio?subject=Inquiry: Clinical Use Cases" className="font-semibold text-emerald-600 hover:text-emerald-800 transition-colors">
                            View clinical use cases →
                        </a>
                    </div>

                    {/* Section B — Beauty With Proof */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">Luxury Care, Clinical Logic</h2>
                        <p className="text-gray-700 mb-6">
                            Alora’s cosmetic masks and gel-films deliver deep hydration and gradual diffusion of Vitamin C, HA, and peptides for glow, elasticity, and post-procedure calm. The plant-based matrix is fragrance-free, sensitive-skin friendly, and dissolves cleanly without residue.
                        </p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start"><span className="flex-shrink-0 mr-2 mt-1"><CheckCircleIcon /></span>Hydration ↑, TEWL ↓</li>
                            <li className="flex items-start"><span className="flex-shrink-0 mr-2 mt-1"><CheckCircleIcon /></span>Stabilized actives (C/HA/EGF)</li>
                            <li className="flex items-start"><span className="flex-shrink-0 mr-2 mt-1"><CheckCircleIcon /></span>Weightless feel, no slip</li>
                            <li className="flex items-start"><span className="flex-shrink-0 mr-2 mt-1"><CheckCircleIcon /></span>Visible radiance within minutes</li>
                        </ul>
                        <a href="mailto:medical.affairs@alora.bio?subject=Inquiry: Skincare Line" className="font-semibold text-emerald-600 hover:text-emerald-800 transition-colors">
                            Explore skincare line →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersuasionSections;
