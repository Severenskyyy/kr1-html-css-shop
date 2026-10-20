// Открытие и закрытие модального окна «Условия доставки» (страница product.html)

const deliveryModal = document.getElementById('delivery-modal');
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');

openModalButton.addEventListener('click', function () {
    deliveryModal.showModal();
});

closeModalButton.addEventListener('click', function () {
    deliveryModal.close();
});
