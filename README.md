# OLX Clone

![Project Image](https://raw.githubusercontent.com/AJITHANAND/Olx-Clone/deploy/screenshots/1.png)

> A clone of the OLX platform built with ReactJS and Firebase.

---

### Table of Contents

- [OLX Clone](#olx-clone)
    - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Demo](#demo)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

---

## Description

The OLX Clone project is a web application that replicates the functionality of the OLX platform, allowing users to post ads for various items, browse and search for ads, and manage their user accounts. It's built with ReactJS for the front end and utilizes Firebase for authentication, storage, and Firestore as the database.

---

## Demo

You can access the live demo of this project [here](demo-link).

---

## Features

- **User Authentication**: Users can sign up, log in, and log out securely using Firebase Authentication.

- **Posting Ads**: Registered users can post ads by providing details such as product name, description, price, and uploading images.

- **Search and Browse**: Users can search for ads based on keywords, view a list of ads, and see the details of each ad.

- **User Dashboard**: Registered users have access to a dashboard where they can manage their posted ads.

- **Responsive Design**: The application is designed to be responsive, ensuring a seamless experience on both desktop and mobile devices.

---

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AJITHANAND/Olx-Clone.git
   ```

To get a local copy of this project up and running, follow these steps:

2.  **Navigate to the project directory:**
   ```bash
   cd Olx-Clone
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Environment:**
To run this project, you will need to add the following environment variables to your .env file & Create a Firebase project and configure it. Update the Firebase configuration in your project.
```bash
REACT_APP_API_KEY=""
REACT_APP_AUTH_DOMAIN=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
REACT_APP_MEASUREMENT_ID=
```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
This will open the project in your default web browser.

## Usage

- Sign up or log in to your account.
- Explore ads, search for products, and view ad details.
- Post your own ads by providing the necessary information.
- Manage your posted ads through your user dashboard.

## Technologies Used

- React
   - Vite
   - React-Router
   - React-Select
   - yet-another-react-lightbox
- REST API
- CSS (styles and layout)
- Firebase
   - Firestore
   - Storage
   - Authentication
- Bootstrap
## Contributing

Contributions are welcome! If you find a bug or have suggestions for improvements, feel free to submit an issue or pull request.

- Fork the repository.
- Create a new branch: git checkout -b feature/your-feature-name
- Commit your changes: git commit -am 'Add some feature'
- Push the branch: git push origin feature/your-feature-name
- Open a pull request.

## License

This project is licensed under the MIT License.

<!-- ## Author
- Ajith Anand -->

## Acknowledgments
> - Special thanks to the ***OLX*** team for the inspiration.
