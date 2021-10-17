<script>
	import Router from 'svelte-spa-router';
    import NavBar from './components/NavBar.svelte'
    import Footer from './components/Footer.svelte'
	import routes from './routes';
</script>

<main>
  <NavBar />
  <Router {routes} />
  <Footer />
</main>
