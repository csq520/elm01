<template>
    <div class="header">
      <div class="wrapper">
        <div class="avatar">
          <img width="64" height="64" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
        </div>
        <div class="content"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="stylus" scoped>
  .header
    position: relative;
    overflow: hidden;
    color: #f3f5f7;
    background: rgba(7, 17, 27, 0.5);
</style>
