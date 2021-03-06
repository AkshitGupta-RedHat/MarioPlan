const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});



const createNotifiation = (notifiation => {
    admin.firestore().collection('notifications').add(notifiation)
    .then(doc => { console.log('notification added', doc)})
})

exports.projectCreated = functions.firestore
.document('project/{project}').onCreate(doc => {
    const project = doc.data();
    const notifiation = {
        content :"Added new project",
        user : `${project.authorFirstName} ${project.authorLastName}`,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotifiation(notifiation)
})

exports.userJoined = functions.auth.user()
        .onCreate(user => {
            return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {
                const newUser = doc.data();
                const notifiation = {
                    content: 'New User Joind',
                    name : `${newUser.firstname} ${newUser.lastname}`,
                    timestamp: admin.firestore.FieldValue.serverTimestamp()
                }

                return createNotifiation(notifiation)
            })
        })
