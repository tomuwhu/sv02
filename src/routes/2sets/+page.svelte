<script>
  var c = { x: 0, id: "" };
  var size = 12,
    render = true,
    h1 = 0,
    h2 = 0,
    h1t = [],
    h2t = [],
    help = false;
  $: n = Math.trunc(Math.sqrt(size) + 0.99999);
  const i = (x, y, n) => 1 + n * y + x;
  function rerender(e) {
    (render = false), (h1 = 0), (h2 = 0), (h1t = []), (h2t = []);
    setTimeout(() => (render = true));
  }
</script>

<h1>Two Sets <button on:click={() => (help = !help)}>Problem</button></h1>
<code
  >Your task is to divide the numbers 1,2,…,n into two sets of equal sum.</code
>
<div>
  n = {size}
  ({(n - 1) ** 2}≤{size}≤{n ** 2} ⇒ {n}x{n} - {size} = {n ** 2 == size
    ? `0) filled all`
    : `${n ** 2 - size} unused)`}
  {#if help}
    <span>
      🗝 ∑(1..{size}) = {(size * (size + 1)) / 2}
      {@html ((size * (size + 1)) / 2) % 2
        ? `is odd => <i>There is no solution.</i>`
        : `is even => <b>There are solutions.</b>`}, Target: {(size *
        (size + 1)) /
        4 -
        Math.max(h1, h2)} 🗝
    </span>
  {/if}
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
        h1t.push(c.x);
        document.getElementById(c.id).classList.add("h");
      }}>{h1}</td
    >
    <td class="c2" />
    <td class="cont">
      {#if h1 + h2 == (size * (size + 1)) / 2}
        {#if h1 == h2}
          <table class="sol">
            <tr><td colspan={2}><b>Solved:</b></td></tr>
            <tr
              ><td class="l h1">Set&nbsp;1:</td><td class="r h1"
                >{h1t.sort((a, b) => a - b).join(", ")}</td
              ></tr
            >
            <tr
              ><td class="l h2">Set&nbsp;2:</td><td class="r h2"
                >{h2t.sort((a, b) => a - b).join(", ")}</td
              ></tr
            >
          </table>
        {:else}
          <code>Unsolved</code>
        {/if}
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
        h2t.push(c.x);
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
  table.sol tr td {
    padding: 6px;
  }
  td.l {
    text-align: left;
    font-size: 11px;
    color: rgb(14, 44, 61);
    padding: 6px;
  }
  td.r {
    text-align: right;
    font-size: 11px;
    color: rgb(16, 54, 72);
    padding: 6px;
  }
  button {
    all: unset;
    cursor: pointer;
    color: rgb(47, 20, 20);
  }
  button:hover {
    color: rgb(143, 84, 84);
  }
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
    padding-top: 14px;
    margin-top: 0px;
    width: 56px;
    box-shadow: 1px 1px 3px inset black;
  }
  td#h1,
  .h1 {
    background-color: rgb(177, 223, 208);
  }
  td#h2,
  .h2 {
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
