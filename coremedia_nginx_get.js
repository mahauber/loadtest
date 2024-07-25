import http from 'k6/http';

export let options = {
  stages: [
        { target: 200, duration: '30s' }, // linearly go from 50 iters/s to 200 iters/s for 30s
        { target: 500, duration: '0' }, // instantly jump to 500 iters/s
        { target: 500, duration: '10m' }, // continue with 500 iters/s for 10 minutes
  ],
  insecureSkipTLSVerify: true,
  noConnectionReuse: true
}

export default function () {
    let params = { headers: { Host: "cae-test-coremedia.mainova.de" } };
    http.get("http://172.18.121.121/de/", params);
};
