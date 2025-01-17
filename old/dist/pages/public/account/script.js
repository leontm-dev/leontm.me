const banner = document.getElementById("banner");
const pfp = document.getElementById("pfp");
const username = document.getElementById("username");
const description = document.getElementById("description");
const website = document.getElementById("website");
const locations = document.getElementById("location");
const age = document.getElementById("age");
const cookie = document.cookie.replace("LEONTM-AUTH=", "");
console.log(cookie);
window.onload = () => {
  /* fetch(`https://leontm.me/api/users/get?token=${cookie}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.responseInformation.processable) {
        const user = data.responseData;
        if (user.information.banner != "") {
          banner.innerHTML = `<img src='${user.information.bannerUrl}' alt='Banner' />`;
        }
        if (user.information.age != NaN) {
          age.innerHTML = user.information.age;
        } else {
          age.style.display = "none";
        }
        if (user.information.pfp != "") {
          pfp.innerHTML = `<img src='${user.information.profilePictureUrl}' alt='PFP' />`;
        }
        if (user.information.website != "") {
          website.innerHTML = `<a href='${user.information.website}'>${user.information.website}</a>`;
        } else {
          website.parentElement.style.display = "none";
        }
        username.innerHTML = user.information.username;
        description.innerHTML = user.information.description;
        if (user.information.location != "") {
          location.innerHTML = user.information.location;
        } else {
          location.parentElement.style.display = "none";
        }
        if (user.information.age != NaN) {
          age.innerHTML = user.information.age;
        } else {
          age.parentElement.style.display = "none";
        }
        loadColors(user.information.profileColor);
      }
    }); */
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "flex";
  }, 1000);
};
