<template>
    <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Dashboard">
          <a class="nav-link" href="/">
            <i class="fa fa-fw fa-dashboard"></i>
            <span class="nav-link-text">Dashboard</span>
          </a>
        </li>
         <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Delegates">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseDelegates" data-parent="#exampleAccordion">
            <i class="fa fa-fw fa-th-list"></i>
            <span class="nav-link-text">Delegates</span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseDelegates">
            <li>
              <a href="/delegates">List</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </li>
    </ul>
</template>
