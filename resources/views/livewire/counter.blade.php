<div>
    <h1>{{ $count }}</h1>

    <button wire:click="increment">+</button>

    <button wire:click="decrement">-</button>

    <div>
        <!-- Button to trigger the modal -->
        <button wire:click="openModal" class="btn btn-primary">Open Modal</button>

        @teleport('body')
            @if ($showModal)
                <div class="modal fade show" style="display: block;" tabindex="-1" aria-modal="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">From counter</h5>
                                <button type="button" class="btn-close"
                                        wire:click="closeModal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h1>{{ $count }}</h1>
                                    <button wire:click="increment">+</button>
                                    <button wire:click="decrement">-</button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" wire:click="closeModal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            @endif
        @endteleport
    </div>

</div>
