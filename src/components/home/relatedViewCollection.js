import styled from "@emotion/styled";
import PrintOneImgBoxBottom from "./PrintOneImgBoxForOnlyBottom";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { RelatedProductData } from "../../api/RelatedProduct";
import { useState, useEffect } from "react";

export const CatalogContentDivForViewCollectionRelated = styled.div`
  width: 100%;

  .sm-right {
    @media screen and (max-width: 600px) {
      text-align: right;
    }
  }

  .view-collection-txt-related {
    color: #c4c4c4;

    span {
      margin-right: 10px;
    }
  }

  h4 {
    position: relative;
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;

    .fixed-bracket {
      position: relative;
      margin-left: 10px;

      ::before {
        position: absolute;
        content: "[";
        left: -5px;
      }
      ::after {
        position: absolute;
        content: "]";
      }
    }
  }

  .dynamic-bracket {
    position: relative;

    :hover::before {
      position: absolute;
      content: "[";
      left: -5px;
    }

    :hover::after {
      position: absolute;
      content: "]";
    }
  }

  .top-div {
    margin-top: 120px;
    padding: 20px 10px 10px 10px;
    display: flex;
    justify-content: space-between;
  }

  .img-arr-container {
    width: 98.5%;
    margin: auto;
  }

  .dynamic-img-title-container {
    flex-direction: row !important;
    align-items: flex-start;
    justify-content: space-between;

    li {
      margin-top: unset;
      margin-right: 16px;
    }
  }

  .single-img-container {
    margin-bottom: 30px;
  }
`;

const RelatedViewCollection = () => {
  const [relatedData, setRelatedData] = useState(RelatedProductData);
  const [isLoading, setIsLoading] = useState(true);
  const [productDataFake, setProductDataFake] = useState([]);
  let data_ = [];
  let count = 0;

  useEffect(() => {
    (async () => {
      let rootWordpressLink =
        "https://demo-oct.000webhostapp.com//wp-json/wp/v2/";

      let blogArr = [];
      let res = await fetch(
        `${rootWordpressLink}posts?_fields=title,categories,featured_media,tags,excerpt,slug`
      );
      let data = await res.json();

      let count = 0;

      let obj = data[count];

      async function reCallAble1(obj) {
        let { categories, featured_media, tags, excerpt, title, slug } = obj;

        let productObj = {};
        //product title
        productObj.title = title.rendered;
        //product slug
        productObj.routeLink = slug;
        //product catagory name
        let promise1 = new Promise(async (resolve, reject) => {
          async function reCallAble2(obj1) {
            let resCategories = await fetch(
              `${rootWordpressLink}categories/${obj1}`
            );
            let { name } = await resCategories.json();

            productObj.catagory = name;

            resolve(1);
          }

          reCallAble2(categories[0]);
        });
        //product img
        let promise2 = new Promise(async (resolve, reject) => {
          let resMedia = await fetch(
            `${rootWordpressLink}media/${featured_media}`
          );
          let { media_details } = await resMedia.json();
          let { sizes } = media_details;
          let { full } = sizes;
          let { source_url } = full;

          productObj.img = source_url;

          resolve(1);
        });
        //product price
        let promise3 = new Promise(async (resolve, reject) => {
          let { rendered } = excerpt;
          let div_ = document.createElement("div");
          div_.innerHTML = rendered;

          productObj.price = div_.children[0].innerText;
          resolve(1);
        });
        //product sizes
        productObj.sizes = [];
        let countTags = 0;

        let promise4 = new Promise(async (resolve, reject) => {
          async function reCallAble3() {
            let resTags = await fetch(
              `${rootWordpressLink}tags/${tags[countTags]}`
            );
            let { name } = await resTags.json();

            productObj.sizes.push(name);

            productObj.sizes = productObj.sizes.sort((a, b) => {
              if (a > b) {
                return -1;
              } else {
                return 1;
              }
            });

            if (countTags < tags.length - 1) {
              countTags++;
              reCallAble3();
            }

            if (countTags === tags.length - 1) {
              resolve(1);
            }
          }

          reCallAble3();
        });

        (async () => {
          let data_ = await promise1;

          if (data_) {
            let data_2 = await promise2;

            if (data_2) {
              let data_3 = await promise3;

              if (data_3) {
                let data_4 = await promise4;

                if (data_4) {
                  commonLast(productObj);
                }
              }
            }
          }
        })();
      }

      function commonLast(productObj) {
        blogArr.push(productObj);
        count++;

        data.length > count && reCallAble1(data[count]);
        if (data.length <= count) {
          data_ = blogArr;
        }
      }

      reCallAble1(obj);
    })();

    setInterval(() => {
      if (data_.length > 0) {
        if (count < 1) {
          setProductDataFake(data_);
          setIsLoading(false);
          count++;
        }
      }
    }, 100);
  }, []);

  return (
    <CatalogContentDivForViewCollectionRelated>
      <div className="top-div">
        <Grid container spacing={1.3}>
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
                <h4 className="sm-right">24k 2023</h4>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}></Grid>
          <Grid item xs={6} sm={3}></Grid>
        </Grid>
      </div>

      <div className="img-arr-container">
        <Grid container spacing={1.3}>
          {isLoading && (
            <Grid item xs={12} sm={12} md={3}>
              <div>loading..</div>
            </Grid>
          )}

          {!isLoading &&
            productDataFake
              .filter((obj) => obj.catagory === "bottom images")
              .map((obj) => {
                return {
                  onLoadImg: obj.img,
                  onLoadTitle: obj.title,
                  onLoadSubTitles: obj.price,
                  hoverSubTitles: obj.sizes,
                  customize: obj.routeLink,
                };
              })
              .map((obj, i) => {
                return (
                  <Grid item sm={6} xs={6} md={3} key={i}>
                    <Link to={`/product/${obj.customize}`}>
                      <div className="single-img-container">
                        <PrintOneImgBoxBottom obj={obj} />
                      </div>
                    </Link>
                  </Grid>
                );
              })}
        </Grid>
      </div>
    </CatalogContentDivForViewCollectionRelated>
  );
};

export default RelatedViewCollection;
