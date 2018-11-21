<!DOCTYPE html>

<html lang="en"> 

<head>

	<meta charset="UTF-8">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="">

    <meta name="author" content="">

	<title>Circle of Life</title>

    <link rel="shortcut icon" href="assets/img/logo.png" type="image/ico">

	<link rel="stylesheet" href="<?php echo base_url()?>assets/css/font-awesome.min.css">

	<link rel="stylesheet" href="<?php echo base_url()?>assets/css/bootstrap.min.css">

	<link rel="stylesheet" href="<?php echo base_url()?>assets/css/style.css">

	<link rel="stylesheet" href="<?php echo base_url()?>assets/css/site/plot.css">

	<link href='http://fonts.googleapis.com/css?family=Open+Sans:600italic,400,800,700,300' rel='stylesheet' type='text/css'>

	<link href='http://fonts.googleapis.com/css?family=BenchNine:300,400,700' rel='stylesheet' type='text/css'>

	<script src="<?php echo base_url()?>assets/js/modernizr.js"></script>

	<!--[if lt IE 9]>

      <script src="js/html5shiv.js"></script>

      <script src="js/respond.min.js"></script>

    <![endif]-->



    <input type="hidden" id="base_url" value="<?= base_url()?>"/>

    <input type="hidden" id="focus" value=""/>



</head>

<body>



	<!-- ====================================================

	header section -->

	<header class="top-header">

		<div class="container">

			<div class="row">

				<div class="col-xs-5 header-logo">

					<br>

					<!--<a href="index.html"><img src="<?php echo base_url()?>assets/img/logo.png" alt="" class="img-responsive logo"></a>-->

				</div>



				<div class="col-md-7">

					<nav class="navbar navbar-default">

					  <div class="container-fluid nav-bar">

					    <!-- Brand and toggle get grouped for better mobile display -->

					    <div class="navbar-header">

					      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">

					        <span class="sr-only">Toggle navigation</span>

					        <span class="icon-bar"></span>

					        <span class="icon-bar"></span>

					        <span class="icon-bar"></span>

					      </button>

					    </div>



					    <!-- Collect the nav links, forms, and other content for toggling -->

					    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">



					      <ul class="nav navbar-nav navbar-right">

					        <li><a class="menu active" href="#home" >Home</a></li>

					        <!--<li><a class="menu" href="#about">Circle of Life</a></li>-->

					        <li><a class="menu" href="#service">Benefits</a></li>

					        <!--<li><a class="menu" href="#start">Get started</a></li>-->
							<?php
								if(null!==$this->session->userdata('id')) {
									echo '<li><a class="menu" href="#start">Get Started</a></li>';
									echo '<li><a class="menu" href="../circleoflife-master/portal/">My Account</a></li>';
								}	
								else{	
									echo '<li><a class="menu" href="../circleoflife-master/portal/">Login</a></li>';
		                            echo '<li><a class="menu" href="../circleoflife-master/portal/account/register_account">Register</a></li>';
								}
							?>			


					        <li><a class="menu" href="#contact">Contact Us</a></li>


                          </ul>

					    </div><!-- /navbar-collapse -->

					  </div><!-- / .container-fluid -->

					</nav>

				</div>

			</div>

		</div>

	</header> <!-- end of header area -->