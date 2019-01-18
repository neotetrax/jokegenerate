document.querySelector(".getJokes").addEventListener("click", getJokes);

function getJokes(e) {
  console.log("working");
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      let response = JSON.parse(this.responseText);
      let jokes = "";
      if (number === "") {
        alert('Please Add No of Jokes')
      } else {
        if (response.type === "success") {
          response.value.forEach(function (rese) {
            jokes += `<li>${rese.joke}</li>
        `
          })
        } else {
          output += 'Something Went Wrong';

        }
        const ul = document.querySelector(".jokes");
        ul.innerHTML = jokes;

      }
    }
  }


  xhr.send();
  e.preventDefault();
}