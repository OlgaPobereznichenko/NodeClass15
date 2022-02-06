// function within function

function print(){
    console.log("hello");

    function greet(){
        console.log("world");
    }
    greet();
}

// greet(); will throw error
