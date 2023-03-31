import React, {useState} from 'react'
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import { json } from 'react-router-dom';


const Contact = () => {
  const [userData, setUserData] = useState({
  mail: "",
  messege: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

  setUserData({...userData, [name]: value})
  };

//connecting with firebase
const submitData = async (event) => {
  event.preventDefault();
  const { mail,messege } = userData;
  
  if(mail && messege) {
  const res = await fetch(
    "https://foodsanta-eaec3-default-rtdb.firebaseio.com/userMessege.json",{
    method : "POST",
    headers: {
      "Content-Type": "application/json",

    },
    body:JSON.stringify({
      mail,
      messege,
    }),
    }
  );

  if (res) {
    setUserData({
      mail:"",
      messege:"",
    });
    alert("Messege sent");
  }else {
    alert("Please fill all the feilds");
  }
}else {
  alert("Please fill all the feilds");
}
};



  return (
    <div>
        <Navbar/>
        <div className='contact-bg'>
          <h1>Connect with us</h1>
        <form method='POST'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='mail' value={userData.mail} onChange={postUserData}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your Messege</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name='messege' value={userData.messege} onChange={postUserData}></textarea>
</div>

  <button type="submit" class="btn btn-primary" onClick={submitData}>Submit</button>
</form>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact