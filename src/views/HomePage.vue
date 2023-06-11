<script setup>
async function bum() {
fetch('https://anidb.net/anime')
      .then(response => response.json())
      .then(animes => console.log(animes))}

async function dum() {
fetch('https://anidb.net/anime')
      .then(response => response.json())
      .then(characters => console.log(characters))}

</script>

<template>
    <h1 class="text-center">Home Page</h1>
    <p class="text-center">
      Welcome to anime expert scaling
    </p>
<img src="animescaling.png" id="Photo" alt="This is the logo of the anime expert scaling website." width="450">
</template>
