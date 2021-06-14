import React, { useState } from 'react';
import Modal from 'react-modal';

import cn from 'classnames';
import css from './Menu.module.scss';

Modal.setAppElement('#app');

const customStyles = {
  content: {
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    margin: '0',
    transform: 'none',
  }
};

export const Menu = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }
  const closeModal = () => {
    setIsOpen(false);
  };
  const menuClasses = cn('customStyles', {'open': modalIsOpen} );
  return (
    <>
      <button onClick={openModal}>Trigger Modal</button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Minimal Modal Example"
      >
        <div className='menu_header'>
          <button onClick={closeModal}>Close Modal</button>
        </div>
        <div className='menu_body'>
        <div className={menuClasses}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ad facere illum ipsa
          itaque labore natus nulla, odio praesentium quia tenetur vero voluptas.
          Deleniti deserunt hic illum itaque, numquam provident voluptatibus?</div>
        </div>
        <div className='menu_footer'></div>
      </Modal>
    </>
  );
};

