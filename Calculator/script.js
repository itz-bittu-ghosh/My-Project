      let currentInput = "";

      function appendNumber(number) {
        currentInput += number;
        document.querySelector(".disPlay").innerHTML = currentInput;
      }

      function eValue() {
        try {
          let result = eval(currentInput);
          document.querySelector(".disPlay").innerHTML = result;
          currentInput = result.toString();
        } catch (error) {
          document.querySelector(".disPlay").innerHTML = "Error";
          currentInput = "";
        }
      }

      function clearDisplay() {
        currentInput = "";
        document.querySelector(".disPlay").innerHTML = "";
      }