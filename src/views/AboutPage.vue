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
    <h1>About Page</h1>
    <p class="text-center">
      Learn more about us and origin!
    </p>
    <img src="everyanimecharacter.jpg" id="Photo1" alt="This is a picture of some of the most popular anime characters there are." width="550">
    <p class="text-center">
      When asked to make a project in our Front End Development class we instantly thought of making an anime scaling website so that experts can review submissions of anime debaters and use facts to determine which anime character is better. 
    </p>
</template>