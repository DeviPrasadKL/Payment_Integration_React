import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("please enter amount");
    } else {
      var options = {
        //Generate key and secreat from logging in to razorpay app in browser
        key: "rzp_test_ffSb2yIkIflJH9",
        key_secret: "iExGzM7nCvTIo41Rk4iV9kye",
        amount: amount,
        currency: "INR",
        name: "STARTUP_PROJECTS",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Sample",
          email: "sample@gmail.com",
          contact: "1234567890"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <div className="App">
      <h2>Razorpay Payment Integration Using React</h2>
      <br />
      <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => setamount(e.target.value)} />
      <br /><br />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default App
