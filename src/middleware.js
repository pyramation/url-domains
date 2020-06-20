import { parseReq } from './requests';
export const middleware = ({
  hostname = 'hostname',
  subdomains = 'subdomains',
  domain = 'domain'
} = {}) => async (req, res, next) => {
  const parsed = parseReq(req);
  req.urlDomains = {
    [hostname]: parsed.hostname,
    [subdomains]: parsed.subdomains,
    [domain]: parsed.domain
  };
  return next();
};
