<template>
<div class="">
        <navbar>    </navbar>
        <div class="content-wrapper">
            <router-view/>

            <footer class="sticky-footer">
                <div class="container">
                    <div-footer>    </div-footer>
                </div>
            </footer>
        </div>
</div>
</template>

<script>
import Navbar from '@/components/admin/Navbar'
import Footer from '@/components/admin/Footer'

export default {
  components: {
        'navbar': Navbar,
        'div-footer': Footer
  }
}
</script>

<style>
 body {
     @apply .fixed-nav .sticky-footer .bg-dark .sidenav-toggled;
 }
</style>
