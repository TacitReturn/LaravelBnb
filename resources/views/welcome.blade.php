<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name') }}</title>
     <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
    <!-- Google Fonts Roboto -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="{{ secure_asset('css/bootstrap.min.css')}}">
    <!-- Material Design Bootstrap -->
    <link rel="stylesheet" href="{{ secure_asset('css/mdb.min.css') }}">
    <!-- Admin styles -->
    <link rel="stylesheet" href="{{ secure_asset('css/mdb.admin.min.css') }}">
    <!-- Your custom styles (optional) -->
    <link rel="stylesheet" href="css/style.css">       
    </head>
    <body>
       <div id="app">
           <index></index>
       </div>

    <script src="{{ secure_asset('js/app.js') }}" defer></script>
    </body>
</html>