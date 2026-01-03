//1.	Validate input and exit early if it is invalid.

let age = 5;

/* Validate input */
if (age < 0) {
    console.log("Invalid age");
    return;
}

/* Main logic */
console.log("Valid age:", age);


console.log("\n")

//--------------------------------------

//2.	Decide between three outcomes using if / else if / else.

let temperature = 30;

if (temperature > 35) {
    console.log("Hot");
} else if (temperature >= 20) {
    console.log("Warm");
} else {
    console.log("Cold");
}

console.log("\n")

//---------------------------------

//3.	Rewrite the same logic using switch.

switch (true) {
    case temperature > 35:
        console.log("Hot");
        break;

    case temperature >= 20:
        console.log("Warm");
        break;

    default:
        console.log("Cold");
}

console.log("\n")

//--------------------------------------

//4.	Handle a default or fallback case safely.

let role = "guest";

switch (role) {
    case "admin":
        console.log("Full access");
        break;

    case "user":
        console.log("Limited access");
        break;

    default:
        console.log("Read-only access");
}

console.log("\n")

//------------------------------

//5.	Prevent code execution when required data is missing.

let username = "Hamzah";

if (!username) {
    console.log("Username is required");
    return;
}

console.log("Welcome,", username);

console.log("\n")

//----------------------------------

//6.	Replace nested if statements with guard clauses.

function atm(balance, amount){
    if(balance <= 0) return "Insufficient balance";
    if(amount <= 0) return "Invalid Withdrawal Amount";
    if(balance < amount) return "Amount unavailable";

    return "Withdrawal successful";
}

console.log(atm(100,110))

console.log("\n")

//--------------------------------------

//7.	Control logic based on a "loading" | "error" | "success" state.

function handleState(state) {
    if (state === "loading") {
        return "Loading data...";
    }

    if (state === "error") {
        return "Something went wrong";
    }

    if (state === "success") {
        return "Data loaded successfully";
    }

    return "Unknown state";
}

console.log(handleState("success"));

console.log("\n")

//---------------------------------------

//8.	Use return to stop execution at the correct time.

function submitForm(isValid) {
    if (!isValid) {
        return "Form submission blocked";
    }

    return "Form submitted successfully";
}

console.log(submitForm(false));

console.log("\n")

//---------------------------------------

//9.	Convert a simple if/else to a ternary only if readability improves.

let isLoggedIn = true;

let message = isLoggedIn ? "Welcome back" : "Please log in";

console.log(message);


//-----------------------------------------

//11.	Break a complex condition into named variables.

function canWithdraw(balance, amount) {
    const hasBalance = balance > 0;
    const validAmount = amount > 0;
    const withinLimit = amount <= balance;

    return hasBalance && validAmount && withinLimit;
}

canWithdraw(100, 50);

console.log("\n")

//-----------------------------------------

//12.	Use switch(true) to group complex conditional logic.

function getDiscount(price, isMember) {
    switch (true) {
        case price >= 1000 && isMember:
            return "30% discount";

        case price >= 1000:
            return "20% discount";

        case price >= 500:
            return "10% discount";

        default:
            return "No discount";
    }
}

console.log(getDiscount(1200, true));

console.log("\n")

//-------------------------------------------

//13.	Flatten deeply nested logic using early returns.

function processOrder(user, order) {
    if (!user) return;
    if (!user.isLoggedIn) return;
    if (!order) return;
    if (!order.isPaid) return;

    console.log("Order processed");
}

console.log("\n")

//-----------------------------------------

//14.	Use nullish coalescing (??) to provide safe defaults without overriding valid falsy values.

function hasCachedData() {
    console.log("Checking cache");
    return true;
}

function fetchFromServer() {
    console.log("Fetching from server");
}

hasCachedData() || fetchFromServer();

//////

function hasCachedData() {
    console.log("Checking cache");
    return false;
}

hasCachedData() || fetchFromServer();


console.log("\n")

//-------------------------------------------

//