import { auth } from './firebase';

// Logout
export function Logout(){
    auth.signOut();
}
