import { initializeApp } from 'firebase'
import { FIREBASE_CONFIG } from '@common/config'

// Initialize Firebase
const firebaseApp = initializeApp(FIREBASE_CONFIG)

// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db   = firebaseApp.database()
export const auth = firebaseApp.auth()


// export all the refs
export const rootRef  = db.ref()
export const usersRef = db.ref('users')
