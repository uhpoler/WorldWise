import styles from "./CountryItem.module.css";
import { getFlagUrl } from "./FlagEmogiToPng";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>
        <img src={getFlagUrl(country.emoji)} />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
