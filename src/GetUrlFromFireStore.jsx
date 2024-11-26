import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config"; // Import Firestore db instance

const GetAllUrlsFromFirestore = async (userId) => {
    try {
        const docRef = doc(db, "shortlyUser", userId); // Reference to the user's document
        const docSnapshot = await getDoc(docRef); // Fetch the document

        if (docSnapshot.exists()) {
            // Retrieve the arrayField safely
            const data = docSnapshot.data();
            const urlArray = data?.arrayField || []; // Fallback to an empty array if undefined
            console.log("Retrieved URL objects:", urlArray);
            return urlArray;
        } else {
            console.log("No document found for this user.");
            return []; // Return an empty array if no document exists
        }
    } catch (error) {
        console.error("Error retrieving URLs:", error);
        return []; // Return an empty array in case of an error
    }
};

export default GetAllUrlsFromFirestore;
