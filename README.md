# Fried Chilli

An e-commerce web application for an online furniture store using ReactJS.

[Live Demo](https://friedchilli.netlify.app)

## Pages

Landing Page

![home](https://github.com/zavedhussain/fried-chilli-ecommerce-demo/assets/45946700/5163dbe1-7407-4b01-bf62-5914a6a71596)

Products List

![products](https://github.com/zavedhussain/fried-chilli-ecommerce-demo/assets/45946700/08067a23-26a6-4e3f-87a3-acffc7231efb)

Single Product

![singleproduct](https://github.com/zavedhussain/fried-chilli-ecommerce-demo/assets/45946700/2b0e4d8e-4282-41ec-be0b-c2032035cde7)

Login

![Screenshot 2023-06-28 224801](https://github.com/zavedhussain/fried-chilli-ecommerce-demo/assets/45946700/a8d2ecf1-c473-41f8-af56-658b67151385)

Cart Page

![cart](https://github.com/zavedhussain/fried-chilli-ecommerce-demo/assets/45946700/f1119eef-f87b-4bfa-95e6-4d9e737e8e88)

Checkout Page

![checkout](https://github.com/zavedhussain/fried-chilli-ecommerce-demo/assets/45946700/76718cf6-fac4-4173-9894-a9feeaafa54c)


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
