import { FunctionComponent, useState, useCallback } from "react";
import { Button } from "@mui/material";
import Filters from "./Filters";
import PortalPopup from "./PortalPopup";
import styles from "./FilterBar.module.css";

const FilterBar: FunctionComponent = () => {
  const [isFiltersOpen, setFiltersOpen] = useState(false);

  const openFilters = useCallback(() => {
    setFiltersOpen(true);
  }, []);

  const closeFilters = useCallback(() => {
    setFiltersOpen(false);
  }, []);

  return (
    <>
      <header className={styles.filterbar}>
        <div className={styles.vibefilters}>
          <div className={styles.planetEarth11Parent}>
            <img
              className={styles.planetEarth11}
              loading="lazy"
              alt=""
              src="/planetearth-1-1.svg"
            />
            <div className={styles.exploration}>Exploration</div>
          </div>
          <div className={styles.fi9684425Parent}>
            <img
              className={styles.fi9684425Icon}
              loading="lazy"
              alt=""
              src="/fi-9684425.svg"
            />
            <div className={styles.seminars}>Seminars</div>
          </div>
          <div className={styles.fi1973742Parent}>
            <img
              className={styles.fi1973742Icon}
              alt=""
              src="/fi-1973742.svg"
            />
            <div className={styles.gardening}>Gardening</div>
          </div>
          <div className={styles.fi5224425Parent}>
            <img
              className={styles.fi5224425Icon}
              loading="lazy"
              alt=""
              src="/fi-5224425.svg"
            />
            <div className={styles.wildlife}>Wildlife</div>
          </div>
          <div className={styles.fi4994534Parent}>
            <img
              className={styles.fi4994534Icon}
              loading="lazy"
              alt=""
              src="/fi-4994534.svg"
            />
            <div className={styles.advocacy}>Advocacy</div>
          </div>
          <div className={styles.fi2335526Parent}>
            <img
              className={styles.fi2335526Icon}
              loading="lazy"
              alt=""
              src="/fi-2335526.svg"
            />
            <div className={styles.activities}>Activities</div>
          </div>
          <button className={styles.fi2550089Parent}>
            <img
              className={styles.fi2550089Icon}
              alt=""
              src="/fi-2550089.svg"
            />
            <div className={styles.agriculture}>Agriculture</div>
          </button>
          <div className={styles.idea21Parent}>
            <img
              className={styles.idea21}
              loading="lazy"
              alt=""
              src="/idea-2-1.svg"
            />
            <div className={styles.projects}>Projects</div>
          </div>
          <div className={styles.fi10302969Parent}>
            <img
              className={styles.fi10302969Icon}
              alt=""
              src="/fi-10302969.svg"
            />
            <div className={styles.festivals}>Festivals</div>
          </div>
        </div>
        <Button
          className={styles.filtersbutton}
          startIcon={<img width="18px" height="18px" src="/barsfilter-2.svg" />}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#213502",
            fontSize: "15",
            borderColor: "#d7d7d7",
            borderRadius: "5px",
            "&:hover": { borderColor: "#d7d7d7" },
            width: 112,
            height: 56,
          }}
          onClick={openFilters}
        >
          Filters
        </Button>
      </header>
      {isFiltersOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilters}
        >
          <Filters onClose={closeFilters} />
        </PortalPopup>
      )}
    </>
  );
};

export default FilterBar;
