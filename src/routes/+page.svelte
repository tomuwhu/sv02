<script>
  var data = {x: 0, id:""}
</script>
<h1>Táblázat + Drag & Drop</h1>
<table>
{#each Array(10) as _, y}
  <tr>
  {#each Array(10) as _,x}
    <td 
      draggable="true"
      on:dragstart= {e => data = {x: Number(e.target.innerHTML), id: e.target.id }}
      on:dragover = {e => e.preventDefault()}
      on:drop = {e => {
        e.target.innerHTML=Number(e.target.innerHTML) + data.x
        document.getElementById(data.id).innerHTML = ""
      }}
      id = "x{1 + 10 * y + x}"
      >{1 + 10 * y + x}</td>
  {/each}
  </tr>
{/each}
</table>
<style>
  h1 {
    text-align: center;
  }
  td {
    width: 36px;
    height: 26px;
    text-align: center;
    border: solid 1px black;
    border-radius: 6px;
  }
  table {
    margin: auto;
  }
</style>