// Ask the user if they want to create a grocery list
let createList = prompt("Do you want to create a grocery list? (y/n)").toLowerCase();

if (createList === "y") {
    let itemCount = Number(prompt("How many items do you want to add to your grocery list?"));
    let groceryList = [];

    // Collect the grocery items
    for (let i = 0; i < itemCount; i++) {
        let item = prompt(`Enter item #${i + 1}:`);
        groceryList.push(item);
    }

    // Create sorted and reversed versions of the grocery list
    let groceryListSort = [...groceryList].sort();      
    let groceryListReverse = [...groceryList].reverse(); // Reversed order

    // Display the lists using alert
    alert(
        `Original Grocery List: ${groceryList.join(", ")}\n` +
        `Sorted Grocery List: ${groceryListSort.join(", ")}\n` +
        `Reversed Grocery List: ${groceryListReverse.join(", ")}`
    );
} else {
    alert("No grocery list created.");
}
