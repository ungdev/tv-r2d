<template>
    <div class="tv-countdown">
        <span class="tv-countdown__text">{{ countdown }}</span>
    </div>
</template>

<script>
import countdown from 'countdown';

const KEEPFOR  = 10 * 60 * 1000;
const BASETEXT = 'Tous au chapiteau pour la surprise';

// Enforce font
require('./assets/keepcalm.woff2');

const p2 = n => (n < 10) ? `0${n}` : n.toString();

export default {
    data() {
        return {
            countdown: ''
        }
    },

    mounted() {
        this.change();
    },

    destroyed() {
        clearTimeout(this.timeout);
    },

    methods: {
        change() {
            const now = new Date();

            let realTarget = (new Date(window.target)).getTime();
            realTarget += KEEPFOR;

            if (realTarget - now <= 0) {
                this.countdown = BASETEXT + ' maintenant !';
            } else {
                const timespan = countdown(now, realTarget);

                this.countdown = BASETEXT + ` dans ${p2(timespan.minutes)}:${p2(timespan.seconds)}`;
            }

            this.timeout = setTimeout(() => this.change(), 500);
        }
    }
}
</script>

<style>
@font-face {
  font-family: 'KeepCalm';
  src: url(/dist/assets/keepcalm.woff2);
}

.tv-countdown {
    color: #fff;
    height: 100%;
    font-family: KeepCalm;
    font-size: 112px;
    justify-content: center;
    display: flex;
    align-items: center;
}

.tv-countdown__text {
    text-align: center;
}
</style>