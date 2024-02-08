const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    py: "python"
}
for (const key in myObject) {
    console.log(`${key} is for the value = ${myObject[key]}`);
}

const programming = ["java","cpp","ruby"]
for (const key in programming) {
   console.log(programming[key]);
}

