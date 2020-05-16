<template>
    <section class="justify-evenly flex wrap">
        <div class="flex column forms-div justify-around">
            <form class="flex column justify-around">
                <h2>Create User</h2>
                <input type="text" placeholder="name">
                <input type="email" placeholder="email">
                <input type="text" placeholder="password">
                <button>Create</button>
            </form>
            <form class="flex column justify-around">
                <h2>Search User</h2>
                <input type="email" placeholder="email">
                <input type="text" placeholder="password">
                <button>Search</button>
            </form>
        </div>
        <div class="result">

        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>