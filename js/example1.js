let book = {
    title: "Shriya book",
    author: "Shriya"
}

function hasProperty(obj, key) {
  return key in obj;
}

console.log(hasProperty(book, "title"));   
console.log(hasProperty(book, "year"));  



let student = {
    name: "John",
    age: 21,
    grade: "A"
  };
  
  for (let key in student) {
    console.log(`${key}: ${student[key]}`);
  }