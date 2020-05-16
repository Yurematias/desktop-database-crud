<template>
    <section class="justify-evenly flex wrap">
        <div class="flex column forms-div justify-around">
            <form class="flex column justify-around">
                <h2>Create User Music</h2>
                <input type="text" placeholder="user id">
                <input type="text" placeholder="music id">
                <button>Create</button>
            </form>
            <form class="flex column justify-around">
                <h2>Search User Music</h2>
                <input type="text" placeholder="user id">
                <input type="text" placeholder="music id">
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