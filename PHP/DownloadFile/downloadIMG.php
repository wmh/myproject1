<?php
header('Content-Disposition:attachment; filename="IMG_0045.jpg"');
header('Content-Type:application/octet-stream; name="IMG_0045.jpg"');
echo file_get_contents("IMG_0764.jpg");
?>