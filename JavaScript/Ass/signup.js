window.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.code === "Enter") {
        uploadProduct()
    }
})

let signupArray = localStorage['sign_up'] ? JSON.parse(localStorage.getItem('sign_up')) : []

// let retrievedArray = localStorage['sign_up'] ? JSON.parse(localStorage['sign_up']) : []
// signupArray = retrievedArray

const signUp = () => {
    if (first_name.value === "" || last_name.value.value === "" || e_mail.value === "" || pass_word.value === "") {
        alert("Please fill all the inputs")
    } else{
        const firstName = first_name.value.trim()
        const lastName = last_name.value.trim()
        const eMail = e_mail.value.trim()
        const password = pass_word.value.trim()
    
        const Obj = {
            firstName,
            lastName,
            eMail,
            password
        }
    
        // console.log(Obj);
    
        signupArray.push(Obj)
        console.log(signupArray)
    
        localStorage.setItem('sign_up', JSON.stringify(signupArray))
    
    
        first_name.value = ''
        last_name.value = ''
        e_mail.value = ''
        pass_word.value = ''

        window.location.href = 'signin.html'
    }
}





const signIn = () => {
    if (c_email.value === '' || word.value === '') {
        alert('Please fill all the inputs');
    } else {
        const mail = c_email.value.trim();
        const pass = word.value.trim();
        console.log(mail, pass);

        console.log(signupArray)

        for (let i = 0; i < signupArray.length; i++) {
            console.log(signupArray[i].eMail);
            if (mail === signupArray[i].eMail || pass === signupArray[i].password) {
                window.location.href = 'dashboard.html'
            } else {
                alert("Invalid inputs")
            }
        }

        c_email.value = ''
        word.value = ''

    }
}