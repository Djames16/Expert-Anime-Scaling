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
    <h1>Debate Page</h1>
    <p class="text-center">
      Welcome to the anime expert scaling's daily updating most popular anime vs battle of the day where you the reader can choose your side, and the scores of the polls will be released with the last debate.
    </p>
    <img src="gvss.jpg" id="Photo" alt="This is a picture of Saitama vs Son Goku" width="550">
    <h1>Submit your answer and your explanation why you chose that character.</h1>
        <form action="https://us-central1-steam-center-app-dev.cloudfunctions.net/formToEmail"
        method="post">
    <label>Enter your username here:</label>
    <br>
    <v-text-field placeholder="Daeon James" name="full_name"></v-text-field>
    <br>
    <label>Enter your email here:</label>
    <br>
    <v-text-field placeholder="Djames@brooklynsteamcenter.org" name="email"></v-text-field>
    <br>
    <label>Comments:</label>
    <br>
    <textarea placeholder="Submit your answer and explanation here" name="Comments"></textarea>
    <br>
    <input type="Submit">
    <br>
    <input type="Reset">
    <input name="send-to" value="djames@brooklynsteamcenter.org" hidden>
    </form>
</template>