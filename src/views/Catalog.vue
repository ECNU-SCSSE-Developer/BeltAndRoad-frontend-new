<template>
    <div class="container">
        <div>
            <CatalogCard name="政策解读" @click.native="onCatalog(0)"/>
            <CatalogCard name="基础设施建设" @click.native="onCatalog(1)"/>
        </div>
        <div>
            <CatalogCard name="企业交流" @click.native="onCatalog(2)"/>
            <CatalogCard name="文化传播" @click.native="onCatalog(3)"/>
        </div>
    </div>
</template>

<script>
  import CatalogCard from '@/components/CatalogCard'

  export default {
    components: {
      CatalogCard
    },
    data() {
      return {}
    },
    methods: {
      onCatalog(index) {
        const catalogs = ['policy', 'infrastructure', 'communication', 'education'];
        this.$router.push({name: catalogs[index]});
      }
    }
  }
</script>

<style lang="less" scoped>
    .container {
        &:extend(.flex);
    }

    .row {
        &:extend(.flex);
        flex-direction: row;
    }


</style>
