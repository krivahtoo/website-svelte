<script>
  import { onMount } from 'svelte'
  import Router from 'svelte-spa-router'
  import Head from './components/Head.svelte'
  import NavBar from './components/NavBar.svelte'
  import Footer from './components/Footer.svelte'
  import routes from './routes'
  import { darkMode } from './stores.js'

  onMount(() => {
    const theme = localStorage.getItem('theme')
    darkMode.set(theme == 'dark')
    darkMode.subscribe(val => changeTheme(val))
  })

  // This is hacky, but hey it works ;-)
  const changeTheme = (dark = true) => {
    const val = dark ? 'dark' : 'light'
    document.body.setAttribute('data-theme', val)
    document.getElementsByTagName("html")[0].setAttribute('data-theme', val)
    localStorage.setItem('theme', val)
  }

</script>

<Head />

<main>
  <NavBar />
  <Router {routes} />
  <Footer />
</main>
