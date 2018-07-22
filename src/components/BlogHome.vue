<template>
  <div class="container">

    <div class="top-bar">
      <a-input-search class="search-input"/>
    </div>

    <a-row>
      <a-col :sm="16">
        <div class="new-article">
          <h2>最新文章</h2>
          <div
            class = "aiticle-item"
            v-for = "(item, index) in newArticle"
            :key = "index"
          >
            <a-icon type="file-markdown" />
            <a href="" class="article-title">{{item.title}}</a><br/>
            <div class="title-tags"><span>{{item.create_time}}</span></div>
          </div>
        </div>
      </a-col>

      <a-col :sm="8">
        <div class="about">
          <div class="photo"></div>
          <div class="name">{{author_name}}</div>
          <div class="description">{{description}}</div>
        </div>
      </a-col>
    </a-row>

    <div class="footer">© 2018 {{author_name}}</div>

  </div>
</template>

<script>
export default {
  name: 'BlogHome',

  data() {
    return {
      author: window.location.hash.substr(2, 5),
      searchText: '',
      newArticle: [
        {
          title: '最新文章',
          create_time: '2018-07-15',
        },
        {
          title: 'Ant Design Title 2',
          create_time: '2018-07-15',
        },
        {
          title: 'Ant Design Title 3',
          create_time: '2018-07-15',
        },
        {
          title: 'Ant Design Title 4',
          create_time: '2018-07-15',
        },
      ],
    };
  },

  computed: {
    // eslint-disable-next-line
    author_name: function () {
      return {
        wensy: '闻双云',
        jinzw: '金众威',
      }[this.author];
    },
    // eslint-disable-next-line
    description: function () {
      return {
        wensy: '前路漫漫，端本澄源',
        jinzw: '饮水思源，方能解惑',
      }[this.author];
    },
  },
};
</script>

<style scoped lang="less">
.container {
  position: relative;
  min-height: 100%;
  margin: 0 10%;

  .top-bar {
    border-bottom: 1px solid rgb(204, 203, 203);
    padding: 20px 0;
    text-align: right;

    .search-input {
      width: 200px;
    }
  }

  .new-article {
    margin: 20px 20px 0 0;

    .aiticle-item {
      margin-bottom: 10px;

      .article-title {
        color: #2c3e50;
        font-weight: 500;
        font-size: 15px;
        margin-left: 10px;
      }

      .article-title:hover {
        color: #fa4141;
      }

      .title-tags {
        font-size: 13px;
        color: rgb(82, 81, 81);
        margin-left: 24px;
      }
    }
  }

  .about {
    border: 1px solid rgb(204, 203, 203);
    border-radius: 4px;
    margin-top: 20px;
    text-align: center;

    .photo {
      width: 120px;
      height: 120px;
      background-color: aquamarine;
      margin: 10px auto;
      border-radius: 50%;
    }

    .name {
      font-weight: bold;
      font-size: 22px;
      margin-bottom: 5px;
    }

    .description {
      font-weight: bold;
      margin-bottom: 10px;
    }
  }

  .footer {
    position: absolute;
    bottom: 10px;
    text-align: center;
    width: 100%;
  }
}
</style>
