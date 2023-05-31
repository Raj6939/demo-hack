<template>
  <div id="app" class="d-flex justify-content-center flex-column">  
    <h1 class="text-center">Projects built using Hypersign</h1>  
    <div class="container">
  <div class="row d-flex justify-content-center">
    <b-card
      v-for="(data, index) in jsonData"
      :key="index"
      :title="data.name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem; padding:10px;"
      class="text-center col-md-3 mb-2"
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
</div>

  </div>
</template>

<script>
import indexFile from "../methods/index.json"
export default {
  name: 'App',
  data() {
    return {
      jsonData:[]
    };
  },
  created() {
    if (Object.keys(indexFile).length === 0) {
  console.log('JSON data is empty');
} else {
  console.log('JSON data is not empty');
  this.jsonData = indexFile
}    
  },
  methods: {
    readJSONFiles() {
      const jsonFiles = require.context('../methods', false, /\.json$/);

       jsonFiles.keys().forEach((fileName) => {
    if (fileName.endsWith('.json')) {
      const jsonData = jsonFiles(fileName);
      this.jsonData.push(jsonData);
    }
  });

  if (this.jsonData.length === 0) {
    throw new Error('No JSON files found.');
  }}
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
