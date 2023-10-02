import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../config/firebase-config'


export const useAddTransacation = () => {
    const addTransactionCollectionRef = collection(db, "transactions")
    const addTransacation = async ({ description, amount, type }) => {
        await addDoc(addTransactionCollectionRef, {
            userID: "687876fg",
            description,
            amount,
            type,
            createdAt: serverTimestamp()
        })
    }

    return { addTransacation };
}
