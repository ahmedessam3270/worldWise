import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../Contexts/CitiesContext";
function CityList() {
  const { isLoading, cities } = useCities();
  console.log(cities);
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Please enter you first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
