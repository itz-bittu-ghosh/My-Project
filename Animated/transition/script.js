      const btn = document.querySelector("#btn");
      const container = document.querySelector("#boxContainer");

      btn.addEventListener("click", () => {
        container.classList.toggle("swapped");
      });