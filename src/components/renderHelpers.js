export function showPostForm () {
    document.querySelector('#postForm').className = "active"
    console.log("show postform")
}


export function closePostForm () {
    document.querySelector('#postForm').className = ""
    console.log("close postform")
}

export function showMessageForm () {
    document.querySelector('#message').className =  "active"
}

export function closeMessageForm () {
    document.querySelector('#message').className = ""
    console.log("close postform")
}
