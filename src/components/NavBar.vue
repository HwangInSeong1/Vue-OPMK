<template>
    <nav class="nav02">
        <ul>
            <li><router-link to="#">Notice</router-link></li>
            <li>
                <router-link to="/Market001">Main Menu1</router-link>
                <ul>
                    <li><router-link to="#">Sub Menu</router-link></li>
                    <li><router-link to="#">Sub Menu</router-link></li>
                    <li><router-link to="#">Sub Menu</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="/Two">Main Menu2</router-link>
                <ul>
                    <li><router-link to="#">Sub Menu</router-link></li>
                    <li><router-link to="#">Sub Menu</router-link></li>
                    <li><router-link to="#">Sub Menu</router-link></li>
                </ul>
            </li>
            <li><router-link to="/Three">Main Menu3</router-link>
                <ul>
                    <li><router-link to="#">Sub Menu</router-link></li>
                    <li><router-link to="#">Sub Menu</router-link></li>
                    <li><router-link to="#">Sub Menu</router-link></li>
                </ul>
            </li>
            <li><router-link to="#">Main Menu4</router-link>
                <ul>
                    <li><router-link to="#">Sub Menu</router-link></li>
                    <li><router-link to="#">Sub Menu</router-link></li>
                    <li><router-link to="#">Sub Menu</router-link></li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

};
</script>

<style>
@import url(../css/NavBar.css);
</style>
