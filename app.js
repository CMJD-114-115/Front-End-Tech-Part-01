console.log("Hello");

const userForm = document.getElementById("user-form")

userForm.addEventListener("submit",(e) =>{
    e.preventDefault()
    // Get form values
    const firstName = document.getElementById("first-name").value
    const lastName = document.getElementById("last-name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const role = document.getElementById("role").value

    // Insert to a JS Object
      const collectedFormData = {
        formFirstName:firstName,
        formLastName:lastName,
        formEmail:email,
        formPassword:password,
        formRole:role
      }

    //   Print object 
    console.log("Form Dataset: ",collectedFormData)

    // To JSON
    console.log("Form Dataset as JSON: ",JSON.stringify(collectedFormData))
    userForm.reset()

})
