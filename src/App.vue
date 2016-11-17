<template>
    <div class="tv-app">
        <Slideshow></Slideshow>
    </div>
</template>

<script>
import Slideshow from './Slideshow.vue';

export default {
    name: 'app',

    components: {
        Slideshow
    }
}
</script>

<style>
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.tv-app {
    background-image: url(/dist/assets/background.png);
    background-size: cover;
    height: 100%;
}
</style>