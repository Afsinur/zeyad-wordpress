import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Customize from "../../../components/customize/Customize";

import { CatalogContentDivForViewCollectionRelated } from "../../../components/home/relatedViewCollection";
import { useState } from "react";
import { RelatedProductData } from "../../../api/RelatedProductAltForClassicMafiaHoodie";
import { ImgInfoContainer } from "../../../components/home/PrintOneImgBoxForOnlyBottom";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ClassicMafiaHoodie = () => {
  const [relatedProduct, setRelatedProduct] = useState(RelatedProductData);

  let imgDataArr = [
    {
      name_: "Classic Mafia Hoodie",
      price_: "$77.74",
      colors_: "white, black, yellow, gray, pink, beige, gold, purple, blue",
      sizes_: ["S", "M", " L"],
      dtImgArr: [
        {
          src: `/img/customize/ClassicMafiaHoddie/1.jpg`,
        },
        {
          src: `/img/customize/ClassicMafiaHoddie/2.jpg`,
        },
        {
          src: `/img/customize/ClassicMafiaHoddie/3.jpg`,
        },
      ],
    },
  ];

  return (
    <>
      <main>
        <Header />
        {imgDataArr &&
          imgDataArr.map((itm, i) => <Customize itm={itm} key={i} />)}

        <CatalogContentDivForViewCollectionRelated>
          <div className="top-div">
            <Grid
              container
              spacing={1.3}
              style={{
                padding: "0 10px",
              }}
            >
              <Grid item xs={6} sm={3}>
                <div>
                  <h4>RELATED ITEMS</h4>
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box
                  sx={{
                    display: {
                      sm: "none",
                      md: "inherit",
                    },
                  }}
                >
                  <div>
                    <h4>24k 2023</h4>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <div></div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box
                  sx={{
                    display: {
                      sm: "none",
                      md: "inherit",
                    },
                  }}
                >
                  <div>
                    {/* <h4 className="view-collection-txt-related">
                  <span>PREV</span>
                  <span>NEXT</span>
                </h4> */}
                  </div>
                </Box>
              </Grid>
            </Grid>
          </div>

          <div className="img-arr-container">
            <Grid container spacing={1.3}>
              {relatedProduct.map((obj, index) => {
                const {
                  onLoadImg,
                  onLoadTitle,
                  onLoadSubTitles,
                  hoverSubTitles,
                } = obj;
                return (
                  <Grid item sm={6} xs={12} md={3} key={index}>
                    <Link to={`/product/${obj.customize}`}>
                      <div className="single-img-container">
                        <ImgInfoContainer>
                          <div className="relative">
                            <img src={`${onLoadImg}`} alt="img" />
                            <div className="dynamic-img-title-container">
                              <div className="dflex dnone">
                                <p className="title">{onLoadTitle}</p>
                                <ul className="sub-ul">
                                  <li>{onLoadSubTitles}</li>
                                </ul>
                              </div>
                              <div className="dflex absoluteData">
                                <p className="title">quick add</p>
                                <ul className="sub-ul">
                                  {hoverSubTitles.map((itm, i) => (
                                    <li className="dynamic-bracket" key={i}>
                                      {itm}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </ImgInfoContainer>
                      </div>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </CatalogContentDivForViewCollectionRelated>

        <Footer />
      </main>
    </>
  );
};

export default ClassicMafiaHoodie;
