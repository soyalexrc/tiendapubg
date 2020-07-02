

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

exports.getLuisExample = functions.https.onRequest((req, res) => {
  res.json({
    [
      {
        name: 'Page 1',
          id: 'vista1',
        rows: [
          {
            name: 'Row 1',
            items: [
              {
                name: 'Item 1',
                imageUrl: '',
                alt: "",
                category: '',
                title: '',
                price: '',
                heartActive: '',
                link: ''
              },
              {
                name: 'Item 2',
                imageUrl: '',
                alt: "",
                category: '',
                title: '',
                price: '',
                heartActive: 'active',
                link: ''
              },
              {
                name: 'Item 3',
                imageUrl: '',
                alt: "",
                category: '',
                title: '',
                price: '',
                heartActive: '',
                link: ''
              },
              {
                name: 'Item 4',
                imageUrl: '',
                alt: "",
                category: '',
                title: '',
                price: '',
                heartActive: 'active',
                link: ''
              }
            ]
          },
          {
            name: "Row 2",
            items: [
            {
                name: 'Item 1',
                imageUrl: '',
                alt: "",
                category: '',
                title: '',
                price: '',
                heartActive: '',
                link: ''
              },
              {
                name: 'Item 2',
                imageUrl: '',
                alt: "",
                category: '',
                title: '',
                price: '',
                heartActive: 'active',
                link: ''
              },
              {
                name: 'Item 3',
                imageUrl: '',
                alt: "",
                category: '',
                title: '',
                price: '',
                heartActive: '',
                link: ''
              },
              {
                name: 'Item 4',
                imageUrl: '',
                alt: "",
                category: '',
                title: '',
                price: '',
                heartActive: 'active',
                link: ''
              }
            ]
          },
          {
            name: "Row 3",
            items: [
            {
                name: 'Item 1',
                imageUrl: '',
                alt: "",
                category: '',
                title: '',
                price: '',
                heartActive: '',
                link: ''
              },
              {
                name: 'Item 2',
                imageUrl: '',
                alt: "",
                category: '',
                title: '',
                price: '',
                heartActive: 'active',
                link: ''
              },
              {
                name: 'Item 3',
                imageUrl: '',
                alt: "",
                category: '',
                title: '',
                price: '',
                heartActive: '',
                link: ''
              },
              {
                name: 'Item 4',
                imageUrl: '',
                alt: "",
                category: '',
                title: '',
                price: '',
                heartActive: 'active',
                link: ''
              }
            ]
          }
        ]
      }
    ]
 });

});
