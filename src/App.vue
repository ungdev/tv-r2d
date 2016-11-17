<template>
    <div class="tv-app">
        <Slideshow v-if="!countdownEnabled"></Slideshow>
        <Countdown v-if="countdownEnabled"></Countdown>
    </div>
</template>

<script>
import Slideshow from './Slideshow.vue';
import Countdown from './Countdown.vue';

const KEEPCOUNTDOWNFOR = 5 * 60 * 1000;

export default {
    name: 'app',

    components: {
        Slideshow,
        Countdown
    },

    data() {
        return {
            countdownEnabled: false
        }
    },

    mounted() {
        this.checkCountdown();
    },

    destroyed() {
        clearTimeout(this.timeout);
    },

    methods: {
        checkCountdown() {
            const now = new Date();

            // Must be after 23:50 and before 00:05
            if (window.target - now <= 0 && window.target - now >= -1 * KEEPCOUNTDOWNFOR) {
                this.countdownEnabled = true;
            } else {
                this.countdownEnabled = false;
            }

            this.timeout = setTimeout(() => this.checkCountdown(), 500);
        }
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