localStorage.clear();
localStorage.setItem("name", "Tom");
localStorage.setItem("hobbies", JSON.stringify({ name: "Tom"}));

console.log(JSON.parse(localStorage.getItem("hobbies")));