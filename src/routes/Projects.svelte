<script>
  import { onMount } from 'svelte'

  let projects = []

  onMount(() => {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => projects = data.projects)
  })
</script>

{#if projects}
  <div class="flex flex-wrap justify-center w-full px-5 py-2 bg-base-200" >
    {#each projects as project}
      <div class="card card-bordered card-compact lg:card-normal m-1 w-80">
        <figure>
          <img src={ project.image } alt="Project preview" height="250" width="400">
        </figure> 
        <div class="card-body">
          <h2 class="card-title">{ project.title }</h2> 
          <p>{ project.description }</p>
          <div>
            {#each project.langs as lang}
              <span class="badge badge-outline ml-1">{ lang }</span>
            {/each}
          </div>
          <div class="card-actions">
            <a class="btn btn-primary" href={ project.link || project.github } >Open</a> 
            <a class="btn btn-ghost" href="#/project/{project.id}">More info</a>
          </div>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <div class="hero min-h-screen bg-base-200">
    <div class="text-center hero-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          No projects here yet
        </h1> 
      </div>
    </div>
  </div>
{/if}
