<template>
  <div class="container">
    <section>
      <h1 class="text-4xl font-bold text-center">
        1. Image Rotator
      </h1>
    </section>
    <hr>
    <section>
      <h1 class="text-4xl font-bold text-center">
        2. Tabbed Content
      </h1>

      <div class="row">
        <div class="col">
          <Tabs :tabs="['Tab1', 'Tab2', 'Tab3']" :selected="selected" @setTab="selected= $event ">
            <Tab :isselected="selected === 'Tab1'">
              Tab1
            </Tab>

            <Tab :isselected="selected === 'Tab2'">
              Tab2
            </Tab>
            <Tab :isselected="selected === 'Tab3'">
              Tab3
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
    <hr>
    <section class="grid gap-10">
      <h1 class="text-4xl font-bold text-center">
        3. Text Search
      </h1>
      <form class="flex">
        <input ref="valueInput" type="text" class="focus:outline-none  col rounded-md flex-grow border border-gray-400 px-4 py-2 mr-3">
        <button class="focus:outline-none p-3 rounded-lg bg-gray-200 text-2xl flex-grow-0 shadow-xl hover:bg-gray-100" @click.prevent="searchText($event)">
          Search
        </button>
      </form>

      <span class="result">Found <b>{{ wordFound }}</b> occurances of the word  <b> <q>{{ inputText }}</q></b> in the below text.</span>
      <hr>
      <p>
        {{ text }}
      </p>
    </section>
  </div>
</template>

<script>
import Tab from '~/components/tab/Tab'
import Tabs from '~/components/tab/Tabs'
export default {
  components: {
    Tab,
    Tabs
  },
  layout: 'menu',
  data () {
    return {
      selected: 'Tab1',
      text: 'Turtles are reptiles of the order Chelonii[2] or Testudines characterised by a special bony or cartilaginous shell developed from their ribs and acting as a shield.[3] "Turtle" may either refer to the order as a whole, or to particular turtles which make up a form taxon that is not monophyletic. The order Chelonii or Testudines includes both extant (living) and extinct species. The earliest known turtles date from 220 million years ago,[4] making turtles one of the oldest reptile groups and a more ancient group than lizards, snakes or crocodiles. Of the many species alive today, some are highly endangered.[5] Like all other extant reptiles, turtles are ectotherms their internal temperature varies according to the ambient environment, commonly called cold-blooded. However, because of their high metabolic rate, leatherback sea turtles have a body temperature that is noticeably higher than that of the surrounding water. Like other amniotes (reptiles, dinosaurs, birds, and mammals), they breathe air and do not lay eggs underwater, although many species live in or around water. The largest turtles are aquatic.',
      inputText: '',
      wordFound: 0
    }
  },
  methods: {
    searchText () {
      const val = this.$refs.valueInput.value
      this.inputText = val
      const text = this.text.split(' ').join('')
      const textRegex = new RegExp(val, 'gi')
      const result = text.match(textRegex)
      if (val.length === 0) {
        this.wordFound = 0
        return
      }
      if (result === null) {
        this.wordFound = 0
        this.$refs.valueInput.value = ''
        return
      }
      this.wordFound = result.length
      this.$refs.valueInput.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
section{
@apply mb-10;
}
hr{
  @apply mb-10;
}

</style>
