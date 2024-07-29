import http from 'k6/http';

export let options = {
  vus: 20,
  duration: '60s',
  rps: 20,
  hosts: {
    'cae-test-coremedia.mainova.de':     '172.18.121.121'
  },
  insecureSkipTLSVerify: true,
  noConnectionReuse: true,
  noVUConnectionReuse: true
}

export default function () {
    http.get("https://cae-dev-coremedia.mainova.de/de/");
};
