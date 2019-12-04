import ssdWashIm from './ssd-wash-im';
import ssdWiki from './ssd-wiki';
import ngaTpm from './nga-tpm';

const routes = [
  [ssdWashIm.server, '/ssd-wash-im', ssdWashIm.auth],
  [ssdWiki.server, '/ssd-wiki', ssdWiki.auth],
  [ngaTpm.server, '/nga-tpm', ngaTpm.auth],
];

export default routes;
