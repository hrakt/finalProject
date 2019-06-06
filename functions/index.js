const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notification')
    .add(notification)
    .then(doc => console.log('notification added' , doc))
})

exports.listCreated = functions.firestore
    .document('lists/{listId}')
    .onCreate(doc=>{
        const list = doc.data();
        const notification = {
            content: 'Added a new project',
            user: `${list.authorFirstName} ${list.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)
})

exports.userJoined = functions.auth.user()
    .onCreate(user =>{

    return admin.firestore().collection('users')
        .doc(user.uid).get().then(doc =>{
            
            const newUser = doc.data()
            const notification = {
                content: 'Joined the party',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp() 
            }

        return createNotification(notification);
    })
})