import { useEffect, useState, useContext } from "react"
import { query, collection, where, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../config/firebase-config'
import { AppContext } from "../App"

export const useGetTransactions = () => {
    const { userData } = useContext(AppContext)

    const UserID = userData.uid;
    const [transactions, setTransactions] = useState([])
    const [totalTransaction, setTotalTransaction] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalExpence, setTotalExpence] = useState(0)


    const addTransactionCollectionRef = collection(db, "transactions")

    const getTransactions = async () => {
        let unsubscribe;
        try {
            const queryTransactions = query(
                addTransactionCollectionRef,
                where("userID", "==", UserID),
                orderBy("createdAt", "desc")
            );

            unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
                let docs = [];
                let totalExoence = 0.00;
                let totalIncome = 0.00;

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;

                    docs.push({ ...data, id });
                    if (data.type === "expence") {
                        totalExoence += parseFloat(data.amount);
                    }
                    else {
                        totalIncome += parseFloat(data.amount);
                    }
                })
                setTransactions(docs)
                setTotalIncome(totalIncome);
                setTotalExpence(totalExoence);
                setTotalTransaction(totalIncome - totalExoence);
            })
        }
        catch (err) {
            console.log(err);
        }
        return () => unsubscribe();
    }

    useEffect(() => {
        getTransactions();
    }, [])

    return { transactions, totalTransaction, totalExpence, totalIncome }
}
