//10 fortune messages 
const messages = [
    "You will find your future wife soon.",
    "Next year is going to be your best year yet.",
    "A significant change in your career is coming.",
    "Love is in the air; keep your heart open.",
    "An old friend will re-enter your life unexpectedly.",
    "A financial opportunity will arise this month.",
    "Your hard work will soon pay off in unexpected ways.",
    "A journey will bring you closer to your dreams.",
    "You will receive news that brings you joy.",
    "Your kindness will be rewarded in ways you don't expect."
]

const generateNum = () => Math.floor(Math.random() * 11);

for(let i = 0; i < 100; i++){
    console.log(generateNum());
}