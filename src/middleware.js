import { parseReq } from './requests';
export const middleware = ({
  subdomains = 'subdomains',
  domain = 'domain'
} = {}) => async (req, res, next) => {
  const parsed = parseReq(req);
  req.urlDomains = {
    [subdomains]: parsed.subdomains,
    [domain]: parsed.domain
  };
  return next();
};
