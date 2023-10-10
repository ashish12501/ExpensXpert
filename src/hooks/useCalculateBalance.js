import { useEffect, useState, useContext } from "react";
import { query, collection, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase-config';
import { AppContext } from "../App";



export const useCalculateBalance = () => {
    const { userData } = useContext(AppContext);
    const UserID = userData.uid;
    // const [balance, setBalance] = useState(0); // Initialize balance state
    const [balance, setBalance] = useState(null);

    const addTransactionCollectionRef = collection(db, "transactions");
    let unsubscribe;

    const getBalance = async () => {
        try {
            const queryTransactions = query(
                addTransactionCollectionRef,
                where("userID", "==", UserID),
                orderBy("createdAt")
            );

            // unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
            onSnapshot(queryTransactions, (snapshot) => {

                let docs = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;
                    console.log(data.amount)
                    // console.log(data)

                    docs.push({ ...data, id });
                    return 0;
                });


            }


            )

            // Calculate the balance
            // let newBalance = 0;
            // for (const transaction of docs) {
            //     if (transaction.type === 'income') {
            //         newBalance += transaction.amount;
            //     } else {
            //         newBalance -= transaction.amount;
            //     }
            // }

            // Set the balance state
            //     console.log(newBalance)
            //     setBalance(newBalance);
            // });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getBalance();

        // return () => {
        //     if (unsubscribe) {
        //         unsubscribe();
        //     }
        // };
    }, []);

    return { balance };
};

