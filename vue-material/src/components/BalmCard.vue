<template>
  <div>
    <ui-card class="demo-card demo-card--photo">
  <ui-card-content class="demo-card__primary-action">
    <ui-card-media square class="demo-card__media">
      <ui-card-media-content class="demo-card__media-content--with-title">
        <div :class="[$tt('subtitle2'), 'demo-card__media-title']">
          Vacation Photos
        </div>
      </ui-card-media-content>
    </ui-card-media>
  </ui-card-content>
  <ui-card-actions>
    <ui-card-icons>
      <ui-icon-button :toggle="icon1"></ui-icon-button>
      <ui-icon-button :toggle="icon2"></ui-icon-button>
      <ui-icon-button icon="share"></ui-icon-button>
    </ui-card-icons>
  </ui-card-actions>
</ui-card>
  </div>
</template>

<script>
export default {
    name: 'BalmCard',
    data() {
    return {
      icon1: {
        on: 'favorite',
        off: 'favorite_border'
      },
      icon2: {
        on: 'bookmark',
        off: 'bookmark_border'
      }
    };
  }
}
</script>

<style>
.demo-card--photo {
  width: 200px;
}

.demo-card__media {
  background-image: url('https://material.balmjs.com/img/1-1.dfff3193.jpg');
}

.demo-card__media-content--with-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.demo-card__media-title {
  padding: 8px 16px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  color: white;
}
</style>