<template>
    <div>
        this is a privacy page
        <router-link tag="button" :to="{name : 'first'}">first </router-link>
        <router-link tag="button" :to="{name : 'second'}">second </router-link>
        <router-view/>
    </div>
</template>