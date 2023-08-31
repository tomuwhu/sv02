<script>
  var c = { x: 0, id: "" };
  var size = 7,
    render = true;
  $: n = Math.trunc(Math.sqrt(size) + 0.99999);
  const i = (x, y, n) => 1 + n * y + x;
  function rerender(e) {
    render = false;
    setTimeout(() => (render = true));
  }
</script>

<h1>Two Sets Problem</h1>
<code
  >Your task is to divide the numbers 1,2,…,n into two sets of equal sum.</code
>
<div>n = {size} ({n}x{n}, {n ** 2 - size} unnecessary)</div>

<br />
<input type="range" bind:value={size} min={3} max={100} on:focus={rerender} />
{#if render}
  <table>
    <td
      class="s s1"
      on:dragover={(e) => e.preventDefault()}
      on:drop={(e) => {
        e.target.innerHTML = Number(e.target.innerHTML) + c.x;
        document.getElementById(c.id).classList.add("h");
      }}>0</td
    >
    <td class="cont" />
    <td class="cont">
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
    </td>
    <td class="cont" />
    <td
      class="s s2"
      on:dragover={(e) => e.preventDefault()}
      on:drop={(e) => {
        e.target.innerHTML = Number(e.target.innerHTML) + c.x;
        document.getElementById(c.id).classList.add("h");
      }}>0</td
    >
  </table>
{/if}
<br />
<a href="https://cses.fi/problemset/task/1092" target="_blank"
  >CSES Problem Set: Two Sets</a
>

<style lang="scss">
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
  td.cont {
    all: unset;
    display: table-cell;
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
  td.s1 {
    background-color: rgb(177, 223, 208);
  }
  td.s2 {
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
