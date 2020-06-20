const ipRegExp = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;

export const parseUrl = url => {
  let { hostname } = url;

  hostname = hostname.replace(/^www\./, '');
  let domain = null;
  let subdomains = null;
  const parts = hostname.split('.');
  if (/localhost$/.test(hostname)) {
    domain = parts[parts.length - 1];
    subdomains = parts.slice(0, parts.length - 1);
  } else if (ipRegExp.test(hostname)) {
    domain = hostname;
    subdomains = [];
  } else if (parts.length > 1) {
    domain = parts.slice(parts.length - 2).join('.');
    subdomains = parts.slice(0, parts.length - 2);
  } else {
    domain = hostname;
    subdomains = [];
  }

  return {
    domain,
    subdomains
  };
};
