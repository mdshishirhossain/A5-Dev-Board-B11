const today = new Date(); // You can also set a specific date: new Date('2025-03-06')

const options = { 
    weekday: 'short', 
    month: 'short',
    day: 'numeric',  
    year: 'numeric'
};

const formattedDate = today.toLocaleString('en-US', options);

// console.log(formattedDate); // Example Output: "Thu, March 6 2025"

const math = Math.floor(Math.random() * 256);;
console.log(math)
