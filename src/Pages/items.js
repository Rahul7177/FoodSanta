import React, {useEffect, useState}  from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'


const Items = () => {
  const [currLocation, setCurrLocation] = useState({});
  useEffect(() => {
    getLocation();
  }, []);

  var latitude = currLocation.latitude;
  var longitude = currLocation.longitude;

  const [userData, setUserData] = useState({
    item_name: "",
    description: "",
    latitude: "",
    longitude: "",
    });
  
    let name, value;
    const postUserData = (event) => {
      name = event.target.name;
      value = event.target.value;
  
      setUserData({...userData, [name]: value,latitude,longitude})
    
    };

const submitData = async (event) => {
  event.preventDefault();
  const { item_name,description,latitude,longitude } = userData;
  
  if(item_name && description) {
  const res = await fetch(
    "https://foodsanta-eaec3-default-rtdb.firebaseio.com/item.json",{
    method : "POST",
    headers: {
      "Content-Type": "application/json",

    },
    body:JSON.stringify({
      item_name,
      description,
      latitude,
      longitude,
    }),
    }
  );

  if (res) {
    setUserData({
      item_name:"",
      description:"",
    });
    alert("Item listed successfully");
  }else {
    alert("Please fill all the feilds");
  }
}else {
  alert("Please fill all the feilds");
}
};

const getLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    const { latitude, longitude } = position.coords;
    setCurrLocation({ latitude, longitude });
    
  });
};

  return (
    <div>
      <Navbar/>
      <div className='items-bg'>
        <h1>List Up the Items</h1>
      <form method='POST'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Item Name</label>
    <input type="text" class="form-control" name='item_name' value={userData.mail} onChange={postUserData}/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name='description' value={userData.messege} onChange={postUserData}></textarea>
</div>

  <button type="submit" class="btn btn-primary" onClick={submitData}>Submit</button>
</form>
      </div>
      <Footer/>
    </div>
  )
}

export default Items