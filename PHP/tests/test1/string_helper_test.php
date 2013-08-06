<?php

class String_helper_test extends PHPUnit_Framework_TestCase {

	public function test_get_utf8_basename()
	{
    require_once __DIR__ .'/../script1/string_helper.php';

		$expected = array(
			"我的公事包",
			"深藍-access.log"
		);

		$str = array(
			"/home/wmh/我的公事包",
			"/var/log/httpd/深藍-access.log"
		);

		$this->assertEquals($expected[0], get_utf8_basename($str[0]));
		$this->assertEquals($expected[1], get_utf8_basename($str[1]));
	}

}