import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import Slideshow from '../components/Slideshow';
import CollapseComponent from '../components/CollapseComponent';
import PageErreur from './PageErreur';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/PageLogement.scss';

const PageLogement = () => {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id);
  
  
    if (!logement) {
      return <PageErreur />;
    }

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: i <= rating ? '#FF6060' : '#E0E0E0' }}
                />
            );
        }
        return stars;
    };

    const renderHostName = (name) => {
        const [firstName, lastName] = name.split(' ');
        return (
            <div className="host-name">
                <div>{firstName}</div>
                <div>{lastName}</div>
            </div>
        );
    };

    return (
        <div className="page-logement">
            <Slideshow images={logement.pictures} />
            <div className="logement-details">
                <div className="title-host-container">
                    <div className="title-container">
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                    </div>
                    <div className="host-info">
                        {renderHostName(logement.host.name)}
                        <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
                    </div>
                </div>
                <div className="tags-container">
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <p key={index}>{tag}</p>
                        ))}
                    </div>
                    
                    <div className="rating-container">
                        {renderStars(logement.rating)}
                    </div>
                </div>
                <div className="collapse-container">
                    <CollapseComponent className="collapse-component" title="Description" content={logement.description} />
                    <CollapseComponent className="collapse-component" title="Equipements" content={logement.equipments.map((item, index) => <li key={index}>{item}</li>)} />
                </div>
            </div>
        </div>
    );
};

export default PageLogement;