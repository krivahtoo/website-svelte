import Home from './routes/Home.svelte';
import About from './routes/About.svelte';
import Project from './routes/Project.svelte';
import Projects from './routes/Projects.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
  '/': Home,
  '/about': About,
  '/projects': Projects,
  '/project/:id': Project,
  // The catch-all route must always be last
  '*': NotFound
}
