<template>
  <p>Results: {{ results }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['results'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.results < 250) {
            this.rank = 'Ninja Fingers'
        } else if (this.results < 400) {
            this.rank = 'Rapid Reflexes'
        } else {
            this.rank = 'Snail Pace...'
        }
    }
}
</script>

<style>
    .rank {
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>