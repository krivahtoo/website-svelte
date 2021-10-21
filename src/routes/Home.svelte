<script>
  import { onMount } from 'svelte'
  import { pageName } from '../stores.js'

  onMount(() => pageName.set(null))
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <img alt="Noah Too" src="https://avatars.githubusercontent.com/u/41364823?v=4" class="mask mask-hexagon max-h-72 md:max-h-80 lg:max-h-96"> 
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
        <th>Language</th> 
        <th>Skill Level</th> 
      </tr>
    </thead> 
    <tbody>
      <tr class="hover">
        <th>1</th> 
        <td>JavaScript</td> 
        <td>
          <progress class="progress progress-primary" value="95" max="100"></progress>
        </td>
      </tr>
      <tr class="hover">
        <th>2</th> 
        <td>C/C++</td> 
        <td>
          <progress class="progress progress-primary" value="85" max="100"></progress>
        </td>
      </tr>
      <tr class="hover">
        <th>3</th> 
        <td>Rust</td> 
        <td>
          <progress class="progress progress-primary" value="70" max="100"></progress>
        </td>
      </tr>
      <tr class="hover">
        <th>4</th> 
        <td>Python</td> 
        <td>
          <progress class="progress progress-primary" value="80" max="100"></progress>
        </td>
      </tr>
    </tbody>
  </table>
</div>

