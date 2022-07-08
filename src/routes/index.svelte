<svelte:head>
	<title>Galería</title>

	<style>
		@import url('https://fonts.googleapis.com/css2?family=Marmelad&family=Pacifico&family=Special+Elite&family=Tangerine:wght@400;700&family=Ultra&display=swap');
		h1 {
			font-family: 'Special Elite', cursive;
		}

		p {
			font-family: 'Marmelad', sans-serif;
			color: purple;
		}

		body {
			background-color: #e5671b
		}
	</style>
</svelte:head>

<h2>Mis Dibujos</h2>

<div class="row">
  <div class="column">
    <img src="https://storage.googleapis.com/patraldo/antoine-dibujos/antoine-dibujos-100x100/PXL_20220706_201110797.webp" alt="colorful hand-drawn sketch">  

  </div>
  <div class="column">
    <img src="https://storage.googleapis.com/patraldo/antoine-dibujos/PXL_20220706_201129124.webp" alt="colorful hand-drawn sketch of flowers">
  </div>
  <div class="column">
    <img src="https://storage.googleapis.com/patraldo/antoine-dibujos/PXL_20220706_201259627.webp" alt="hand-drawn colorful flowers">
  </div>
  <div class="column">
    <img src="https://storage.googleapis.com/patraldo/antoine-dibujos/plantaspatraldologo004.webp" alt="logo of Plantas Patraldo with flowers and hand drawn letters">>
  </div>
</div>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create two equal columns that sits next to each other */
.column {
  flex: 50%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}
</style>



