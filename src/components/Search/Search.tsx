import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions, GEO_API_URL } from '../../api';

interface Props {
  onSearchChange: (searchData: SearchData) => void;
}

export const Search: React.FC<Props> = React.memo(
  ({onSearchChange}) => {
    const [search, setSearch] = useState<null | SearchData>(null);

    const loadOptions = (inputValue: string, callback: any) => {
      if (!inputValue) {
        return callback([]);
      }

      return fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoApiOptions)
        .then(response => response.json())
        .then(response => {
          return {
            options: response.data.map((city: City) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              }
            }),
          }
        })
        .catch(err => console.error(err));
    }

    const handleOnChange = (searchData: null | SearchData) => {
      setSearch(searchData);
      onSearchChange(searchData!);
    }

    return (
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    )
  }
)