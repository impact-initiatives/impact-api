import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

const auth = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://ssd-wash-im.eu.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://api.reach-info.org/',
  issuer: 'https://ssd-wash-im.eu.auth0.com/',
  algorithms: ['RS256'],
  credentialsRequired: false,
});

export default auth;
