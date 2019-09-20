import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

const jwtCheck = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksUri: process.env.SERVER_1_ISSUER + '.well-known/jwks.json',
  }),
  audience: process.env.SERVER_1_AUDIENCE,
  issuer: process.env.SERVER_1_ISSUER,
  algorithms: ['RS256'],
  credentialsRequired: false,
});

export default jwtCheck;
