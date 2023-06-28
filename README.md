# Fried Chilli

An e-commerce web application for an online furniture store using ReactJS.

## Pages

Landing Page
Products List
Single Product
Login
Cart Page
Checkout Page

## Features

Secure User Authentication with [Auth0](https://auth0.com/)

Seamless payment gateway with [Stripe](https://stripe.com/en-in)

Netlify serverless functions to handle Stripe payments and Netlify CLI to test locally. [Netlify Docs](https://docs.netlify.com/)

## Getting Started

To setup this project locally follow below steps:

`git clone https://github.com/zavedhussain/fried-chilli-ecommerce-demo.git`

You will need to create Auth0 and Stripe accounts and get API keys.

Then create `.env` file which will store your API keys in the follwing format.

```
REACT_APP_AUTH_DOMAIN = your-key

REACT_APP_AUTH_CLIENT_ID = your-key

REACT_APP_STRIPE_PUBLIC_KEY = your-key

REACT_APP_STRIPE_SECRET_KEY = your-key
```

Start server without netlify-cli with `npm start` or

Start server with netlify-cli with `npm run dev`.
