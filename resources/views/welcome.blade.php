<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#000000" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{env('SITE_NAME')}}</title>


    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <link rel="stylesheet" href="{{asset('fonts/simple-line-icons/css/simple-line-icons.css')}}">
    <link rel="stylesheet" href="{{asset('fonts/iconsmind-s/css/iconsminds.css')}}">
    <link href="{{asset('css/bootstrap-icons/bootstrap-icons.css')}}" rel="stylesheet">
    <link href="{{asset('css/boxicons/css/boxicons.min.css')}}" rel="stylesheet">
    <link href="{{asset('css/remixicon/remixicon.css')}}" rel="stylesheet">
    <!-- CSS only -->
    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="ltr rounded">


<noscript>You need to enable JavaScript to run this app.</noscript>
<script>
    var theme = "light.purplemonster";
    try {
        if (localStorage.getItem("__theme_selected_color")) {
            theme = localStorage.getItem("__theme_selected_color");
        }
    } catch (error) {
        theme = "light.purplemonster"
    }
    if (theme.indexOf("dark") !== -1) {
        document.documentElement.style.background = "#1b191b";
    }
</script>
<div id="root">
    <div class="loading"></div>
</div>


<!-- React JS -->
<script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>
