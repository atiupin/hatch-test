import { City, fetchCities } from 'modules';
import { FC, useEffect, useState } from 'react';
import { CitiesPage } from './CitiesPage';
import { ErrorPage } from './ErrorPage';

export const IndexPage: FC = () => {
  const [cities, setCities] = useState<City[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchCities.then(setCities).catch(setError);
  }, []);

  if (error) return <ErrorPage error={error} />;
  if (cities) return <CitiesPage cities={cities} />;

  return null;
};