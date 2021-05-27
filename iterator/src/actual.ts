import { LinkedList } from "./linked-list/index";

const frameworks = new LinkedList<any>()

frameworks.add({name: "React.js", color: "blue"})
frameworks.add({name: "Vue.js", color: "green"})
frameworks.add({name: "Svelte.js", color: undefined})
frameworks.add({name: "Angular", color: "red"})
frameworks.set(3, "replaced")
frameworks.remove(2)
console.log(frameworks)

const iterator = frameworks.iterator()

while (iterator.hasNext()) {
  console.log(iterator.next())
}
