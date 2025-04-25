let body = document.querySelectorAll("body")[0].childNodes;

console.log(body);
let h1Count = 0;
for (let i = 0; i < body.length; i++) {
  console.log(body[i]);
  console.log(body[i].nodeName);
  console.log(body[i].nodeValue);
  console.log(body[i].nodeType);
  if (body[i].nodeName === "h1") {
    h1Count++;
  }
}

console.log(`Total H1 ${h1Count}`);
