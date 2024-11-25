import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore;

const GetUrlFromFireStore = async (userId) => {
    try {
        const docRef = doc(db, "userArrays", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            console.log(data.arrayField);
            return data.arrayField;
        } else {
            console.log("No data found for the user");
        }
    } catch (error) {
        console.error(`Cannot get User Url now`);
    }
}

export default GetUrlFromFireStore;