import cn from "classnames";
import styles from "./card.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"


export default function CardHours({ title, googleLink, image, text, iconS } : any){
  const { t } = useTranslation("");
  return (
    <div className={cn([styles.wrapper, styles.wrapperAnime])}>
      <div className={styles.header}>
        {image == "" && iconS !== "" ? 
            iconS:
            <div className={styles.imageWrapper}>
              <img src={image} className={styles.image} alt="" />
            </div>
        }
        
        <div className={styles.badgeWrapper}>
          {googleLink === "" ? null : <div style={{alignContent:"baseline"}}
            className={cn([styles.dangerBadge, styles.badgeAnime])}
            >
            <a href={"/contacts"} type="button" style={{alignSelf:"baseline", textAlign:"center"}} className="text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            </a>
          </div>}
          
        </div>
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>{` ${title}`}</h1><br/>
        <hr/>
        <p style={{textAlign:"left", float:"left"}} className="text-gray-600 text-s">{t("hours.WorkingDays")}</p>
        <p style={{textAlign:"right"}} className="text-gray-600 text-s">8:30-19</p>
        <hr/>
        <p style={{textAlign:"left", float:"left"}} className="text-gray-600 text-s">{t("hours.HolidayDays")}</p>
        <p style={{textAlign:"right"}} className="text-gray-600 text-s">{t("hours.Ferme")}</p>
      </div>
    </div>
  );
};
