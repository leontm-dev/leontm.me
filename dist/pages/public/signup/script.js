window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("form").style.display = "flex";
  }, 1000);
};
const error = document.getElementById("error");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("2ndpassword");
const button = document.getElementById("signup");
const rememberMe = document.getElementById("rememberMe");

button.addEventListener("click", async (ev) => {
  ev.preventDefault();

  if (password.value === "") return (error.innerHTML = "Password is required");
  if (username.value === "") return (error.innerHTML = "Username is required");
  if (password.value !== confirmPassword.value) {
    error.innerHTML = "Passwords don't match";
    return;
  }

  fetch(`https://leontm.me/api/auth/usernames?username=${username.value}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.responseInformation.processable) {
        if (data.responseInformation.available) {
          fetch("https://leontm.me/api/auth/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username.value,
              password: password.value,
              rememberMe: rememberMe.checked,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.responseInformation.processable) {
                window.location.href = "https://leontm.me/account";
              } else {
                error.innerHTML = "Internal server error, try again later";
              }
            })
            .catch((err) => {
              console.log(err);
              error.innerHTML = "Internal server error, try again later";
            });
        } else {
          error.innerHTML = "Username is already taken";
          return;
        }
      } else {
        error.innerHTML = "Internal server error, try again later";
        username.value = "";
      }
    })
    .catch((err) => {
      console.log(err);
      error.innerHTML = "Internal server error, try again later";
    });
});
