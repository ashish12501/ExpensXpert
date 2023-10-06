import { useEffect, useState, useContext } from "react"
import { query, collection, where, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../config/firebase-config'
import { AppContext } from "../App"

export const useGetTransactions = () => {
    const { userData } = useContext(AppContext)

    const UserID = userData.uid;
    const [transactions, setTransactions] = useState([])
    const addTransactionCollectionRef = collection(db, "transactions")

    const getTransactions = async () => {
        let unsubscribe;
        try {
            const queryTransactions = query(
                addTransactionCollectionRef,
                where("userID", "==", UserID),
                orderBy("createdAt")
            );

            unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
                let docs = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;

                    docs.push({ ...data, id });
                })
                setTransactions(docs)
            })
        }
        catch (err) {
            console.log(err);
        }
        return () => unsubscribe();
    }

    useEffect(() => {
        getTransactions();
    })

    return { transactions }
}
