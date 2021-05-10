import React, { useState } from 'react';
import { ProductVariant } from '../components/productComponent';
export const SelectedVariantContext = React.createContext<{ selectedVariant: ProductVariant | null, setSelectedVariant: React.Dispatch<ProductVariant | null> }>({
    selectedVariant: null,
    setSelectedVariant: null
});
const SelectedVariantProvider: React.FC<{}> = ({ children }) => {
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
    return (
        <SelectedVariantContext.Provider value={{ selectedVariant, setSelectedVariant }}>
            {children}
        </SelectedVariantContext.Provider>
    );
}
export default SelectedVariantProvider;