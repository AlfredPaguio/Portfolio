<?php

namespace App\Livewire;

use Livewire\Component;

class Counter extends Component
{
    public $count = 1;
    public $showModal = false;

    public function increment()
    {
        $this->count++;
    }

    public function decrement()
    {
        $this->count--;
    }

    public function openModal(){
        $this->showModal = !$this->showModal;
    }

    public function render()
    {
        return view('livewire.counter');
    }
}
