<script setup>
async function bum() {
fetch('https://animechan.vercel.app/api/available/anime')
      .then(response => response.json())
      .then(animes => console.log(animes))}

async function dum() {
fetch('https://animechan.vercel.app/api/available/character')
      .then(response => response.json())
      .then(characters => console.log(characters))}
</script>

</script>

<template>
    <h1 class="text-center">Home Page</h1>
    <p class="text-center">
      Welcome to anime expert scaling
    </p>
    <button @click="bum()">Fetch</button>

</template>
