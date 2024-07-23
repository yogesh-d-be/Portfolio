import React from "react";
import './header.css';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useState } from "react";

function Header() {
    const [number] = useState({
        mobileNumber:""
    })
    const handleChat = async() => {
        const { mobileNumber } = number;
      
      
       
      try{
        const {value: whatsappNumber} = await Swal.fire({
          title: 'Enter Whatsapp Number',
          input:'text',
          inputValue: mobileNumber,
          showCancelButton:true,
          confirmButtonText: 'OK',
          cancelButtonText:'Cancel', customClass: {
            title: 'swal-title'
          } ,
          inputValidator: (value) =>{
            if(!value){
              return "Enter Mobile Number!";
            }
            else if(value.length !== 10){
              return "Enter Valid Mobile Number!"
            }
            return null;
          }
        });
    
        if(whatsappNumber){
          const result = await Swal.fire({
             title: `Your Whatsapp Number is ${whatsappNumber}`,
             showCancelButton: true,
             confirmButtonText: "Confirm",
             cancelButtonText:"Edit",
             customClass: {
              title: 'swal-title'
            } 
          });
    
          if(result.isConfirmed){
            const Number = '6374694062';
            const message = `Hello, I would like to work together.`;
            const whatsappUrl = `https://wa.me/${Number}?text=${encodeURIComponent(message)}`;
    
    
            window.open(whatsappUrl,'_blank');
          }
    
          else if(result.dismiss === Swal.DismissReason.cancel){
            handleChat(); //call the function again after click edit button
          }
    
        }    
      }
      catch(error){
        toast.error("Something went wrong, check after sometime!")
      }
        
      };

  return (
    <>
      <div className="header">
        <h1 className="name">YOGESH</h1>
        <button className="button-st" onClick={handleChat}><span>Work together</span></button>
      </div>
    </>
  );
}

export default Header;
