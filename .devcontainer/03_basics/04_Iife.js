// Immediately Invoked Function Expressions(IIFE)

(function chai(){
    // named IIFE
    console.log("DB connected")
}());

( (name) => {
    console.log(`DB connected Two ${name}`)
})("Harsh")