import http from 'k6/http';

export let options = {
  vus: 200,
  duration: '60s',
  hosts: {
    'cae-test-coremedia.mainova.de':     '172.18.121.121'
  },
  insecureSkipTLSVerify: true
}

export default function () {
    http.get("https://cae-test-coremedia.mainova.de/de/");
};
