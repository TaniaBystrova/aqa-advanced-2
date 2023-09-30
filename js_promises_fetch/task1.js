function delayedAction(text, ms) {
    setTimeout(() => {
	    console.log(text)
        }, ms) 
}

delayedAction('This is test for delayed function', 5000)

