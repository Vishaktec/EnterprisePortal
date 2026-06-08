import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAETO-bfN1wORtT8cVhSZseQ05ZGmQspC0",
  authDomain: "vishaktech-79a37.firebaseapp.com",
  projectId: "vishaktech-79a37",
  storageBucket: "vishaktech-79a37.firebasestorage.app",
  messagingSenderId: "68398724582",
  appId: "1:68398724582:web:76840e738169b3af429227"
};

const ALLOWED_EMAILS = [
  "dr4683743@gmail.com",
  "deepakmurugesan805@gmail.com"
];

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.documentElement.style.visibility = "hidden";

onAuthStateChanged(auth, async (user) => {

  if (!user || !ALLOWED_EMAILS.includes(user.email)) {

    if (user) await signOut(auth);

    window.location.replace("/EnterprisePortal/");
    return;
}

window.vishakSignOut = async function () {
  await signOut(auth);
  window.location.replace("/EnterprisePortal/");
};
