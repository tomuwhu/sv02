<script>
  var c = { x: 0, id: "" };
</script>

<h1>Táblázat + Drag & Drop</h1>
<table>
  {#each Array(10) as _, y}<tr
      >{#each Array(10) as _, x}
        <td
          draggable="true"
          on:dragstart={(e) =>
            (c = { x: Number(e.target.innerHTML), id: e.target.id })}
          on:dragover={(e) => e.preventDefault()}
          on:drop={(e) => {
            e.target.innerHTML = Number(e.target.innerHTML) + c.x;
            document.getElementById(c.id).classList.add("h");
          }}
          id="x{1 + 10 * y + x}">{1 + 10 * y + x}</td
        >
      {/each}</tr
    >{/each}
</table>
<br />
<a href="2sets">Two Sets Problem</a>
<a href="orarend">Órarend</a>
<a href="orarendbw">Nyomtatni</a>

<style lang="scss">
  h1 {
    text-align: center;
    color: rgb(40, 79, 66);
  }
  td {
    width: 36px;
    height: 26px;
    text-align: center;
    border: solid 1px black;
    border-radius: 6px;
    background-color: rgb(182, 224, 228);
  }
  :global(.h) {
    visibility: hidden;
  }
  table {
    margin: auto;
  }
  a {
    all: unset;
    color: rgb(30, 54, 86);
    cursor: pointer;
    margin: 10px;
    padding: 10px;
    border: solid 1px;
    border-radius: 6px;
  }
  a:hover {
    background-color: rgb(30, 54, 86);
    color: white;
  }
</style>
