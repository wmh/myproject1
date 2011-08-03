<?php

$a = <<<CODE
    \$data['_wrap'] = TRUE;  // \$\$THIS_IS_REMOVE_IN_DEPLOY_SIGN\$\$
    if ( ! \$data['_wrap'])
    {
        //This is a test  // REMOVE_IN_DEPLOY
        return \$return_str;
    }

CODE;

echo preg_replace('/^(.*[$][$]THIS_IS_REMOVE_IN_DEPLOY_SIGN[$][$].*)$/im', '//$1', $a);


exit;
?>
