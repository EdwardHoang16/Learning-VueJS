<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'

export default {
  name: 'Home',
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: 'all'
    }
  },
  computed: {
    filteredProjects() {
      let filteredProjects;
      if (this.current === 'completed') {
        filteredProjects = this.projects.filter(project => {
          return project.complete === true
        })
      } else if (this.current === 'ongoing') {
        filteredProjects = this.projects.filter(project => {
          return project.complete === false
        })
      } else {
        filteredProjects = this.projects
      }
      return filteredProjects
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter(project => {
        return project.id !== id
      })
    },
    handleComplete(id) {
      let project = this.projects.find(project => {
        return project.id === id
      })
      project.complete = !project.complete
    }
  }
}
</script>
