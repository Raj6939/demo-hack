<template>
  <div id="app" class="text-center">    
      <b-card
        v-for="(data, index) in jsonData"
        :key="index"
        :title="data.property"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; padding:10px;"
        class="mb-2"
      >
        <b-card-text>
          {{ data.description }}
        </b-card-text>
        <b-button :href="data.projectLink" target="_blank" variant="primary">View</b-button>
        <footer>
          <small>
            <b-badge
              v-for="(tag, index) in data.tags"
              :key="index"
              :data="data"
              pill
              variant="secondary"
              style="margin-left: 2px"
            >{{ tag }}</b-badge>
          </small>
        </footer>
      </b-card>    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      jsonData: []
    };
  },
  created() {
    this.readJSONFiles();
  },
  methods: {
    readJSONFiles() {
      const jsonFiles = require.context('../allProjects', false, /\.json$/);

      jsonFiles.keys().forEach((fileName) => {
        const jsonData = jsonFiles(fileName);
        this.jsonData.push(jsonData);
      });
    }
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.text-center {
  text-align: center;
  display: inline-block;
  margin: 10px;
}

</style>
