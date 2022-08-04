<script>
  import "../app.css";
</script>

<nav>
  <a href="/">Galer&#xed;a</a>
  <a href="/about">Yo</a>
  <a href="/contact">Contacto</a>
</nav>
<slot />

<style>
  nav {
    max-width: 1200px;
    display: flex;
    align-items: center;
    margin: auto;
    list-style-type: none;
    margin: 20;
    padding: 20;
  }
</style>
