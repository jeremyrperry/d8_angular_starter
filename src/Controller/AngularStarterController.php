<?php
/**
 * The controller for the main page of the module.
 */
namespace Drupal\d8_angular_starter\Controller;

use Drupal\Core\Controller\ControllerBase;

class AngularStarterController extends ControllerBase{
    public function content(){
        return array(
            '#theme'=>'d8_angular_starter',
            '#base_href'=>'/angular-starter',
            '#content'=>$this->t('App is loading...')
        );
    }
}