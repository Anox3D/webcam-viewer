<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Webcam viewer</title>
    </head>
    <body>
        <video id="webcam" width="100%"></video>

        <!-- Script -->
        <script>
            navigator.getUserMedia({ video: true }, function(stream){
                const webcam = document.getElementById("webcam");

                webcam.src = window.URL.createObjectURL(stream);
            }, function(e){
                alert(`I don't think you have a webcam... or I can't find it.\n(Error: ${e})`);
            });
        </script>
    </body>
</html>
