<template>
<div class="container-fluid">
      <!-- Breadcrumbs-->
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
        <li class="breadcrumb-item active">Registration</li>
      </ol>
      <!-- Example DataTables Card-->
      <div class="card mb-3">
        <div class="card-header">
          <i class="fa fa-address-card"></i> Register Delegate
        </div>

        <div class="card-body">
            <form enctype="multipart/form-data" @submit.prevent="create">
            <div class="form-group">
                <div class="form-row">
                <div class="col-md-6">
                    <label for="firstname">First Name</label>
                    <input name="firstname" class="form-control" id="firstname" type="text" placeholder="Enter first name"
                        v-validate="'required'"
                        v-model="firstname">
                    <small class="text-danger" v-show="errors.has('firstname')">
                        * {{ errors.first('firstname') }}
                    </small>
                </div>
                <div class="col-md-6">
                    <label for="lastname">Last Name</label>
                    <input class="form-control" name="lastname" type="text" placeholder="Enter last name"
                        v-validate="'required'"
                        v-model="lastname">
                    <small class="text-danger" v-show="errors.has('lastname')">
                        * {{ errors.first('lastname') }}
                    </small>
                </div>
                </div>
            </div>
            <div class="form-group">
                <div class="form-row">
                    <div class="col-md-6">
                        <label for="email">Email Address</label>
                        <input class="form-control" name="email" type="email" placeholder="Enter email"
                            v-validate="'required|email'"
                            v-model="email">
                        <small class="text-danger" v-show="errors.has('email')">
                            * {{ errors.first('email') }}
                        </small>
                    </div>
                    <div class="col-md-6">
                        <label for="mobile">Mobile No.</label>
                        <input class="form-control" name="mobile" type="text" placeholder="Enter mobile number"
                            v-validate="'required|digits:11'"
                            v-model="mobile">
                        <small class="text-danger" v-show="errors.has('mobile')">
                            * {{ errors.first('mobile') }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="form-row">
                <div class="col-md-6">
                    <label for="dateofbirth">Date of Birth</label>
                    <input class="form-control" name="dateofbirth" type="date" placeholder="Date of birth"
                        v-validate="'required|date_format:YYYY-MM-DD'"
                        v-model="dateofbirth">
                    <small class="text-danger" v-show="errors.has('dateofbirth')">
                        * {{ errors.first('dateofbirth') }}
                    </small>
                </div>
                </div>
            </div>
            <div class="form-group">
                <div class="form-row">
                    <div class="col-md-8">
                        <label for="organization">Church / Organization</label>
                        <input class="form-control" name="organization" type="text" placeholder="Enter organization"
                            v-validate="'required'"
                            v-model="organization">
                        <small class="text-danger" v-show="errors.has('organization')">
                            * {{ errors.first('organization') }}
                        </small>
                    </div>
                    <div class="col-md-4">
                        <label for="position">Position</label>
                        <input class="form-control" name="position" type="text" placeholder="Enter position"
                            v-validate="'required'"
                            v-model="position">
                        <small class="text-danger" v-show="errors.has('position')">
                            * {{ errors.first('position') }}
                        </small>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="form-row">
                <div class="col-md-6">
                    <label for="depositslip">Bank deposit slip</label>
                    <input class="form-control" name="depositslip" type="file"
                        v-validate="'required|image|ext:jpg,bmp,png'"
                        @change="imageChanged">
                    <small id="imgHelp" class="form-text text-muted">file types accepted: .jpg, .png, .bmp</small>
                    <small class="text-danger" v-show="errors.has('depositslip')">
                        * {{ errors.first('depositslip') }}
                    </small>
                </div>
                </div>
            </div>
            
            <div class="text-left">
                <hr>
                <input class="btn btn-success" type="submit" value="Register">
            </div>

            </form>
        </div>
    </div>
</div>
</template>

<script>
    export default {

        data() {
            return {
                firstname: '',
                lastname: '',
                email: '',
                mobile: '',
                dateofbirth: '',
                organization: '',
                position: '',
                depositslip: ''
            }
        },
        methods: {
            imageChanged (e) {
                var fileReader = new FileReader()
                fileReader.readAsDataURL(e.target.files[0])
                fileReader.onload = (e) => {
                    this.depositslip = e.target.result
                }
            },
            
            create() {
                this.$validator.validateAll().then(() => {
                    //if valid all, send request
                    
                })
            }

            
        }
    }
</script>

<style>
</style>
