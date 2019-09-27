import server1 from './server-1';
import ssdWashIm from './ssd-wash-im';

const routes = [
  [server1.server, '/server-1', server1.auth],
  [ssdWashIm.server, '/ssd-wash-im', ssdWashIm.auth],
];

export default routes;
