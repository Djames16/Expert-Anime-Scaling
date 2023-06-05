<script setup>
async function bum() {
console.log("yyyy")
const result = await fetch('http://api.anib.net:9001/httpapi?request=hotanime')
console.log(result);
}
</script>

<template>
    <h1 class="text-center">Home Page</h1>
    <p class="text-center">
      Welcome to anime expert scaling
    </p>
    <button @click="bum()">Fetch</button>

</template>
