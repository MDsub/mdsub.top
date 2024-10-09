<script setup>
import { useRouter } from 'vitepress'
import { onMounted } from 'vue'
import { useData } from 'vitepress'

let router = useRouter()
const { params } = useData()
console.log(params.value.pkg)

onMounted(() => {
  router.go(`/collection/${params.value.pkg}`)
})
</script>