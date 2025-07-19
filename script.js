const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();
  const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => dropdown.value);
  console.log(inputValues);
}


sortButton.addEventListener("click", sortInputArray);

const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();
};
sortButton.addEventListener("click", sortInputArray);


const sortInputArray = (event) => {
  event.preventDefault();

  const dropdowns = document.getElementsByClassName("values-dropdown");
  const inputValues = [];

  for (let i = 0; i < dropdowns.length; i++) {
    inputValues.push(dropdowns[i].value);
  }

  console.log(inputValues);
};

const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();
};

sortButton.addEventListener("click", sortInputArray);


const sortInputArray = (event) => {
  event.preventDefault();

  const dropdowns = document.getElementsByClassName("values-dropdown");
  const inputValues = [];

  for (let i = 0; i < dropdowns.length; i++) {
    inputValues.push(dropdowns[i].value);
  }
};

const sortInputArray = (event) => {
  event.preventDefault();

  const dropdowns = document.getElementsByClassName("values-dropdown");
  const inputValues = [];

  for (let i = 0; i < dropdowns.length; i++) {
    inputValues.push(dropdowns[i].value);
  }

  console.log(inputValues);
};
