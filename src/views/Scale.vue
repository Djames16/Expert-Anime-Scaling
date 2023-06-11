<script setup>
async function bum() {
fetch(' https://anidb.net/anime')
      .then(response => response.json())
      .then(animes => console.log(animes))}

async function dum() {
fetch(' https://anidb.net/anime')
      .then(response => response.json())
      .then(characters => console.log(characters))}
</script>

<template>
    <h1>Scale Page</h1>
    <p class="text-center">
      Welcome to anime expert scaling's Scale page where the top 5 anime characters is ranked in terms of strength/abilites.
    </p>
    <h1 class="text-center">1. Saitama (One Punch Man)</h1>
    <img src="saitama1.avif" id="Photo" alt="This is Saitama" width="450">
    <p>Saitama is ranked the best or number 1 because while there's perhaps an argument to be made that other anime characters would also thrive if placed in the One Punch Man universe. Ultimately though Saitama's power is endless and if he hits you with a serious punch it's over.</p>
    <h1 class="text-center">2. Son Goku (Dragon Ball)</h1>
    <img src="goku2.avif" id="Photo" alt="This Son Goku" width="450">
    <p>The Super Saiyan Son Goku is ranked 2 because he has proven to be Earth's savior on countless occasions, managing to overcome just about every obstacle he's ever faced. Thanks to his Saiyan blood, defeat only makes him stronger and, in Ultra Instinct, he now has access to the Power of the Gods. As he begins to master that power, he's only going to get stronger.</p>
    <h1 class="text-center">3. Giorno Giovanna (JoJo's Bizarre Adventure)</h1>
    <img src="gio3.avif" id="Photo" alt="This is Giorno Giovanna" width="450">
    <p>Gio is ranked 3 because Gio's stand GER is able to revert actions and can be triggered in a setting in which time no longer exists. It's also able to operate independently of Giorno, meaning that even if somebody were able to deal a fatal blow in battle to Gio, his stand would instantly bring him back to life. As a result, he's pretty much immortal and has the kind of firepower needed to really make that count.</p>
    <h1 class="text-center">4. Anos Voldigoad (The Misfit of Demon King Academy)</h1>
    <img src="anos4.avif" id="Photo" alt="This is Anos Voldigoad" width="450">
    <p>Anos is ranked 4 being he is ridiculously fast and very very very strong, Anos also has access to a wide array of Magic, including the ability to destroy the indestructible just by looking at it. He's also able to wield the magic sword of the founder, Venuzdonoa, which was created using the body of the original God of Destruction. Much like Anos' magical eyes, the blade can destroy just about anything.</p>
    <h1 class="text-center">5.Kaido (One Piece)</h1>
    <img src="kaido5.avif" id="Photo" alt="This is Kaido" width="450">
    <p>Kaido is ranked 5 because of his ability to transform into a giant dragon. He's also able to use all three forms of Haki to a high level and it took many years to defeat him, not to mention a little bit of luck.</p>
    <br>
    <h1>If you didn't agree with these rankings please feel free to submit your rankings to us which will be evaluated.</h1>
        <form action="https://us-central1-steam-center-app-dev.cloudfunctions.net/formToEmail"
        method="post">
    <label>Enter your username here:</label>
    <br>
    <input placeholder="Daeon James" name="full_name">
    <br>
    <label>Enter your email here:</label>
    <br>
    <input placeholder="Djames@brooklynsteamcenter.org" name="email">
    <br>
    <label>Comments:</label>
    <br>
    <textarea placeholder="Submit here" name="Comments"></textarea>
    <br>
    <input type="Submit">
    <br>
    <input type="Reset">
    <input name="send-to" value="djames@brooklynsteamcenter.org" hidden>
</form>
</template>