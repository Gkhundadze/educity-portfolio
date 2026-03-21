import "./ContactMe.css"
import { useState , useEffect } from "react"


function ContactMe() {
const [name , setName] = useState("")
const [email , setEmail] = useState("")
const [website , setWebsite] = useState("")
const [message , setMessage] = useState("")

const [errorCheck , setErrorCheck] = useState(false);

const errorMessage = 'Name must be between 1 and 20 characters long.';
// input validation for name field
const minLength = 1;
const maxLength = 20;



// function to validate name input
function validateName(name) {
  if (name.length <= minLength || name.length > maxLength) {
    console.log(errorMessage);

setErrorCheck(true);

  }else {
    console.log("Name is valid.");
    setErrorCheck(false);
  }
}



  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Name:", name);

  }



useEffect(() => {
  console.log(name)
},[name])
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
                 setName(e.target.value)
                 if (e.target.value.length > minLength ) {
                  validateName(e.target.value)
                 } 
              }}
              placeholder="Your Name"
              minLength={minLength}
              maxLength={maxLength}
              required
              onBlur={ () => validateName(name)}
            />
            </div>
            <input 
            type="email" 
            name="email"  
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Youe Email" 
            required 
            />
            <input type="text" name="Website"   value={website} onChange={(e) => setWebsite(e.target.value)}placeholder="Your website(if you have one)" />
            <textarea name="message"  value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" required></textarea>
            <button type="submit">Send</button>
            </form>
        </article>
        <article>

        </article>
    </section>
  )
}



export default ContactMe