<template>
    <div class="tv-slideshow">
        <div
            class="tv-slideshow__image"
            v-for="(picture, i) of pictures"
            v-show="i === index">
            <img :src="'/dist/assets/' + picture">
        </div>
    </div>
</template>

<script>
const TIMEOUT = 8000;

// Load all pictures/fonts
const assets = require.context(
    './assets',
    true,
    /\.(jpg|png)$/
);

const pictureList = assets
    .keys()
    .filter(picture => picture.length === 7);

export default {
    data() {
        return {
            pictures: pictureList,
            index   : 0
        }
    },

    mounted() {
        this.timeout = setTimeout(() => {
            this.next();
        }, TIMEOUT);
    },

    destroyed() {
        clearTimeout(this.timeout);
    },

    methods: {
        next() {
            this.index = (this.index + 1) % (this.pictures.length - 1);

            this.timeout = setTimeout(() => {
                this.next();
            }, TIMEOUT);
        }
    }
};
</script>

<style>
.tv-slideshow {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tv-slideshow__image {
    flex: 1;
    text-align: center;
}

.tv-slideshow__image > img {
    max-width: 98%;
    max-height: 98%;
}
</style>