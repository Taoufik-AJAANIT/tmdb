import axios, { AxiosRequestConfig } from "axios";

const index = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    params: { language: 'en-US', },
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTHORIZATION_TOKEN}`
    }
});

let lastCall = 0;
const THROTTLE_DELAY = 1000;

function call(config: AxiosRequestConfig): Promise<{ data: unknown }> {
    const now = Date.now();

    if (now - lastCall < THROTTLE_DELAY) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                lastCall = Date.now();
                index(config).then(resolve).catch(reject);
            }, THROTTLE_DELAY - (now - lastCall));
        });
    } else {
        lastCall = now;
        return index(config);
    }
}

export default call;
