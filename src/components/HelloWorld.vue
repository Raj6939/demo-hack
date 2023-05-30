<template>
   <div class="text-center">
    <b-card
      :title="card.title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 mx-auto"
    >
      <b-card-text>
        {{ card.description }}
      </b-card-text>
      <b-button :href="card.projectLink" target="_blank" variant="primary" >View</b-button>  
      <footer>
        <small>
          <b-badge
          v-for="(tag, index) in card.tags" :key="index" :card="card"
                  pill variant="secondary" style="margin-left: 2px">{{tag}}</b-badge>
        </small>
      </footer>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['card']  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.text-center {
  text-align: center;
  display: inline-block;
  margin: 10px;
}

.mb-2 {
  margin-bottom: 2rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .text-center {
    text-align: left;
  }
}
</style>
