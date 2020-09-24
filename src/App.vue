<template>
<!-- <body> -->
    <div>
        <header>
            <nav class="navbar">
                <div class="navbar-menu">
                    <div class="navbar-start">
                        <router-link class="navbar-item" to="/">Home</router-link>
                        <router-link class="navbar-item" to="/students">Students</router-link>
                    </div>
                </div>
            </nav>
        </header>
        
        <main>
            <div class="container">
                <router-view></router-view>
            </div>
        </main>        
    </div>
<!-- </body> -->
</template>