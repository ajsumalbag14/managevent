<template>
<div class="container">
    <div class="card card-login mx-auto mt-5">
        <div class="card-header text-muted">Managevent&trade;</div>
        <div class="card-body">
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="emailaddress">Email address</label>
                    <input class="form-control" name="emailaddress" type="email" aria-describedby="emailaddress" 
                        placeholder="Enter email"
                        v-model="emailaddress"
                        v-validate="'required|email'">
                    <small class="text-danger" v-show="errors.has('emailaddress')">
                            * {{ errors.first('emailaddress') }}
                        </small>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input class="form-control" id="password" type="password" placeholder="Password"
                        v-model="password"
                        v-validate="'required'">
                    <small class="text-danger" v-show="errors.has('password')">
                            * {{ errors.first('password') }}
                        </small>
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <label class="form-check-label">
                        <input class="form-check-input" type="checkbox"> Remember Password</label>
                    </div>
                </div>

                <input type="submit" class="btn btn-primary btn-block" value="Login" />

            </form>
            <div class="text-center">
                <a class="d-block small mt-3" href="register.html">Register an Account</a>
                <a class="d-block small" href="forgot-password.html">Forgot Password?</a>
            </div>
        </div>
    </div>

    <br>
    <div-footer class="text-muted"></div-footer>
</div>
</template>

<script>
import Footer from '@/components/admin/Footer'
export default {

    components: {
        'div-footer': Footer
    },
    data () {
        return {
            emailaddress: '',
            password: '',
            remember: ''
        
        }
    },
    methods: {
        login() {
            this.$validator.validateAll().then(() => {
                //if valid all, send request
                
            })
        }
    }
}
</script>

<style>

</style>

