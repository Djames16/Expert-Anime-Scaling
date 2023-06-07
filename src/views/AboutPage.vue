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
    <h1>About Page</h1>
    <p class="text-center">
      Learn more about us and origin!
    </p>
</template>