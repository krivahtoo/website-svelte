<script>
  import { onMount } from 'svelte'
  import { pageName } from '../stores.js'

  onMount(() => pageName.set('About'))
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <img alt="Noah Too" src="/images/avatar.png" class="mask mask-hexagon max-w-sm"> 
    <div>
      <h1 class="mb-5 text-5xl font-bold">
        Noah Cheptoo
      </h1> 
      <p class="mb-5">
        Experienced software developer with skills in various programming languages. I enjoy working with Node.js, Rust, C++, and web frameworks like Vue and Svelte.<br/>
        If you need help with your software development project, I'm the right person for you!
      </p> 
      <button class="btn btn-primary">Contact</button>
    </div>
  </div>
</div>
