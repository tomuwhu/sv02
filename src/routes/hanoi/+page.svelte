<script>
    var n = 3, i = 1, j = 2
    $: h = (n, a, b) => n == 1 ? `${a}:${b}` : [h(n - 1, a, 6 - a - b),`${a}:${b}`,h(n - 1, 6 - a - b, b)].join(",")
    $: mt = h(n, i, j).split(",").map(t => [t[0], t[2]])
    var c = 0, s = 1
    setInterval(() => c = 2 ** n - 2 > c ? c + s : (s= 0, c), 1000)
</script>
<h1>
<input type="range" min={0} max={mt.length - 1} bind:value={c}>
<br>
{#if s}
<button on:click={() => s = 0}>Stop</button>
{:else}
<button on:click={() => {
    s = 1
    c = c == mt.length - 1 ? 0 : c
}}>Start</button>
{/if}
<hr>
{c + 1}/{mt.length}. lépés: {mt[c][0]} => {mt[c][1]}
</h1>
