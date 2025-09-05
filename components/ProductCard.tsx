import React from 'react';
import type { ProductCardData } from '../types';
import { useLanguage } from '../hooks/useLanguage';

interface ProductCardProps {
    product: ProductCardData;
    onViewDetails: (productName: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
    const { name, value } = product;
    const { t } = useLanguage();
    
    return (
        <div className="border border-gray-200/50 rounded-lg p-6 flex flex-col h-full bg-white/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-emerald-800/90 mb-2">{name}</h3>
            <p className="text-gray-600/90 mb-4 flex-grow">{value}</p>
            
            <div className="mt-auto pt-4">
                <button 
                    onClick={() => onViewDetails(product.name)} 
                    className="w-full block text-center bg-emerald-600/90 text-white/90 px-4 py-2 rounded-md font-semibold hover:bg-emerald-700 hover:text-white transition-all"
                >
                    {t.productCardContent.viewDetails}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;