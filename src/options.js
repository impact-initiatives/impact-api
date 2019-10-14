import https from 'https';
import responseCachePlugin from 'apollo-server-plugin-response-cache';

const context = ({ req: { headers, user } }) => {
  if (user) {
    const options = {
      host: new URL(user.iss).host,
      port: 443,
      path: '/userinfo',
      method: 'GET',
      headers: { authorization: headers.authorization },
    };
    const userinfo = new Promise((resolve, reject) => {
      const req = https.request(options, res => {
        let data = '';
        res.on('data', chunk => (data += chunk));
        res.on('end', () => resolve(JSON.parse(data)));
      });
      req.on('error', error => reject(error));
      req.end();
    });
    return { user: userinfo, permissions: user.permissions };
  }
  return {};
};

const plugins = [responseCachePlugin()];

const cacheControl = { defaultMaxAge: 0 };

const cors = false;

export default { context, plugins, cacheControl, cors };
