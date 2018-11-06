<template>
    <div>
        <h2>Create new campaign</h2>
        <form @submit.prevent="">
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Description</label>
                <textarea class="form-control"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Stores</label>
                <multiselect 
                v-model="stores"  
                placeholder="Search Store" 
                label="name" 
                track-by="name" 
                :options="optionsForStores" 
                :multiple="true"
                @tag="addTagForStores">
                </multiselect>
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Products</label>
                <multiselect 
                v-model="products"  
                placeholder="Search Product" 
                label="name" 
                track-by="name" 
                :options="optionsForProducts" 
                :multiple="true"
                @tag="addTagForProducts">
                </multiselect>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
         <!-- <pre class="language-json"><code>{{ value  }}</code></pre>-->

    </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: "CampaignItem",
  components: {
    Multiselect
  },
  data() {
    return {
      stores: [],
      products: []
    };
  },
  created() {
    this.$store.dispatch("retrieveStores");
    this.$store.dispatch("retrieveProducts");
    //this.options = this.$store.getters.options
  },
  computed: {
      optionsForStores(){
          return this.$store.getters.stores
      },
      optionsForProducts(){
          return this.$store.getters.products
      }
  },
  methods: {
    addTagForStores(newTag) {
      const tag = {
        title: newTag,
        desc: 'lala'
      };
      this.optionsForStores.push(tag)
    },
    addTagForProducts(newTag) {
      const tag = {
        title: newTag,
        desc: 'lala'
      };
      this.optionsForProducts.push(tag)
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
