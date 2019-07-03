// data & elements
function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value

    function justFirstLetterUpperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // form validations
    if (doesNotPassAllValidations(name, msg)) {
        return
      }  

    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    h3.innerHTML = `${justFirstLetterUpperCase(name)} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)

    // display a comment
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
    inputField.value = null
    textArea.value = null
}

// form validations, error check
function doesNotPassAllValidations(name, msg) {
    if (!name && !msg) {
        alert('You forgot to fill in your name and message!')
        return true;
    }

    if (!name && msg) {
        alert('You forgot to fill in your name!')
        return true; 
    }

    if (name && !msg) {
        alert('You forgot to fill in your message!')
        return true; 
    }
  
    if(msg.length > 280) {
        alert('Your comment is too long')
        return true
    }

    // no bad words!!!
    const blacklist = ["suck", "fuck", "asshole", "stupid", "bitch"];
    for (let i = 0; i < blacklist.length; ++i) {
        if (msg.indexOf(blacklist[i]) !== -1) {
            alert('Watch your wording!')
            return true
        }
    }

    return false
  }