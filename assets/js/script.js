const button1 = document.getElementById("test-button");

const paragraph = document.querySelector("p");

button1.addEventListener("click", () => {
  paragraph.textContent = "minuscule";
  paragraph.classList.add("red-paragraph");
});

document.getElementById("green-button").addEventListener("click", () => {
  //   document.querySelector(".secret").classList.remove("hide");

  document.querySelector(".secret").classList.toggle("hide");
});

// const scrollFunc = () => {
//   console.log("je scroll");
// };

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  // empeche le refresh non voulu de la page
  //   console.log("submit");

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log({
    firstname,
    lastname,
    email,
    message,
  });

  const response = await axios.post(
    "https://site--back-formulaire--fhx5w78hhgzd.code.run/form",
    {
      firstname,
      lastname,
      email,
      message,
    }
  );

  console.log(response);
});
