import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
  deleteUser,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  getDoc,
  deleteDoc,
  collection,
  getDocs,
  serverTimestamp,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFSfcrhRKSgw3qZ87Kj0NB7YGK9QCj6r8",
  authDomain: "ebus-management-3559a.firebaseapp.com",
  projectId: "ebus-management-3559a",
  storageBucket: "ebus-management-3559a.firebasestorage.app",
  messagingSenderId: "310188534908",
  appId: "1:310188534908:web:4ed71b02f44db295c2adf9",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export const FirebaseContext = createContext({});
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    let isMounted = true; 

    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const userRole = await getUserRole(authUser.email);
        if (isMounted) {
          setUser(authUser);
          setRole(userRole);
          localStorage.setItem("user", JSON.stringify(authUser));
          localStorage.setItem("role", userRole);
        }
      } else {
        if (isMounted) {
          setUser(null);
          setRole(null);
          localStorage.removeItem("user");
          localStorage.removeItem("role");
        }
      }
    });

    return () => {
      isMounted = false; 
      unsubscribe();
    };
  }, []); 

  const storeUserData = async (userId, userData, role) => {
    try {
      const collectionName = role === "driver" ? "drivers" : "users"; // Correct collection
      await setDoc(doc(firestore, collectionName, userId), {
        ...userData,
        uid: userId,
        createdAt: serverTimestamp(),
      });
      console.log("User data stored successfully");
    } catch (error) {
      console.error("Error storing user data:", error);
      throw error;
    }
  };

  // Signup function for both users and drivers
  const signupUserWithEmailAndPassword = async (
    name,
    email,
    password,
    role
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Store user data in Firestore
      await storeUserData(user.uid, { name, email, role }, role);

      return user;
    } catch (error) {
      console.error("Error signing up user:", error);
      throw error;
    }
  };

  const getUserRole = async (email) => {
    try {
      const collections = ["admin", "drivers", "users"];
      for (let collectionName of collections) {
        const usersRef = collection(firestore, collectionName);
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          return querySnapshot.docs[0].data().role || null;
        }
      }
      throw new Error("No account found with this email.");
    } catch (error) {
      console.error("Error fetching role:", error.message);
      return null;
    }
  };

  const loginUserWithEmailAndPassword = async (
    email,
    password,
    expectedRole
  ) => {
    try {
      // Fetch user role by email before authentication
      const userRole = await getUserRole(email);
      console.log(userRole, expectedRole);

      if (!userRole) {
        throw new Error(
          "Your account does not have an assigned role. Please contact support."
        );
      }

      // Compare role before signing in
      if (userRole !== expectedRole) {
        throw new Error(
          `Access denied! Expected role: ${expectedRole}, but your role is: ${userRole}.`
        );
      }

      // Sign in user if role matches
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (!user) {
        throw new Error("User not found. Please check your credentials.");
      }

      // Only set state when everything is validated
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", userRole);
      setUser(user);
      setRole(userRole);

      return { user, role: userRole };
    } catch (error) {
      console.error("Login failed:", error.message);

      // Reset incorrect state
      setUser(null);
      setRole(null);

      throw new Error(error.message);
    }
  };

  const fetchDrivers = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "drivers"));
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching drivers:", error);
      return [];
    }
  };

  const storeBusData = async (busData) => {
    try {
      const docRef = await addDoc(collection(firestore, "buses"), busData);
      console.log("Bus details added with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding bus details:", error);
      throw error;
    }
  };

  const fetchBuses = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "buses"));
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching buses:", error);
      return [];
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setRole(null);
      localStorage.removeItem("user");
      localStorage.removeItem("role");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        setUser,
        role,
        setRole,
        getUserRole,
        signupUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        logoutUser,
        storeUserData,
        fetchDrivers,
        fetchBuses,
        authStateListener: (callback) => onAuthStateChanged(auth, callback),
        storeBusData,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};







