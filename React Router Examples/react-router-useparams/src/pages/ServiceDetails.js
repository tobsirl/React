import React from 'react';
import { useParams } from 'react-router-dom';
import servicesData from './servicesData';

function ServiceDetails() {
  let { serviceId } = useParams();

  const thisService = servicesData.find(service => service._id === serviceId);

  return (
    <div>
      <h1>Service Details Page</h1>
      <h3>{thisService.name}</h3>
    </div>
  );
}

export default ServiceDetails;
