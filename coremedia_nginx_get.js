import http from 'k6/http';

export let options = {
  stages: [
        { target: 10, duration: '1m' }
  ],
  hosts: {
    'cae-test-coremedia.mainova.de':     '172.18.121.121'
  },
  insecureSkipTLSVerify: true,
  noConnectionReuse: false
}

export default function () {
    http.get("https://cae-test-coremedia.mainova.de/de/");
};
