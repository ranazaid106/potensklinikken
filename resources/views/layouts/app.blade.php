<!DOCTYPE html>
<!--  This site was created in Webflow. https://www.webflow.com  -->
{{-- <!--  Last Published: Mon Jul 03 2023 19:52:05 GMT+0000 (Coordinated Universal Time)  --> --}}


<html data-wf-page="6495c3eb756614ec2443881a" data-wf-site="6495c3eb756614ec24438827">
  

{{-- <html data-wf-page="6495c3eb756614ec24438821" data-wf-site="6495c3eb756614ec24438827"> --}}

  <head>
    <title>@yield('yield')</title>
    <meta charset="utf-8" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    

<!-- bootstrap css link -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

<!-- bootstrap css link -->



    <link href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,700" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
  

    <!-- project css-->
    <link rel="stylesheet" href="{{ asset('front_end/css/style.css')}}" />
    <link href="{{ asset('front_end/css/normalize.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('front_end/css/webflow.css') }}" rel="stylesheet" type="text/css" />
    <link  href="{{ asset('front_end/css/potensklinikken-test-site-77c2c30a8a4a8.webflow.css') }}"rel="stylesheet" type="text/css"  />
    <!-- project css-->

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="crossorigin="anonymous"referrerpolicy="no-referrer"
    />
    <!-- End Font Awesome -->
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"> -->





    
  
<style>
  .container{
    max-width: 80rem;
  }
  .parent {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          flex:1;
          background-color: #3f6490;
          width: 160px;
          height: 44px;
          border-radius: 10px;
          background-color: #feba88;
        }
        .parent:hover {
          transform: translate(7px,-7.5px);
        }
       .book-tid-child2{
          position: absolute;
          top: -7px;
          left:7.5px;
          width: 160px;
          height: 44px;
          background-color: #3f6490;
          border-radius: 10px;
          z-index: -1;
          font-weight: 500;
          font-size: 1rem;
       }
  
  </style>
<body>

	 <!-- Start header -->
  @include('layouts.frontend.header')


 <!-- End header -->
 <!-- Start Content -->

    <div class="page-wrap grey" >
      <main>
        @yield('content')
    </main>
    </div>

 <!-- Start Content -->

    <!-- Start Footer -->

    @include('layouts.frontend.footer')

 <!-- end Footer -->

    <!-- project js-->

    <script
      src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6495c3eb756614ec24438827"
      type="text/javascript"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"
    ></script>

    <script src="{{ asset('front_end/js/webflow.js')}}" type="text/javascript"></script>

    <!-- project js-->

    <script src="{{ asset('front_end/js/jquery.min.js')}}"></script>
    <script src="{{ asset('front_end/js/popper.js')}}"></script>
    <script src="{{ asset('front_end/js/bootstrap.min.js')}}"></script>
    <script src="{{ asset('front_end/js/main.js')}}"></script>
  </body>
</html>
