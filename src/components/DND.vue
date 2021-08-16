<template>
  <div>
    <Container :orientation="horizontal">
      <Draggable v-for="item in items" :key="item.id">
        <div>
          {{item.data}}
        </div>
      </Draggable>
    </Container>
  </div>
</template>
<script>
import { Container, Draggable } from 'vue-smooth-dnd'
export default {
  name: "Simple",
  components: { Container, Draggable },
  data(){
    return {
     items: this.generateItems (10, i=>({id: i, data: "Draggable " + i }))
    }
  },
  methods: {
    onDrop(dropResult){
      this.applyDrag(this.items, dropResult)
      console.log('dropResult,,,,,,', dropResult);
    },
    applyDrag(arr, dragResult){
      const { removedIndex, addedIndex, payload } = dragResult
      if (removedIndex === null && addedIndex === null) return arr

      const result = [...arr]
      let itemToAdd = payload

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
      }

      return result
    },
    generateItems(count, creator){
      const result = []
      for (let i = 0; i < count; i++) {
        result.push(creator(i))
      }
      return result
    }
  }
}
</script>

<style scoped>

</style>