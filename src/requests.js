import { parseUrl } from './urls';

export const parseReq = req => {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  return parseUrl(new URL(fullUrl));
};
