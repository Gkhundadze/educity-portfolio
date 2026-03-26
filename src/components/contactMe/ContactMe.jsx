import "./ContactMe.css"
import { useState , useEffect } from "react"
import { getFromLocalStorage, saveToLocalStorage } from "../../utils/localStorage";


function ContactMe() {
const [name , setName] = useState(getFromLocalStorage("nameinput") || "")
const [email , setEmail] = useState(getFromLocalStorage("emailinput") || "")
const [website , setWebsite] = useState("")
const [message , setMessage] = useState("")


const [errorCheck , setErrorCheck] = useState(false);
const [emailErrorCheck , setEmailErrorCheck] = useState(false);

const errorMessage = 'Name must be between 1 and 20 characters long.';
const emailErrorMessage = 'Email must be between 15 and 100 characters long.';
// input validation for name field
const minNameLength = 1;
const maxNameLength = 20;
const minEmailLength = 15;
const maxEmailLength = 100;
const minMessageLength = 10;
const maxMessageLength = 200;




// function to validate name input
function validateName(name) {
  if (name.length <= minNameLength || name.length > maxNameLength) {

setErrorCheck(true);

  }else {
    setErrorCheck(false);
  }
}

function validateEmail(email) {
  if (email.length < minEmailLength || email.length > maxEmailLength || !email.includes("@") || !email.includes(".") ) {
    // Set error state for email
    setEmailErrorCheck(true);
  } else {

    // Clear error state for email
    setEmailErrorCheck(false);
  }
}

function validatemessage(message){
  if (message.length < minMessageLength || message.length > maxMessageLength) {
    // Set error state for message
    setMessageErrorCheck(true);
  } else {

    // Clear error state for message
    setMessageErrorCheck(false);
  }
}


  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    if (!emailErrorCheck && !errorCheck){
      console.log("Form submitted:", { name, email, website, message });
      setName("");
      setEmail("");
      setWebsite("");
      setMessage("");
    }

  }



useEffect(() => {
  saveToLocalStorage("nameinput", name)
  saveToLocalStorage("emailinput", email)
},[name, email])
  return (
    <section>
        <article>
            <form onSubmit={handleSubmit}>
              <div className="name-wrapper">
                <div className="errorcheck">
                  {errorCheck ? errorMessage : ""}
                </div>
            <input
              type="text" 
              name="name" 
              value={name}
              onChange={(e) =>{
                 const inputValue = e.target.value
                 setName(inputValue)
                 validateName(inputValue)
              }}
              placeholder="Your Name"
              minLength={minNameLength}
              maxLength={maxNameLength}
              required
              onBlur={ () => validateName(name)}
            />
            </div>
            <div className="email-wrapper">
              <div className="errorcheck">
                {emailErrorCheck ? emailErrorMessage : ""}
              </div>
            <input 
            type="email" 
            name="email"  
            value={email} 
            onChange={(e) => {
              const inputValue = e.target.value;
              setEmail(inputValue)
              validateEmail(inputValue)
            }} 
            placeholder="Your Email" 
            required 
            minLength="15"
            maxLength="100"
            />
            </div>
            <input type="text"
             name="Website"   
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="Your website(if you have one)" />
            <textarea name="message"
              value={message} 
              onChange={(e) => {
                const inputValue = e.target.value;
                setMessage(inputValue)
                validatemessage(inputValue)
}} 

              placeholder="Your message" 
              required></textarea>
            <button type="submit">Send</button>
            </form>
        </article>
        <article>

        </article>
    </section>
  )
}



export default ContactMe