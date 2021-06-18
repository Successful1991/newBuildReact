import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './Card.module.scss';

export const Card = ({ ...props  }) => <div className={css.card}>
      <div className={css.card__top}>
        <div className={css.card__type}>
          <span data-key="type">{props.type}</span>
        </div>
        <div className={css.card__close} />
        <label data-id="" data-key="id" className={css.card__add_favourites}>
          <input type="checkbox" data-key="checked" />
        </label>
        <div className={css.card__image}>
          <img src="" data-key="src" />
        </div>
      </div>
      <div className={css.card__middle} />
      <div className={css.card__bottom}>
        <table className={css.card__table}>
          <tbody>
          <tr className={css.card__row}>
            <td className={css.card__name}>№ квартиры</td>
            <td className={css.card__value} data-key="number" >{props.number}</td>
          </tr>
          <tr className={css.card__row}>
            <td className={css.card__name}>Этаж</td>
            <td className={css.card__value} data-key="floor" >{props.floor}</td>
          </tr>
          <tr className={css.card__row}>
            <td className={css.card__name}>Площадь м<sup>2</sup></td>
            <td className={css.card__value} data-key="area" >{props.area}</td>
          </tr>
          <tr className={css.card__row}>
            <td className={css.card__name}>комнат</td>
            <td className={css.card__value} data-key="rooms" >{props.rooms}</td>
          </tr>
        </tbody>
      </table>
      <div className={css.card__buttons}>
        <button type="button" data-key="id" className={css.card__link}>Детальніше
        </button>
      </div>
    </div>
</div>;
