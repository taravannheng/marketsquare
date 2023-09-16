import ProductInterface from "../../interfaces/product-interface";

export const addRelatedProducts = (relatedProducts: ProductInterface[], payload: Record<string, ProductInterface[]>) => {
    return {...relatedProducts, ...payload};
}
