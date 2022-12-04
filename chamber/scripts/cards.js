// const requestURL = "./scripts/companies.json";

fetch("./scripts/companies.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const buisinesses = jsonObject["buisinesses"];
    buisinesses.forEach(displayBuisinesses);
  });

function displayBuisinesses(buisiness) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let logo = document.createElement("img");
  let website = document.createElement("p");
  let address = document.createElement("p");
  let membership = document.createElement("p");

  // Change the textContent property of the h2 element to contain the buisiness's full name
  h2.textContent = buisiness.name;

  //change the textContent property of the birth place and birth date p elements to the actual place
  website.textContent = buisiness.website;
  address.textContent = buisiness.address;
  membership.textContent = buisiness.membership;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  logo.setAttribute("src", buisiness.imageurl);
  logo.setAttribute("alt", `logo of ${buisiness.name}`);

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(logo);
  card.appendChild(website);
  card.appendChild(address);
  card.appendChild(membership);
  card.appendChild(document.createElement("hr"));

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.spotlight").appendChild(card);
}
