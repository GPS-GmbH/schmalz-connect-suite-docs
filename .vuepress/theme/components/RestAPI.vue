<template>
    <div class="break-out-full-width swagger-ui">
        <div class="wrapper">
            <p>Do you already have a system running Sicon.OS? <br> Below you can enter your hostname to interactively test your API</p>
            <label>Hostname: <input type="text" v-model="host" @input="setHost"></label>
        </div>
        <div ref="api"></div>
    </div>
</template>

<script>
import { SwaggerUIBundle } from 'swagger-ui-dist'
import spec from '../spec.json'
import 'swagger-ui-dist/swagger-ui.css'
export default {
    async mounted() {
        this.setHost('huiii')
        this.setup()
    },
    data: () => ({
        host: '',
        spec,
        swagger: null,
    }),
    methods: {
        setup() {
            this.swagger = SwaggerUIBundle({
                domNode: this.$refs.api,
                spec: this.spec,
            })
        },
        setHost() {
            this.spec.host = this.host
            this.setup()
        }
    }
}
</script>

<style>
    .scheme-container, .base-url {
        display: none;
    }
</style>
