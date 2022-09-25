import React,{useState,useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transaction, setTransaction] = useState([])

  const [myData, setMyData] = useState("")
  function handleDataChange(e){
    setMyData(e.target.value)
    filterData()
  }

  useEffect(()=> {
    getData()
    
    
  },[])

 

  const getData =() => {
    fetch('http://localhost:8001/transactions')
    .then((response)=> response.json())
    .then(data => setTransaction(data))
    if(myData !== ""){
      filterData()
    } 
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

 // filtering data
 function filterData(){
  const dataFilter = transaction.filter((transaction)=>{
    let description = transaction.description.toLowerCase()
    let category = transaction.category.toLowerCase()
   

    return description.includes(myData.toLowerCase())|| category.includes(myData.toLowerCase())

  })
setTransaction(dataFilter)
}
console.log(transaction);
  return (
    <div>
      <Search searchData={handleDataChange}/>
      <AddTransactionForm myDataInput={createDataInput}/>
      <TransactionsList transactions={transaction}/>
    </div>
  );
}

export default AccountContainer;
