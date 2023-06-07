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
    <h1>Scale Page</h1>
    <p class="text-center">
      Welcome to anime expert scaling's Scale page where every anime character is ranked in terms of strength/abilites.
    </p>
</template>