import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

const SaveUrlToFireStore = async (userId, urlData) => {
    try {
        const docRef = doc(db, "userArrays", userId);
        await setDoc(docRef, { arrayField: urlData });
        console.log("Successful")
    } catch (error) {
        console.log(error);
    }
}

export default SaveUrlToFireStore;