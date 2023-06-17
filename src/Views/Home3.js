import React,{useState} from "react";
import Footer from "../Components/Footer"



function Home3(){
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dateTime:'',
    address: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const send = (e) => {
    e.preventDefault();
    // Call your API post method here with the formData
    fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };





    return (
<div className="h-screen bg-black pt-5 blll " id="about" >
<section class="text-gray-400 bg-black body-font relative">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" title="map" class="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8935385737927!2d88.34089469999999!3d25.3077807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb3d4beb0e3eb5%3A0x57e4fc2c36db6118!2sNAWAZ%20PHOTOGRAPHY!5e0!3m2!1sen!2sin!4v1686937000662!5m2!1sen!2sin"></iframe>
      <div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Barabari, West Bengal 733125</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-400 leading-relaxed">sarif.nawaz112@gmail.com</a>
          <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">+91 82504 37965</p>
        </div>
      </div>
    </div>

    <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-white text-lg mb-1 font-medium title-font">Contact</h2>
      <p class="leading-relaxed mb-5">Send us a message for booking query, We only provide services on Tapan,Gangarampur etc.</p>
      <div id="book" class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label htmlFor="phone" class="leading-7 text-sm text-gray-400">Phone</label>
        <input type="number" id="phone" name="phone" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="date" class="leading-7 text-sm text-gray-400">Date</label>
        <input type="datetime-local" id="date" name="date" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

      </div>
      <div class="relative mb-4">
        <label for="address" class="leading-7 text-sm text-gray-400">Address</label>
        <input type="text" id="address" name="address" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

      </div>
     
      <button onSubmit={send} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
      <p class="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
    
  </div>

<Footer/>
</section>




</div>

    )
}

export default Home3