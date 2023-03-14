import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const StickyCollectionDiv = styled.div`
  width: 100%;
  margin-top: 00px;

  .view-collection-link {
    margin-top: 10px;
  }

  h3 {
    font-weight: 500;
    font-size: 3.4em;

    @media screen and (max-width: 1200px) {
      font-size: 2.4rem;
      margin-top: 15px;
    }

    @media screen and (max-width: 900px) {
      font-size: 1.25rem;
      margin-top: 15px;
    }
  }

  p {
    font-weight: 500;
    font-size: 1.7rem;
    cursor: pointer;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
      font-size: 0.85rem;
    }
    @media screen and (max-width: 900px) {
      font-size: 0.85rem;
    }
  }

  .main {
    padding: 10px;
  }

  .grid-container {
    padding: 10px;
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

  .right-large-img-container {
    position: relative;
    height: 100%;

    .absolute-links {
      position: absolute;

      font-size: 0.75rem;
      font-weight: 500;
      background-color: #fff;
      padding: 2px;
    }

    .absolute-link-1 {
      top: 50%;
      left: 56px;

      transform: translate(0%, -50%);
      @media screen and (max-width: 1200px) {
        left: 36px;
        top: 41%;
      }
    }

    .absolute-link-2 {
      top: 508px;
      right: 40px;
      @media screen and (max-width: 1200px) {
        top: 388px;
      }
    }
  }
`;

const StickyCollection = () => {
  return (
    <StickyCollectionDiv>
      <Box
        sx={
          {
            // display: {
            //   xs: "none",
            //   sm: "none",
            //   md: "inherit",
            // },
          }
        }
      >
        <div className="grid-container">
          <Grid container spacing={1.3}>
            <Grid item xl={6} lg={6} md={4}>
              <Grid container spacing={1.3} style={{ height: "100%" }}>
                <Grid
                  item
                  xs={12}
                  style={{
                    alignSelf: "flex-end",
                    margin: "100px 0 30px 0",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={10} sm={8}>
                      <h3>24KFOREVER</h3>
                      <p>
                        “NATURES FIRST GREEN IS GOLD” ©2023 — STAYGOLDSTUDIOS
                      </p>
                      <p></p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xl={6} lg={6} md={8}>
              <RightImg />
            </Grid>
          </Grid>
        </div>
      </Box>
    </StickyCollectionDiv>
  );
};

function RightImg() {
  return (
    <div className="right-large-img-container">
      <img
        style={{
          width: "100%",
          height: "auto",
        }}
        src="/img/bigImage.jpg"
        alt="img-alt"
      />

      <Link
        to="/product/ClassicMafiaLongSleeve"
        className="absolute-links absolute-link-1"
        style={{ textTransform: "uppercase" }}
      >
        {"[1]"} classic mafia long sleeve
      </Link>

      <Link
        to="/product/Classic24KLongSleeve"
        className="absolute-links absolute-link-2"
        style={{ textTransform: "uppercase" }}
      >
        {"[2]"} classic 24k long sleeve
      </Link>
    </div>
  );
}

export default StickyCollection;
