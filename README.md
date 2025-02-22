# E-commerce - React & Tailwind 🛒👜🛒👜

![preview](./.github/preview_intro.gif)

> # Description

This project is a responsive e-commerce website. Users can view information about each product and add/remove products from the cart. Users need to log in to proceed to the checkout.
I styled the landing page with Tailwind CSS and built it with React JS. Tailwind CSS also helped with the website's responsiveness.
I created routes to the other pages using react-router-dom.
The entire UI of the project was implemented in the client folder.
The state was managed using Redux.
Authentication was implemented using Firebase, and payment was integrated with Stripe. Users need to authenticate with Firebase before making a payment.
The products data were fetched from [Fake Store API](https://fakestoreapiserver.reactbd.com/products).


warning :
The UI is live, but you won’t be able to log in. To log in, clone the project and run it locally, and you will be able to log in successfully and even will be able to even do payment.

![preview](./.github/preview_cart.gif)

![preview](./.github/preview_payment.gif)

![preview](./.github/preview_stripe.gif)

The project's UI is available here: (https://67b9cb20e5cc5b9de5373e4d--strong-otter-168263.netlify.app/)

## 🛠️ Technologies

- React
- Tailwind CSS
- Redux
- Firebase
- Stripe
- Git and Github

## Installation

1. Clone the repository: `git clone https://github.com/sonamsav/ecommerce-app`
2. Navigate to the project directory: `cd client`
3. Install the dependencies: `npm install`

## Usage

- Client: Start the development server: `npm run dev`
- Server: Start the development server: `npm start`
