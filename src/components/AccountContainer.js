import React,{useState,useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transaction, setTransaction] = useState([])

  useEffect(()=> {getData()},[])

  const getData =() => {
    fetch('http://localhost:8001/transactions')
    .then((response)=> response.json())
    .then(data => setTransaction(data)) 
  }
function createDataInput(data){
  fetch('http://localhost:8001/transactions', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(() => window.location.reload());

}
  return (
    <div>
      <Search />
      <AddTransactionForm myDataInput={createDataInput}/>
      <TransactionsList transactions={transaction}/>
    </div>
  );
}

export default AccountContainer;
