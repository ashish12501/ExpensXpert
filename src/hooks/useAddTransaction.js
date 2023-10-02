import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useContext } from 'react'
import { AppContext } from '../App'
import { db } from '../config/firebase-config'


export const useAddTransacation = () => {
    const addTransactionCollectionRef = collection(db, "transactions")
    const { userData } = useContext(AppContext)

    const addTransacation = async ({ description, amount, type }) => {
        await addDoc(addTransactionCollectionRef, {
            userID: userData.uid,
            description,
            amount,
            type,
            createdAt: serverTimestamp()
        })
    }

    return { addTransacation };
}
