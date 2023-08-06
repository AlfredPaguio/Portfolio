<?php

namespace App\Livewire;

use Livewire\Component;

class Home extends Component
{

    public $showModal = false;

    public function openModal(){
        $this->showModal = !$this->showModal;
    }
    public function render()
    {
        return view('livewire.home');
    }
}
