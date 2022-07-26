<template>
  <div class="ads-area" v-if="shouldShowAd()">
    <p class="ads">ADS</p>
    <div>
      <Adsense data-ad-client="ca-pub-2041303981654233" data-ad-slot="XXXXXXXXXX"></Adsense>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
    // note: 記事ページにのみ広告を表示する
    shouldShowAd() {
        return this.$frontmatter.layout === "Post";
    }
}};
</script>