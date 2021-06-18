import React, { useState } from 'react';
import Modal from 'react-modal';
import { TimelineLite } from 'gsap';
import BezierEasing from 'bezier-easing';

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

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.links = [
      'home', 'contacts', 'about', 'gallery'
    ];
    this.linkElements = [];
    this.myTween = new TimelineLite({paused: true});
  }
  
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // eslint-disable-next-line no-undef
    const easy = new BezierEasing(0.17, 0.7, 0.52, 0.93);
    this.myTween.staggerFrom(this.linkElements, .5, {x: -50, autoAlpha: 0, easy: easy}, 0.1).play();
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
  const menuClasses = cn('customStyles', {'open': this.state.modalIsOpen} );
    return <>
      <button className={css.burger} onClick={this.openModal}>Trigger Modal</button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        style={customStyles}
        contentLabel="Menu"
      >
        <div className='menu_header'>
          <button onClick={this.closeModal}>Close Modal</button>
        </div>
        <div className='menu_body'>
          <div className={menuClasses} />
          <ul>
            {this.links.map((link, i) => <li
              className={css.link}
              key={link}
              ref={li => this.linkElements[i] = li}
            >
              {link}</li>)}
          </ul>
        </div>
        <div className='menu_footer' />
      </Modal>
    </>;
  }
}
