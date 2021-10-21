<script>
  export let params = {}

  let id
  $: {
    if (params && params.id) {
      id = parseInt(params.id, 10)
    }
  }
</script>

{#if id}
  <h1>Project {id}</h1>
{:else}
  <h1>Nothing to display</h1>
{/if}

