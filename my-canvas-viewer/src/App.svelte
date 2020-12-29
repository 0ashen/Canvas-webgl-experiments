<script>
    export let name;
    export const pages = [
        {path: '/dots', label: '/dots',},
        {path: '/mario', label: '/mario',}
    ];
</script>

<main>
    <sidebar>
        <nav>
            <ul>
                {#each pages as page}
                    <li>
                        <a href={page.path}>
                            {page.label}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    </sidebar>
</main>

<style lang="scss">
  main {
    display: flex;

    sidebar {
      width: 200px;
      background-color: #e2e2e2;
      nav {
        ul {
          display: block;

          li {
            list-style: none;
            display: block;

            a {
              font-size: 25px;
            }
          }
        }
      }
    }
  }
</style>