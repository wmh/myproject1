<?php
set_time_limit(60);

$a = new aa();
$st = mt_rand(3,10);
sleep($st);
$a->run();

Class aa
{
    public function __construct()
    {
    }
    public function run() {
        $rtn = array(
          "status" => "ok",
          "errmsg" => "",
          "errno" => "",
          "folders" => array(
            array(
              "thumb"  => "http://a.staging.mimgs.com/index/space/ico_media_photos.png",
              "num"  => "4",
              "type"  => "photos",
              "folder_name"  => "Formosa1",
              "did"  => "e16e4a706e68a43f5a6b1eba6b1641de",
              "path"  => "/USB_1ZSR84YE/miiiCasa_Photos/English/Formosa1",
              "storage"  => "USB_1ZSR84YE",
              "dir"  => "/English/Formosa1",
              "url"  => "/space/videos/lists?did=02020202020202020202020202020202&s=USB_1ZSR84YE&d=%2FEnglish%2FFormosa1",
              "owner_name"  => "Kevin Luo",
              "owner_uid"  => "b560f39e684258a3ca852e56a9f73e71",
              "timediff"  => "438",
              "time"  => time(),
            ),
            array(
              "thumb"  => "http://a.staging.mimgs.com/index/space/ico_media_photos.png",
              "num"  => "6",
              "type"  => "photos",
              "folder_name"  => "Formosa2",
              "did"  => "e16e4a706e68a43f5a6b1eba6b1641de",
              "path"  => "/USB_1ZSR84YE/miiiCasa_Photos/English/Formosa12",
              "storage"  => "USB_1ZSR84YE",
              "dir"  => "/English/Formosa2",
              "url"  => "/space/videos/lists?did=02020202020202020202020202020202&s=USB_1ZSR84YE&d=%2FEnglish%2FFormosa2",
              "owner_name"  => "Kevin Luo",
              "owner_uid"  => "b560f39e684258a3ca852e56a9f73e71",
              "timediff"  => "457",
              "time"  => time() - 10,
            )
          )
        );
        echo json_encode($rtn);
    }
    public function __destruct()
    {
    }

}
?>