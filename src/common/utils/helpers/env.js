export const inProd = () => process.env.NODE_ENV === 'production'
export const inDev  = () => process.env.NODE_ENV === 'development'