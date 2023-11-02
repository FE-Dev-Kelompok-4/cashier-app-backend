// generate using: require('crypto').randomBytes(32).toString('base64')
export const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY || '';
export const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY || '';
export const JWT_ISSUER = process.env.ISSUER || 'cashier-backend';
export const JWT_AUDIENCE = process.env.AUDIENCE || 'cashier-app-frontend';
export const JWT_ALGORITHM = 'HS256';
