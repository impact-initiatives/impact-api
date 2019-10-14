import ssdWashIm from './ssd-wash-im';
import ngaTpm from './nga-tpm';

const routes = [
  [ssdWashIm.server, '/ssd-wash-im', ssdWashIm.auth],
  [ngaTpm.server, '/nga-tpm', ngaTpm.auth],
];

export default routes;
