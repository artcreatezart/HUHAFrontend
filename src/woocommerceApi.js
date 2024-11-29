import axios from 'axios';

// call envs (api and keys)
const API_URL = import.meta.env.VITE_WOOCOMMERCE_API_URL
const CONSUMER_KEY = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_KEY
const CONSUMER_SECRET = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_SECRET

// Woo commetece api Call
const wooCommerceApi = axios.create({
    baseURL: API_URL,
    params: {
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET,
    },
});

export default wooCommerceApi;