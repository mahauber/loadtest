import http from 'k6/http';

export let options = {
  stages: [
        { target: 20, duration: '30s' }, // linearly go from 50 iters/s to 200 iters/s for 30s
        { target: 50, duration: '0' }, // instantly jump to 500 iters/s
        { target: 50, duration: '1m' }, // continue with 500 iters/s for 10 minutes
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
