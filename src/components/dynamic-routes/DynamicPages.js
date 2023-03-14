import { useParams } from "react-router-dom";

import Classic24kHoddieSignatureEditrion from "../../pages/product/Classic24kHoodieSignatureEdition";
import ClassicMafiaHoodie from "../../pages/product/ClassicMafiaHoodie";
import ClassicMafiaLongSleeve from "../../pages/product/ClassicMafiaLongSleeve";
import ClassicMafiaTee from "../../pages/product/ClassicMafiaTee";
import Classic24kLongSleeve from "../../pages/product/Classic24kLongSleeve";
import Classic24kTee from "../../pages/product/Classic24kTee";

const DynamicPages = () => {
  const params = useParams();

  if (params.page === "Classic24kHoodieSignatureEdition") {
    return <Classic24kHoddieSignatureEditrion />;
  }
  if (params.page === "ClassicMafiaHoodie") {
    return <ClassicMafiaHoodie />;
  }
  if (params.page === "ClassicMafiaLongSleeve") {
    return <ClassicMafiaLongSleeve />;
  }
  if (params.page === "ClassicMafiaTee") {
    return <ClassicMafiaTee />;
  }
  if (params.page === "Classic24kTee") {
    return <Classic24kTee />;
  }
  if (params.page === "Classic24KLongSleeve") {
    return <Classic24kLongSleeve />;
  }
};

export default DynamicPages;
