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

<template>
    <h1>Debate Page</h1>
    <p class="text-center">
      Welcome to the anime expert scaling's daily updating anime vs battles where you the reader can choose your side.
    </p>
</template>