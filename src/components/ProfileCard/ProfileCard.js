import React from 'react';
import './ProfileCard.css';

import bgPattern from '../../images/bg-pattern-card.svg';
import useImage from '../../images/image-victor.jpg';

const ProfileCard = () => {
  return (
    <article className='profile-card__container'>
      <img
        src={bgPattern}
        alt='graphic pattern'
        className='profile-card__pattern'
      />
      <div className='profile-card__user-container'>
        <img src={useImage} alt='user' className='profile-card__user-image' />
        <h1 className='profile-card__user-name'>
          Victor Crest <span className='profile-card__user-age'>26</span>
        </h1>
        <p className='profile-card__user-location'>London</p>
        <span className='profile-card__divider'></span>
        <ul className='profile-card__stats'>
          <li className='profile-card__stat-item'>
            <h2 className='profile-card__stat-type'>Followers</h2>
            <p className='profile-card__stat-count'>80K</p>
          </li>
          <li className='profile-card__stat-item'>
            <h2 className='profile-card__stat-type'>Likes</h2>
            <p className='profile-card__stat-count'>803K</p>
          </li>
          <li className='profile-card__stat-item'>
            <h2 className='profile-card__stat-type'>Photos</h2>
            <p className='profile-card__stat-count'>1.4K</p>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ProfileCard;
