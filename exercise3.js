// arguments
function addition()
{
    console.log("Arguments:")
    console.log (arguments);
    console.log("Number of Arguments:" + arguments.length);

    let total = 0;
    for(let i = 0; i< arguments.length; i++)
    {
        total = total + arguments[i];
    }
    console.log("Total:" + total);
}

addition(3,5);
addition(4,7,1,2,3,4);

//recursion 