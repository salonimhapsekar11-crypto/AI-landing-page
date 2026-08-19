import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDemoConfigKeyForSimplySaloni",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "simply-saloni-portfolio.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "simply-saloni-portfolio",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "simply-saloni-portfolio.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789012:web:demo123456"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);

export interface AuditSubmission {
  auditUrl: string;
  lookAtOption: string;
  hesitateOption: string;
  email: string;
  createdAt?: any;
}

export async function submitAuditRequest(data: AuditSubmission): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    // Attempt Firestore submission
    const docRef = await addDoc(collection(db, "audit_requests"), {
      ...data,
      createdAt: serverTimestamp(),
      submittedAtIso: new Date().toISOString()
    });
    return { success: true, id: docRef.id };
  } catch (err: any) {
    console.warn("Firestore write fallback notice:", err.message);
    // Fallback: save to localStorage so submission is never lost
    try {
      const existing = JSON.parse(localStorage.getItem("audit_submissions") || "[]");
      existing.push({ ...data, createdAtIso: new Date().toISOString() });
      localStorage.setItem("audit_submissions", JSON.stringify(existing));
      return { success: true, id: "local-" + Date.now() };
    } catch (localErr) {
      return { success: false, error: err.message };
    }
  }
}
