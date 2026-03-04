# ChatGPT Impit Proxy

Apify Actor that proxies requests to ChatGPT's backend API using [impit](https://github.com/apify/impit) for browser-like HTTP requests.

## Deploy

1. Push to a Git repo and connect to Apify, or
2. Use [Apify CLI](https://docs.apify.com/cli): `apify push`
3. Or create manually in [Apify Console](https://console.apify.com) → Actors → Create new → Start from scratch → Node.js

## Input

- `access_token`: OpenAI access token from free account
- `payload`: ChatGPT backend-api conversation payload

## Output

- `status`: HTTP status code
- `body`: Response body (text or JSON)
