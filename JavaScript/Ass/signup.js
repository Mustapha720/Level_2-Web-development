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
    

        const user1 = signupArray.find(
            (u) => u.eMail === e_mail.value
        );

        if (user1) {
            alert('Email already exists!')
            first_name.value = ''
            last_name.value = ''
            e_mail.value = ''
            pass_word.value = ''
        } else{
            signupArray.push(Obj)
            console.log(signupArray)
        
            localStorage.setItem('sign_up', JSON.stringify(signupArray))
            window.location.href = 'signin.html'
        }
    
    
        first_name.value = ''
        last_name.value = ''
        e_mail.value = ''
        pass_word.value = ''
    }
}





const signIn = () => {
    if (c_email.value === '' || word.value === '') {
        alert('Please fill all the inputs');
    } else {
        const mail = c_email.value.trim();
        const pass = word.value.trim();
        console.log(mail, pass);

        // console.log(signupArray)

        const user = signupArray.find(
            (u) => u.eMail === mail && u.password === pass
        );

        if (user) {
            localStorage.setItem('users', JSON.stringify(user))
            // console.log(localStorage.getItem("users"));
            // console.log(JSON.parse(localStorage["users"]))
            window.location.href = 'dashboard.html';
        } else {
            alert("Invalid inputs");
        }

        c_email.value = ''
        word.value = ''

    }
}