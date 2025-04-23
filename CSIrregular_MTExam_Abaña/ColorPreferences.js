let favoriteColors = [];

// Use a loop to collect 3 color preferences from the user
for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter color #${i + 1} you like:`);
    favoriteColors.push(color);  
    console.log(`Updated list of favorite colors: ${favoriteColors.join(", ")}`);
}