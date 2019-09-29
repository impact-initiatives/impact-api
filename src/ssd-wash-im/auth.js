import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

const options = {
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://ssd-wash-im.eu.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://api.reach-info.org/',
  issuer: 'https://ssd-wash-im.eu.auth0.com/',
  algorithms: ['RS256'],
};

const graphql = jwt({ ...options, credentialsRequired: false });
const files = jwt(options);
const mode = '--acl-public';

export default { graphql, files, mode };
