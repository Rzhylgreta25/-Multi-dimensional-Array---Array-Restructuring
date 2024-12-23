let subArray1 = ["Leo", "Lauren", "Luna", "Lloyd", "Lisa"];
let subArray2 = [24, 45, 14, 4, 44];


let restructuredArray = [];
for (let i = 0; i < subArray1.length; i++) {
    restructuredArray.push([subArray1[i], subArray2[i]]);
}

restructuredArray.forEach(item => {
    console.log(`name: ${item[0]}, age: ${item[1]}]`);
});