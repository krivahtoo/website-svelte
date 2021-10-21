<script>
  import { pageName } from '../stores.js'
  $: title = $pageName ? `${$pageName} \u2014 Portfolio` : 'Portfolio'
  $: {
    document.title = title
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
