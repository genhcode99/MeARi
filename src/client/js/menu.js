const userProfile = document.querySelector(".fa-user-circle");
const join = document.querySelector(".join");
const course = document.querySelector(".menu-course");

const handleResize = () => {
  const width = window.innerWidth
  if (width < 500) {
    userProfile.innerHTML = "";
    join.classList.add("off");
    course.classList.add("off");
  } else {
    userProfile.innerHTML = " User Name";
    join.classList.remove("off");
    course.classList.remove("off");
  }
};

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);
