document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.querySelector("#username");
  const saveButton = document.querySelector("#save-btn");
  const clearButton = document.querySelector("#clear-btn");
  const displayName = document.querySelector("#display-name");

  function updateDisplay(name) {
    displayName.textContent = name ? `Saved Name: ${name}` : "";
  }

  const storedName = localStorage.getItem("username");
  if (storedName) {
    updateDisplay(storedName);
  }

  saveButton.addEventListener("click", function () {
    const name = usernameInput.value.trim();
    if (name) {
      localStorage.setItem("username", name);
      updateDisplay(name);
    }
  });

  clearButton.addEventListener("click", function () {
    localStorage.removeItem("username");
    updateDisplay("");
    usernameInput.value = "";
  });
});
