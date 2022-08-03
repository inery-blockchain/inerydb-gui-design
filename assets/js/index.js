/* Aside Menu Script */

const accordion = document.querySelectorAll(".aside_accordion");
const padding = 10;
accordion.forEach((acc) => {
  acc.addEventListener('click', (e) => {
      const height = acc.nextElementSibling.scrollHeight;
      acc.classList.toggle('active');
      if (acc.classList.contains('active')) {
        acc.nextElementSibling.style.maxHeight = `${height+padding}px`;
        acc.nextElementSibling.style.paddingBottom = `${padding}px  `;
      }else {
        acc.nextElementSibling.style.maxHeight = 0;
        acc.nextElementSibling.style.paddingBottom = 0;
      };
  });
});

const accordionExpand = document.getElementById('aside_accordion_expand');
const accordionShrink = document.getElementById('aside_accordion_shrink');
function expandAll () {
  accordion.forEach((acc) => {
    const height = acc.nextElementSibling.scrollHeight;
    acc.classList.add('active');
    acc.nextElementSibling.style.maxHeight = `${height+padding}px`;
    acc.nextElementSibling.style.paddingBottom = `${padding}px  `;
  })
}
function shrinkAll () {
  accordion.forEach((acc) => {
    acc.classList.remove('active');
    acc.nextElementSibling.style.maxHeight = 0;
    acc.nextElementSibling.style.paddingBottom = 0;
  })
}
accordionExpand.addEventListener('click', expandAll);
accordionShrink.addEventListener('click', shrinkAll);

/* Modal Script */

const deleteButton = document.querySelectorAll('.table_delete');
const cancelButton = document.querySelectorAll('.cancel_modal');

function openModal() {
  document.body.insertAdjacentHTML('beforeend',
    `<div id='modal' class="modal_container">
      <div class="modal_content">
        <div class="top_line"></div>
        <div class="modall_inner_wrapper">
          <h3>Delete Table?</h3>
          <p>Are you sure you want to delete table “furniture-database” If you delete it, you will permanently lose data stored in that table.</p>
          <div class="modal_buttons">
            <button class="modal_close" type="button">Cancel</button>
            <button type="button">Delete Table</button>
          </div>
        </div>
        <div class="modal_badge">
          <svg width="27" height="34" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.07692 10.625V31.875C2.07692 33.0438 3.01154 34 4.15385 34H22.8462C23.9885 34 24.9231 33.0438 24.9231 31.875V10.625H2.07692ZM8.30769 29.75H6.23077V14.875H8.30769V29.75ZM12.4615 29.75H10.3846V14.875H12.4615V29.75ZM16.6154 29.75H14.5385V14.875H16.6154V29.75ZM20.7692 29.75H18.6923V14.875H20.7692V29.75ZM25.4423 4.25H18.6923V1.59375C18.6907 1.17158 18.526 0.767176 18.2343 0.468653C17.9425 0.17013 17.5472 0.00167864 17.1346 0L9.86538 0C9.45276 0.00167864 9.05751 0.17013 8.76574 0.468653C8.47397 0.767176 8.30933 1.17158 8.30769 1.59375V4.25H1.55769C1.1449 4.25112 0.749335 4.41939 0.457449 4.71804C0.165562 5.01668 0.00109639 5.42141 0 5.84375V8.5H27V5.84375C26.9989 5.42141 26.8344 5.01668 26.5426 4.71804C26.2507 4.41939 25.8551 4.25112 25.4423 4.25ZM16.6154 4.25H10.3846V2.15263H16.6154V4.25Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>`
  );
  const modal = document.getElementById('modal');
  const cancelBtn = document.getElementsByClassName('modal_close')[0];
  cancelBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', onClickOutside);
};

const onClickOutside = (e) => {
  if (e.target != e.currentTarget) {
    return
  } else {
      closeModal();
  }
};

function closeModal () {
  const modal = document.getElementById('modal');
  document.body.removeChild(modal);
  modal.removeEventListener('click', onClickOutside);
};

deleteButton.forEach((button)=> {
  button.addEventListener('click', openModal);
});

/* Header menu script */

const indicator = document.querySelector('.navigation_selection_indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  el.classList.add('is-active');
}
items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});