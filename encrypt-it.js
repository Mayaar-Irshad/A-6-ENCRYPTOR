(function () {
   "use strict";
   window.addEventListener("load", init);

   /**
    * TODO: Write a function comment using JSDoc.
    */
   function init() {
      // Note: In this function, we usually want to set up our event handlers
      // for UI elements on the page.
      console.log("Window loaded!");
      const encryptBtn = document.getElementById("encrypt-it");
      encryptBtn.addEventListener("click", handleClick);
      const resetBtn = document.getElementById("reset");
      resetBtn.addEventListener("click", handleReset);
      const fontSize = document.querySelectorAll("input[name=text-size]");
      for (let i = 0; i < fontSize.length; i++) {
         fontSize[i].addEventListener("change", handleFontChange);
      }
   }

   /**
    * Handles the click event on the "Encrypt-It!" button.
    */

   /*
   *  Initializes the page by setting up event handlers for UI elements.
   */
   function handleClick() {
      // Retrieve the text from the textarea
      const textarea = document.querySelector("#input-text");
      const inputText = textarea.value;

      // Encrypt the text using the shift cipher
      const encryptedText = encrypt(inputText);

      // Output the encrypted text to the #result paragraph
      const result = document.querySelector("#result");
      result.textContent = encryptedText;
   }

   /**
    * Handles the click event on the "Reset" button.
    */
   function handleReset() {
      const textarea = document.querySelector("#input-text");
      textarea.value = "";
      const result = document.querySelector("#result");
      result.textContent = "";
   }

   /**
    * Handles the change event on the font size radio buttons.
    */
   function handleFontChange() {
      const textarea = document.querySelector("#input-text");
      const fontSize = this.value;
      textarea.style.fontSize = fontSize;
   }

   /**
    * Returns an encrypted version of the given text, where
    * each letter is shifted alphabetically ahead by 1 letter,
    * and 'z' is shifted to 'a' (creating an alphabetical cycle).
    * @param {string} text The input text to encrypt.
    * @return {string} The encrypted text.
    */
   function encrypt(inputText) {
      let encryptedText = "";
      for (let i = 0; i < inputText.length; i++) {
         let char = inputText.charAt(i);
         if (char >= 'a' && char <= 'z') {
            char = String.fromCharCode((char.charCodeAt(0) - 97 + 1) % 26 + 97);
         } else if (char >= 'A' && char <= 'Z') {
            char = String.fromCharCode((char.charCodeAt(0) - 65 + 1) % 26 + 65);
         }
         encryptedText += char;
      }
      return encryptedText;
   }

})();
