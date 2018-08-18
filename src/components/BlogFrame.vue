<template>
  <div class="container">
    <div class="profile">
      <div 
        :class="`photo ${author}`"
        @click="onPhotoClick">
      </div>
      <div class="name">{{author_name}}</div>
    </div>

    <el-menu
      background-color="#202020"
      text-color="#fff"
      :router="true" >
      <el-menu-item :index="author">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item :index="`${author}_archive`">
        <i class="el-icon-date"></i>
        <span slot="title">归档</span>
      </el-menu-item>
      <el-menu-item :index="`${author}_tag`">
        <i class="el-icon-document"></i>
        <span slot="title">标签</span>
      </el-menu-item>
      <el-menu-item :index="`${author}_about`">
        <i class="el-icon-star-on"></i>
        <span slot="title">关于</span>
      </el-menu-item>
      <el-menu-item :index="`${author}_link`">
        <i class="el-icon-share"></i>
        <span slot="title">友链</span>
      </el-menu-item>
      <el-menu-item :index="`${author}_search`">
        <i class="el-icon-search"></i>
        <span slot="title">搜索</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
const ACTIVE_MAP = {
  jinzw: 0,
  jinzw_archive: 1,
  jinzw_tag: 2,
  jinzw_about: 3,
  jinzw_link: 4,
  jinzw_search: 5,
  wensy: 0,
  wensy_archive: 1,
  wensy_tag: 2,
  wensy_about: 3,
  wensy_link: 4,
  wensy_search: 5,
}

export default {
  name: 'BlogFrame',

  data() {
    return {
      author: '',
      author_name: '',
      active: '',
    };
  },

  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "fetchAuthor"
  },

  mounted () {
    this.fetchAuthor()
  },

  methods: {
    fetchAuthor () {
      const hash = window.location.hash
      let author = hash === '#/' ? 'jinzw' : hash.substr(2, 5)
      this.author = author
      this.author_name = { wensy: '闻双云', jinzw: '金众威' }[author]
      this.active = hash === '#/' ? 'jinzw' : hash.replace('#/','').split('?')[0]

      const lis = document.getElementsByClassName('el-menu')[0].childNodes
      lis.forEach((li, index) => {
        if (index === ACTIVE_MAP[this.active]) {
          li.className = 'el-menu-item is-active'
          li.style.color = '#409EFF'
        } else {
          li.className = 'el-menu-item'
          li.style.color = '#fff'
        }
      })
    },

    onPhotoClick () {
      window.location.href = `${window.location.origin}/#/${this.author}`
    }
  }
};
</script>

<style scoped lang="less">
.container {
  .profile {
    margin: 40px 0 10px 0;

    .photo {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      background-color: red;
      background-size: 140px 140px;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .wensy {
      background-image: url(../assets/wensy.png);
    }

    .jinzw {
      background-image: url(../assets/jinzw.png);
    }

    .name {
      padding: 10px 0;
      font-size: 18px;
      color: #999;
      text-align: center;
    }
  }

  .el-menu {
    border-right: 0;

    .el-menu-item {
      font-size: 16px;
    }

    .el-menu-item [class^="el-icon-"] {
      font-size: 20px;
      margin-right: 20px;
    }
  }
}
</style>
