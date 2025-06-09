function myDisplay1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Initializing Hacking...");
    }, 2000);
  });
}
function myDisplay2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Reading your Files...");
    }, 6000);
  });
}
function myDisplay3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Password files Detected...");
    }, 10000);
  });
}
function myDisplay4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sending all passswords personal files to server...");
    }, 14000);
  });
}
function myDisplay5() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cleaning Up...");
    }, 18000);
  });
}

(async function mydis() {
  const result = await myDisplay1();
  document.querySelector(".damo1").textContent = result;
})();

(async function mydis() {
  const result = await myDisplay2();
  document.querySelector(".damo2").textContent = result;
})();

(async function mydis() {
  const result = await myDisplay3();
  document.querySelector(".damo3").textContent = result;
})();

(async function mydis() {
  const result = await myDisplay4();
  document.querySelector(".damo4").textContent = result;
})();

(async function mydis() {
  const result = await myDisplay5();
  document.querySelector(".damo5").textContent = result;
})();

// await alert ("You got prank...")
