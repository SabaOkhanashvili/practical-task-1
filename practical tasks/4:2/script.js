function capitalize() {
   
    const input = document.getElementById("input").value;
  

    const words = input.split(" ");
  
    
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedSentence = capitalizedWords.join(" ");
  
   
    document.getElementById("output").textContent = capitalizedSentence;
  }
  