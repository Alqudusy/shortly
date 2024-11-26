import { doc, getDoc, setDoc, arrayUnion } from "firebase/firestore"; // Firestore functions
import { db } from "./firebase-config"; // Ensure you import your Firestore db instance correctly

const SaveUrlToFirestore = async (userId, newUrlObject) => {
    try {
        // Reference to the user's document in the "shortlyUser" collection
        const docRef = doc(db, "shortlyUser", userId);

        // Try to fetch the existing document
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            // If the document exists, retrieve the current array
            const existingData = docSnapshot.data().arrayField || [];
            
            // Add the new URL object to the existing array
            const updatedArray = [...existingData, newUrlObject];

            // Update the document with the updated array
            await setDoc(docRef, { arrayField: updatedArray }, { merge: true });
            console.log("URL successfully added to existing document!");
        } else {
            // If the document doesn't exist, create a new one with the URL object
            await setDoc(docRef, { arrayField: [newUrlObject] });
            console.log("Document created and URL added successfully!");
        }
    } catch (error) {
        console.error("Error saving URL:", error);
    }
};

export default SaveUrlToFirestore;
