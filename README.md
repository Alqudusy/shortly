# Link Shortener

A simple and efficient link shortener web application that allows users to generate short URLs for long web links and manage their links.

## Features

- **Shorten Links**: Quickly convert long URLs into short, manageable links.
- **Custom URLs**: Option to create custom aliases for short links.
- **Link Management**: View, edit, and delete previously created links.
- **Firestore Integration**: Stores user-generated URLs in Firebase Firestore for persistence.
- **Responsive Design**: Optimized for use on both desktop and mobile devices.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Firebase Firestore (Database)
- **Styling**: Bootstrap or custom CSS

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd link-shortener
   ```

2. Install dependencies (if using a framework like React):
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore Database.
   - Add a new web app to the project and copy the Firebase configuration details.
   - Replace the placeholders in your Firebase config file (e.g., `firebaseConfig.js`) with the copied details.

4. Run the application:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage

1. Enter a long URL in the input field.
2. Click the **Shorten** button to generate a short link.
3. View the list of generated links in the dashboard.
4. Use options to edit or delete links as needed.

## Folder Structure

```
link-shortener/
├── public/
├── src/
│   ├── components/
│   │   ├── LinkInput.js
│   │   ├── LinkList.js
│   │   └── ...
│   ├── services/
│   │   └── firebaseConfig.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Future Enhancements

- User Authentication: Allow users to sign in and manage their personalized links.
- Analytics: Track link usage and click statistics.
- Custom Expiry: Let users set expiry dates for short links.
- QR Code Generation: Provide QR codes for short links.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [Firebase Documentation](https://firebase.google.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

