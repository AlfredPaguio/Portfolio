<div>
     A good traveler has no fixed plans and is not intent upon arriving.


     <div wire:offline>
        This device is currently offline.
    </div>


    <div>
        <!-- Button to trigger the modal -->
        <button wire:click="openModal" class="btn btn-primary">Open Modal</button>

        @teleport('body')
            @if ($showModal)
                <div class="modal fade show" style="display: block;" tabindex="-1" aria-modal="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Home</h5>
                                <button type="button" class="btn-close"
                                wire:click="closeModal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <!-- Modal content goes here -->
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


    {{--
        <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div>
    </div>
</div>

        --}}
</div>
