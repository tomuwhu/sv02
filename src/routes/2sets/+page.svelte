<script>
  var c = { x: 0, id: "" };
  var size = 7,
    render = true,
    h1 = 0,
    h2 = 0;
  $: n = Math.trunc(Math.sqrt(size) + 0.99999);
  const i = (x, y, n) => 1 + n * y + x;
  function rerender(e) {
    render = false;
    h1 = 0;
    h2 = 0;
    setTimeout(() => (render = true));
  }
</script>

<h1>Two Sets Problem</h1>
<code
  >Your task is to divide the numbers 1,2,…,n into two sets of equal sum.</code
>
<div>
  n = {size} ({n}x{n}{n ** 2 == size ? `` : `, ${n ** 2 - size} unnecessary`}),
  sum(1..{size}) = {(size * (size + 1)) / 2}
  {@html ((size * (size + 1)) / 2) % 2
    ? `is odd => <i>there is no solution</i>`
    : `is even => <b>there is a solution</b>`}
</div>

<br />
<input type="range" bind:value={size} min={3} max={100} on:focus={rerender} />
{#if render}
  <table>
    <td
      class="s"
      id="h1"
      on:dragover={(e) => e.preventDefault()}
      on:drop={(e) => {
        h1 += c.x;
        document.getElementById(c.id).classList.add("h");
      }}>{h1}</td
    >
    <td class="c2" />
    <td class="cont">
      {#if h1 + h2 == (size * (size + 1)) / 2}
        <code>
          {#if h1 == h2}
            Solved
          {:else}
            Unsolved
          {/if}
        </code>
      {:else}
        <table>
          {#each Array(n) as _, y}<tr
              >{#each Array(n) as _, x}
                <td
                  draggable="true"
                  on:dragstart={(e) =>
                    (c = { x: Number(e.target.innerHTML), id: e.target.id })}
                  id="x{i(x, y, n)}"
                  class={i(x, y, n) > size ? "h e" : "e"}>{i(x, y, n)}</td
                >
              {/each}</tr
            >{/each}
        </table>
      {/if}
    </td>
    <td class="c2" />
    <td
      class="s"
      id="h2"
      on:dragover={(e) => e.preventDefault()}
      on:drop={(e) => {
        h2 += c.x;
        document.getElementById(c.id).classList.add("h");
      }}>{h2}</td
    >
  </table>
{/if}
<br />
<a href="https://cses.fi/problemset/task/1092" target="_blank"
  >CSES Problem Set: Two Sets</a
>

<style lang="scss">
  :global(i) {
    color: red;
  }
  :global(b) {
    font-weight: normal;
    color: rgb(33, 112, 44);
  }
  h1,
  code,
  div,
  a {
    text-shadow: 1px 1px 3px gray;
  }
  h1 {
    text-align: center;
    color: rgb(40, 79, 66);
    margin: 0px;
  }
  td {
    text-align: center;
    border: solid 1px black;
    box-shadow: 1px 1px 3px rgb(149, 167, 173);
    border-radius: 6px;
  }
  td.cont,
  td.c2 {
    all: unset;
    display: table-cell;
  }
  td.c2 {
    width: 40px;
  }
  td.e {
    width: 36px;
    height: 26px;
    background-color: rgb(182, 224, 228);
  }
  td.s {
    width: 56px;
    box-shadow: 1px 1px 3px inset black;
  }
  td#h1 {
    background-color: rgb(177, 223, 208);
  }
  td#h2 {
    background-color: rgb(223, 194, 177);
  }
  :global(.h) {
    visibility: hidden;
    background-color: aliceblue;
  }
  table {
    margin: auto;
  }
  input {
    width: 550px;
  }
  div {
    color: rgb(30, 78, 89);
    font-size: 10px;
  }
</style>
