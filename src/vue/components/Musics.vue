<template>
    <section class="justify-evenly flex wrap">
        <div class="flex column forms-div justify-around">
            <form class="flex column justify-around">
                <h2>Create Music</h2>
                <input type="text" placeholder="name">
                <input type="text" placeholder="artist">
                <input type="text" placeholder="lyrics">
                <button>Create</button>
            </form>
            <form class="flex column justify-around">
                <h2>Search Music</h2>
                <input type="text" placeholder="name">
                <input type="email" placeholder="artist">
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