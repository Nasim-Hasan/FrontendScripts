<template>
    <h2>Component</h2>
    <p>Right after this component is added to the DOM, the mounted() function is called and we can add code to that mounted() function. In this example, an alert popup box appears after this component is mounted.</p>
    <p><strong>Note:</strong> The reason that the alert is visible before the component is visible is because the alert is called before the browser gets to render the component to the screen.</p>
  </template>
  
  <script>
  export default {
    mounted() {
      alert("The component is mounted!");
    }
  }
  </script>  