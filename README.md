# Live Preview
https://eco-mart-pi.vercel.app/

# Eco Mart

Eco Mart is an ecommerce application built with React and Vite. It has both user and admin sides, supports Razorpay payment gateway in test mode, and uses localStorage to persist users' items in the cart even after logout. Ps :- This is not mobile responsive yet better to use on a desktop.

## Features

### User Side
- Browse products
- Add products to cart
- View cart items
- Make payments using Razorpay (test mode)
- Persist cart items using localStorage

### Admin Side
- Add new products
- Modify existing products
- Manage product inventory

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **State Management:** Redux Toolkit
- **Backend:** Firebase Firestore
- **Payment Gateway:** Razorpay (test mode)

## Installation Guide

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/KartikLakhotiya/Eco-Mart.git
   cd Eco-Mart

2. **Install dependencies**
    ```bash
    npm install

3. **Setup Firebase**
    - Create a Firebase project and add a web app.
    - Add your firebase credentials in .env file 
    ```
    VITE_SECURE_API_KEY = "Your_firebase_api_key"
    ```

4. **Setup Razorpay**
    - Create a Razorpay account and get the test mode keys.
    - Add your Razopay keys in the .env file :
    ```
    VITE_SECURE_RAZORPAY_KEY_ID="your-razorpay-key-id"
    VITE_SECURE_RAZORPAY_KEY_SECRET="your-razorpay-key-secret"
    ```

5. **Run the application**
    ```bash
    npm run dev

## Usage
- User Side
    - Browse products, add them to the cart, and proceed to checkout to simulate a payment using Razorpay.
- Admin Side
    - Access the admin panel to add or modify products.


## Additional Notes
- The application uses localStorage to store cart items, ensuring persistence across sessions.
- Ensure you are using the correct environment variables for the Razorpay integration.
- The application is set up with Vite as the bundler for fast and efficient development and build processes.


## Contributing
- Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## Bugs
All the Major functionalities is working properly but there are some minor bugs which I will fix soon.
- Not yet Mobile responsive.
- If same item is added in the cart more than once and after that you delete any one of them then all the items gets deleted.
- Redirects to payment even if no items are added in cart.



## License
- This project is licensed under the MIT License.





