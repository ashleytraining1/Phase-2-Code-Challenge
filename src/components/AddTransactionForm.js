import React,{useState} from "react";


function AddTransactionForm({myDataInput}) {
  const [data,setData] = useState({date:"", description:"", category:"", amount:0})

  const handleFormChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }
  function onFormSubmit(e){
e.preventDefault()
myDataInput(data)
  }
  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit}className="ui form">
        <div className="inline fields">
          <input onChange={handleFormChange} type="date" name="date" />
          <input onChange={handleFormChange} type="text" name="description" placeholder="Description" />
          <input onChange={handleFormChange} type="text" name="category" placeholder="Category" />
          <input onChange={handleFormChange} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
          
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;

