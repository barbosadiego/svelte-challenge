<div class="modal">
  <div class="content">
    <button class="close">X</button>
    <h3>Update your item</h3>
    <div>
      <input type="text" />
      <button>Done</button>
    </div>
  </div>
</div>

<style>
  .modal {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .content {
    max-width: 600px;
    background-color: #fff;
    padding: 1rem;
    border-radius: 2px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .close {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
</style>
