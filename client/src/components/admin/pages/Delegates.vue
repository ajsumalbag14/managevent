<template>
<div class="container-fluid">
      <!-- Breadcrumbs-->
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
        <li class="breadcrumb-item active">Tables</li>
      </ol>
      <!-- Example DataTables Card-->
      <div class="card mb-3">
        <div class="card-header">
          <i class="fa fa-table"></i> Data Table Example
        </div>

        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Organization</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Organization</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>

                        <tr
                            v-for="(delegate, key) in delegates">
                            
                            <td>{{ ++key }}</td>
                            <td>{{ delegate.firstname + ' ' + delegate.lastname }}</td>
                            <td>{{ delegate.position }}</td>
                            <td>{{ delegate.organization }}</td>
                            <td>{{ delegate.dateofbirth }}</td>
                            <td>{{ delegate.email }}</td>
                            <td><a href="#"><i class="fa fa-fw fa-info-circle"></i> View details</a></td>
                        
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
        <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
</div>
</template>

<script>
export default {
    data () {
        return {
          delegates: []
        }
    },
    mounted() {
        
        this.$http.get('api/delegate')
        .then(res => {
            this.delegates = res.body
        })
        
    }
}
</script>

<style>
    table  {
        font-size:12px;
    }
</style>
