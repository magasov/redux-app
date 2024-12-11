import React from "react";

import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constans/api";
import { getPeopleId } from "../../services/getPeopleData";

// import styles from "./PeoplePage.module.css";

const PeoplePage = () => {
  const [people, setPeople] = React.useState([]);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      return {
        name,
        url,
      };
    });

    setPeople(peopleList);
  };

  React.useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      {people && (
        <ul>
          {people.map(({ name, url }) => (
            <li key={url}>{name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PeoplePage;
