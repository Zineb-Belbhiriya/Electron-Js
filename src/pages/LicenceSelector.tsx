import React from 'react';
import LicenceTypeCard from '../components/LicenceTypeCard';
import svg from '../logo.svg';

const LicenceType: React.VFC = () => {
  return (
    <div className="flex justify-center flex-col h-screen bg-cover bg-[url(https://images.pexels.com/photos/417018/pexels-photo-417018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)]">
      <h1 className="text-center text-gray-700 text-4xl font-bold mb-[5em] bg-gray-50 py-4 bg-opacity-60">
        {' '}
        Les Différentes Catégories de Permis de Conduire
      </h1>
      <p className="text-center p-12 text-white	text-xl py-4 bg-opacity-60">
        {' '}
        En Maroc, vous devez être titulaire de différents permis de conduire pour conduire différents types de
        véhicules. Pour chacun, vous devrez passer une épreuve théorique, le Code de la route, et une épreuve de
        conduite. L’épreuve pratique peut être unique (pour le permis B par exemple) ou peut s’effectuer en deux temps
        avec une épreuve en circulation et une épreuve hors circulation. Faisons le tour de chaque permis et de ses
        particularités : véhicules concernés, conditions d’accès, formation et examen.
      </p>
      <div className="flex justify-center items-center">
        <LicenceTypeCard
          licenceType="Permis de voiture catégorie B (B, B1, B2, BE)"
          imgSrc="https://img.icons8.com/cotton/344/sedan--v2.png"
          url="/carLicence"
        />
        <LicenceTypeCard
          licenceType="Permis de professionnels catégorie C et D"
          imgSrc="https://img.icons8.com/cotton/344/truck--v1.png"
          url="/truckLicence"
        />
        <LicenceTypeCard
          licenceType="admin"
          imgSrc="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/344/external-dashboard-ecommerce-xnimrodx-blue-xnimrodx.png"
          url="/login"
        />
      </div>
    </div>
  );
};

export default LicenceType;
