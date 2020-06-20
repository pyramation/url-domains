import { parseReq } from './requests';
export const middleware = ({
  subdomains = 'subdomains',
  domain = 'domain'
} = {}) => async (req, res, next) => {
  const parsed = parseReq(req);
  req[subdomains] = parsed.subdomains;
  req[domain] = parsed.domain;
  return next();
};
