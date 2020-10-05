
const sendEmail = async (email, list, phone = "") => {
    let toList = "";
    switch (list) {
        case "wait":
            toList = "fulllstack-dev"
            break;
        case "telegram":
            toList = "telegram-list"
            break;

        default:
            break;
    }
    return new Promise((reject, resolve) => {
        //implement fetch...
        setTimeout(() => {
            alert("Thanks for register!")
            resolve("Success!")
        }, 250)
    })

}

const customAlert = (phrase) => {
    alert(phrase);
}


const customPrompt = async (phrase) => {
    const email = prompt(phrase);
    return (email !== "" && email !== null) ? await sendEmail(email, "wait") : true;
}

