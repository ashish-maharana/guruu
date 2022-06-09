<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    {{--    <meta name="csrf-token" content="{{ csrf_token() }}">--}}
    {{--    <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://js.stripe.com/v3 pagewrap.bundle.js ">--}}

    <title>{{env('SITE_NAME')}}</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" crossorigin="anonymous">
    <!-- CSS only -->
    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body id="page-top" class="sidebar-toggled">
<main>
    <p>Click on the button below to reset your password.</p><br/><a href="{{env('APP_URL')}}/{{$token}}/reset-password"><button type="button" class="btn btn-danger">Reset Password</button></a>
    @if (session('resent'))
        <div class="alert alert-success" role="alert">
            {{ __('A fresh verification link has been sent to your email address.') }}
        </div>
    @endif
</main>
    <!-- React JS -->
<script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
