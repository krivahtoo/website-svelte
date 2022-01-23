<script>
  import { onMount } from 'svelte'
  import { pageName } from '../stores.js'

  let skills = []

  onMount(() => {
    pageName.set(null)
    fetch('/data/languages.json')
      .then(res => res.json())
      .then(data => {
        skills = data.skills
      })
  })
</script>

<div class="md:hidden alert alert-info mb-2">
  <div class="flex-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg> 
    <span>My website looks better on desktop, your should check it sometimes 😉</span>
  </div>
</div>

<div class="hero min-h-screen bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <img alt="Noah Too" src="/images/avatar.png" class="mask mask-hexagon max-h-72 md:max-h-80 lg:max-h-96"> 
    <div>
      <h1 class="mb-5 text-5xl font-bold" data-theme="light">
        Noah Cheptoo
      </h1> 
      <p class="mb-5">
        Experienced software developer with skills in various programming languages. I enjoy working with Node.js, Rust, C++, and web frameworks like Vue and Svelte.<br/>
        If you need help with your software development project, I'm the right person for you!
      </p> 
      <a href="mailto:hello@krivah.xyz" class="btn btn-primary">Contact</a>
    </div>
  </div>
</div>
<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Skill</th> 
        <th>Skill Level</th> 
      </tr>
    </thead> 
    <tbody>
      {#each skills as skill,i}
        <tr class="hover">
          <th>{ i+1 }</th> 
          <td>{ skill.name }</td> 
          <td>
            <progress class="progress progress-primary" value={ skill.level } max="100"></progress>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

